import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, MessageSquarePlus } from 'lucide-react';
import { submitSubstatSuggestion, getSuggestionCount } from '../../lib/supabase';

interface SubstatSuggestionFormProps {
  projectSlot: string;
  projectName: string;
}

export const SubstatSuggestionForm: React.FC<SubstatSuggestionFormProps> = ({ projectSlot, projectName }) => {
  const [suggestion, setSuggestion] = useState('');
  const [suggestedBy, setSuggestedBy] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [totalCount, setTotalCount] = useState<number>(14);

  useEffect(() => {
    getSuggestionCount().then(setTotalCount);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!suggestion.trim()) return;

    setIsSubmitting(true);
    const result = await submitSubstatSuggestion(projectSlot, suggestion.trim(), suggestedBy.trim());
    setIsSubmitting(false);
    
    if (result.success) {
      setSubmitted(true);
      setTotalCount(result.count);
      setSuggestion('');
    }
  };

  return (
    <div className="parchment-card p-4 rounded-lg bg-parchment-light border-2 border-ink space-y-3 mt-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <MessageSquarePlus className="w-4 h-4 text-terracotta" />
          <h4 className="font-serif font-bold text-ink text-sm">
            Community Forge: Suggest a Substat
          </h4>
        </div>
        <span className="text-xs font-mono font-semibold text-ink/70 bg-parchment px-2 py-0.5 rounded border border-ink/30">
          {totalCount} Substats Forged
        </span>
      </div>

      <p className="text-xs text-ink/80">
        What substat, security optimization, or UX enhancement would you add to make <strong>{projectName}</strong> a 5★ construct?
      </p>

      {submitted ? (
        <div className="p-3 bg-sage/20 border border-sage rounded flex items-center space-x-2 text-xs font-semibold text-ink">
          <CheckCircle2 className="w-4 h-4 text-sage flex-shrink-0" />
          <span>Substat recorded into the Artificer's ledger! Thank you for helping forge the codex.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-2">
          <textarea
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            placeholder="e.g. Add automated schema diff regression tests in CI/CD pipeline..."
            className="w-full text-xs p-2.5 rounded bg-parchment border border-ink/40 focus:border-terracotta outline-none text-ink placeholder:text-ink/40 resize-none h-16"
            required
          />

          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={suggestedBy}
              onChange={(e) => setSuggestedBy(e.target.value)}
              placeholder="Your name or handle (optional)"
              className="flex-1 text-xs p-2 rounded bg-parchment border border-ink/40 focus:border-terracotta outline-none text-ink placeholder:text-ink/40"
            />

            <button
              type="submit"
              disabled={isSubmitting || !suggestion.trim()}
              className="px-3 py-2 rounded bg-terracotta hover:bg-terracotta-hover disabled:opacity-50 text-parchment-light text-xs font-semibold flex items-center space-x-1 border border-ink shadow-ink-sm transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isSubmitting ? 'Forging...' : 'Submit'}</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
