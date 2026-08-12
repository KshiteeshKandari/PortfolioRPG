import { createClient } from '@supabase/supabase-js';
import { SubstatSuggestion } from '../types/portfolio';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;

// Local fallback store for substat suggestions when Supabase isn't configured
const LOCAL_STORAGE_KEY = 'artificer_substat_suggestions';

export async function submitSubstatSuggestion(projectSlot: string, suggestion: string, suggestedBy?: string): Promise<{ success: boolean; count: number }> {
  const newSuggestion: SubstatSuggestion = {
    id: crypto.randomUUID(),
    projectSlot,
    suggestion,
    suggestedBy: suggestedBy || 'Anonymous Traveler',
    createdAt: new Date().toISOString()
  };

  if (supabase) {
    try {
      const { error } = await supabase
        .from('substat_suggestions')
        .insert([{
          project_slot: projectSlot,
          suggestion,
          suggested_by: suggestedBy || 'Anonymous Traveler',
          status: 'pending'
        }]);

      if (!error) {
        const { count } = await supabase
          .from('substat_suggestions')
          .select('*', { count: 'exact', head: true });
        return { success: true, count: count || 1 };
      }
    } catch (e) {
      console.warn('Supabase insert failed, using fallback storage', e);
    }
  }

  // Local fallback
  const existingStr = localStorage.getItem(LOCAL_STORAGE_KEY);
  const existing: SubstatSuggestion[] = existingStr ? JSON.parse(existingStr) : [];
  existing.push(newSuggestion);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(existing));
  return { success: true, count: existing.length };
}

export async function getSuggestionCount(): Promise<number> {
  if (supabase) {
    try {
      const { count, error } = await supabase
        .from('substat_suggestions')
        .select('*', { count: 'exact', head: true });
      if (!error && count !== null) return count;
    } catch (e) {
      console.warn('Supabase fetch failed', e);
    }
  }

  const existingStr = localStorage.getItem(LOCAL_STORAGE_KEY);
  const existing: SubstatSuggestion[] = existingStr ? JSON.parse(existingStr) : [];
  return Math.max(14, existing.length + 12); // Seeded count for RPG feel
}
