import { Project, RelicProject, ExperienceLore, EducationLore, ArchetypePreset, Synergy } from '../types/portfolio';

export const FLAGSHIP_PROJECTS: Project[] = [
  {
    id: 'asi-system',
    slot: 'Core Engine',
    name: 'Asi System',
    subtitle: 'AI-Assisted Case Management Platform',
    rarity: 5,
    level: 'Lv. 99',
    mainStat: { label: 'Retrieval Architecture', value: 'Two-tier Vector RAG (pgvector)' },
    rpgAttributes: {
      attack: 'Two-tier Vector RAG (pgvector)',
      defense: 'JWT Auth + Backend RBAC',
      maxHp: '80%+ Security Branch Coverage'
    },
    traitEffect: 'Multi-tenant Vector Data Isolation & Real-Time WebSocket Heartbeat Connection Pooling',
    subStats: [
      'JWT-based auth + backend-enforced RBAC',
      'Real-time WebSocket chat with heartbeat connection pooling',
      'Alembic schema migrations + optimistic locking',
      '80%+ branch coverage on security-critical paths (pytest, CI/CD)',
      'slowapi endpoint rate-limiting',
      'Per-recipient LLM summarization for read-only users'
    ],
    techTags: ['FastAPI', 'Vue 3', 'PostgreSQL', 'pgvector', 'WebSockets', 'JWT', 'RBAC', 'Alembic', 'pytest'],
    description: 'A secure, multi-tenant case management platform with strict role-based data isolation and a two-tier retrieval-augmented pipeline for querying verified and standard resource pools.',
    artworkType: 'rag-core',
    iconPath: '/assets/staff_icon.jpg',
    repoLink: null
  },
  {
    id: 'callisto-protocol',
    slot: 'Strike Module',
    name: 'Callisto Protocol',
    subtitle: 'Matching-Escrow Protocol (Cryptographic Prototype)',
    rarity: 5,
    level: 'Lv. 99',
    mainStat: { label: 'Core Cryptography', value: 'Oblivious Pseudorandom Function (OPRF)' },
    rpgAttributes: {
      attack: 'OPRF Tag Identifier Match',
      defense: 'RSA-OAEP Share Sealing',
      maxHp: 'AES-GCM Payload Encryption'
    },
    traitEffect: 'Shamir Secret Sharing Conditional Access — Decryption triggers strictly on verified cryptographic match',
    subStats: [
      'Shamir Secret Sharing for conditional access',
      'RSA-OAEP polynomial share sealing',
      'AES-GCM encryption',
      'Privacy-preserving identifier matching'
    ],
    techTags: ['Python', 'Cryptography', 'OPRF', 'Shamir Secret Sharing', 'RSA-OAEP', 'AES-GCM'],
    description: 'A privacy-preserving matching-escrow backend prototype for securely managing sensitive incident reports — decryption only occurs on a verified tag match.',
    artworkType: 'oprf-shield',
    iconPath: '/assets/shield_icon.jpg',
    repoLink: null
  },
  {
    id: 'doctors-office',
    slot: 'Failsafe Circuit',
    name: "Doctor's Office",
    subtitle: 'Full-Stack Scheduling Platform',
    rarity: 3,
    level: 'Lv. 99',
    mainStat: { label: 'Session Security', value: 'JWT-based Session Authentication' },
    rpgAttributes: {
      attack: 'Provider Booking Engine',
      defense: 'JWT Auth & Session Guards',
      maxHp: 'MySQL Relational Schema'
    },
    traitEffect: 'Fail-Safe Provider Scheduling & Real-time Video Consultation Signaling',
    subStats: [
      'Node.js + MySQL backend',
      'Provider booking + video consultation features',
      'RESTful API design'
    ],
    techTags: ['Node.js', 'MySQL', 'JWT', 'REST APIs'],
    description: 'A scheduling platform with secure session management, provider booking, and video consultation support.',
    artworkType: 'session-shield',
    iconPath: '/assets/badge_icon.jpg',
    repoLink: null
  },
  {
    id: 'tincan-platform',
    slot: 'Interface Lens',
    name: 'Tincan',
    subtitle: 'Professional Networking Platform (Team Lead)',
    rarity: 4,
    level: 'Lv. 99',
    mainStat: { label: 'UX Validation', value: '10+ User Flows Heuristically Evaluated' },
    rpgAttributes: {
      attack: '10+ Heuristic Usability Flows',
      defense: 'Focus Group Usability Benchmarks',
      maxHp: 'React Frontend Architecture'
    },
    traitEffect: 'Human-Centered Sprint Leadership — Owned frontend architecture & led 4-person engineering team',
    subStats: [
      'React + Node.js',
      'Adobe XD wireframing',
      'Focus groups + usability testing',
      'Led a 4-person team; owned frontend architecture and sprint planning'
    ],
    techTags: ['React', 'Node.js', 'Adobe XD', 'Usability Testing', 'Heuristic Evaluation'],
    description: 'A platform connecting junior professionals with industry mentors, built and led as a 4-person team, with usability findings directly informing navigation and accessibility decisions.',
    artworkType: 'ux-lens',
    iconPath: '/assets/lens_icon.jpg',
    repoLink: null
  },
  {
    id: 'foundation-plating-sealed',
    slot: 'Foundation Plating',
    name: 'Foundation Plating',
    subtitle: 'Production Reliability Engine',
    rarity: 1,
    level: 'Sealed',
    mainStat: { label: 'Status', value: 'Sealed Artifact' },
    rpgAttributes: {
      attack: 'Docker & K8s Pipeline',
      defense: 'GCP Cloud Infrastructure',
      maxHp: 'Production Stability'
    },
    traitEffect: 'Artifact Sealed — New gear is currently being forged in the armory.',
    subStats: ['New gear is currently being forged', 'System metrics loading'],
    techTags: ['Docker', 'Kubernetes', 'GCP'],
    description: 'New gear is being forged. Check back soon for unsealed repository links.',
    artworkType: 'sealed-plate',
    isSealed: true
  },
  {
    id: 'neural-core-sealed',
    slot: 'Neural Core',
    name: 'Neural Core',
    subtitle: 'Autonomous Subagent Companion',
    rarity: 1,
    level: 'Sealed',
    mainStat: { label: 'Status', value: 'Sealed Artifact' },
    rpgAttributes: {
      attack: 'Autonomous Agent Pipeline',
      defense: 'Vector Knowledge Store',
      maxHp: 'LangChain Orchestration'
    },
    traitEffect: 'Artifact Sealed — New gear is currently being forged in the armory.',
    subStats: ['New gear is currently being forged', 'Autonomous subagent pipeline'],
    techTags: ['LangChain', 'Vector RAG', 'LLMs'],
    description: 'New gear is being forged. Check back soon for unsealed repository links.',
    artworkType: 'sealed-core',
    isSealed: true
  }
];

export const RELIC_PROJECTS: RelicProject[] = [
  {
    id: 'social-media-ml',
    name: 'Social Media & Mental Health',
    subtitle: 'Machine Learning Data Analysis',
    rarity: 2,
    level: 'Lv. 50',
    mainStat: { label: 'Model Accuracy', value: '75.55% (KNN/SVM)' },
    rpgAttributes: {
      attack: '75.55% Classification Model',
      defense: 'NSDUH Survey Normalization',
      maxHp: 'Pandas & Seaborn Analysis'
    },
    traitEffect: 'Demographic Sentiment Correlation & Multi-Variable Statistical Regression',
    subStats: ['NSDUH + Core Trends survey analysis', 'Pandas, Seaborn, Matplotlib', 'Team-led statistical analysis'],
    techTags: ['Python', 'Pandas', 'Scikit-learn', 'KNN', 'SVM'],
    description: 'Analyzed national survey data to quantify correlations between social media use and depression across age demographics.',
    artworkType: 'ml-chart'
  },
  {
    id: 'fsharp-image-processing',
    name: 'F# Image Processing',
    subtitle: 'Apr 2022 – May 2022',
    rarity: 1,
    level: 'Lv. 40',
    mainStat: { label: 'Technique', value: 'Functional Recursion' },
    rpgAttributes: {
      attack: 'Tail Recursion Pixel Operators',
      defense: 'Immutable State Purity',
      maxHp: 'F# Functional Pipeline'
    },
    traitEffect: 'Pure Higher-Order Functional Transformations over Pixel Tuple Lists',
    subStats: ['Grayscale, rotate, zoom, threshold operations', 'Higher-order functions', 'Tail recursion over pixel-tuple lists'],
    techTags: ['F#', 'Functional Programming'],
    description: 'An image manipulation program built entirely with higher-order functions and tail recursion over pixel data.',
    artworkType: 'functional-recursion'
  },
  {
    id: 'movie-reviews-sql',
    name: 'Movie Reviews',
    subtitle: 'Jan 2022',
    rarity: 1,
    level: 'Lv. 30',
    mainStat: { label: 'Technique', value: '5-Table Relational Schema' },
    rpgAttributes: {
      attack: 'Relational Query Engine',
      defense: 'Foreign Key Schema Integrity',
      maxHp: 'Python SQL Query Backend'
    },
    traitEffect: 'Optimized 5-Table Foreign Key Indexing & Query Retrieval',
    subStats: ['SQL database design', 'Python query backend'],
    techTags: ['SQL', 'Python'],
    description: 'A movie information retrieval system backed by an organized 5-table SQL database.',
    artworkType: 'relational-db'
  },
  {
    id: 'connect-4-java',
    name: 'Connect 4',
    subtitle: 'Oct 2021',
    rarity: 1,
    level: 'Lv. 25',
    mainStat: { label: 'Feature', value: 'Optimal Move Suggestion + Undo' },
    rpgAttributes: {
      attack: 'Minimax Move Suggestion',
      defense: '2D Board Matrix Validation',
      maxHp: 'JavaFX Scene Builder GUI'
    },
    traitEffect: 'State Tree Backtracking & Heuristic Optimal Move Suggestion',
    subStats: ['Java/JavaFX GUI (Scene Builder)', '2D array board state', 'Theming + dynamic music'],
    techTags: ['Java', 'JavaFX', 'Maven'],
    description: 'A full-featured Connect 4 game with undo functionality, optimal move hints, and theme-based styling.',
    artworkType: 'connect-four'
  },
  {
    id: 'illinois-license-plates',
    name: 'Illinois License Plates',
    subtitle: 'Mar 2019 – Apr 2019',
    rarity: 1,
    level: 'Lv. 20',
    mainStat: { label: 'Technique', value: 'Hash Table w/ Collision Minimization' },
    rpgAttributes: {
      attack: 'Custom Hash Bucket Distribution',
      defense: 'O(1) Average Case Lookup',
      maxHp: 'C++ Memory Management'
    },
    traitEffect: 'Custom Chaining Hash Algorithm with Minimized Runtime Collision Factors',
    subStats: ['Custom bucket formation for runtime efficiency'],
    techTags: ['C++', 'Hash Tables', 'Data Structures'],
    description: 'A data structure project storing specialized license plates and fines while minimizing hash collisions.',
    artworkType: 'hash-table'
  },
  {
    id: 'eat-it-up-python',
    name: 'Eat It Up',
    subtitle: 'Sep 2018',
    rarity: 1,
    level: 'Lv. 10',
    mainStat: { label: 'Feature', value: 'Physics-Based Collision' },
    rpgAttributes: {
      attack: 'Velocity Vector Physics',
      defense: 'Array Score Tracking',
      maxHp: 'Python Turtle Canvas'
    },
    traitEffect: '2D Bounding-Box Physics Collision Engine in Python Turtle',
    subStats: ['Python turtle graphics', 'Score/life tracking via arrays'],
    techTags: ['Python', 'Turtle Graphics'],
    description: 'A 2D obstacle-avoidance game built with Python\'s turtle module, including basic physics for collision and movement.',
    artworkType: 'turtle-physics'
  }
];

export const EXPERIENCE_LORE: ExperienceLore[] = [
  {
    id: 'uic-biomedical-ai',
    role: 'Software Developer – AI Agents',
    organization: 'Dept. of Biomedical & Health Information Sciences, UIC',
    period: 'Apr 2026 – Present',
    description: 'Leading end-to-end development of a conversational AI assistant helping students navigate university resources.',
    highlights: [
      'RAG + automated web-scraping knowledge pipelines for real-time university resource retrieval',
      'Conducting co-design/thematic analysis research with ~20 students to shape AI response formats'
    ]
  },
  {
    id: 'whitson-llc',
    role: 'Full Stack Software Engineer',
    organization: 'Whitson LLC',
    period: 'Dec 2025 – Mar 2026',
    description: 'Built a cross-module data filtering system deployed across 4 analytical modules.',
    highlights: [
      'Deployed across 4 analytical modules used by 160+ enterprise clients',
      'Supported bulk batch workflows of up to 3,000 wells per run (Vue 2/3, Python, Pinia, FastAPI/Node)'
    ]
  },
  {
    id: 'uic-research-assistant',
    role: 'Graduate Research Assistant',
    organization: 'College of Applied Health Sciences, UIC',
    period: 'May 2024 – Dec 2025',
    description: 'Built backend dialogue modules and logic-flow architecture for a conversational AI assistant.',
    highlights: [
      'Engineered C# logic flows reducing dialogue error rates by 15%',
      '2nd author on "You Believe That You\'re Talking to a Real Person": Design and Development of AI-Promotora for Latino Dementia Patient Caregivers (ACM CHI 2026, under review)'
    ],
    paperNote: 'ACM CHI 2026 (Under Review)'
  }
];

export const EDUCATION_LORE: EducationLore[] = [
  {
    degree: 'M.S. in Computer Science',
    institution: 'University of Illinois at Chicago',
    year: 'Dec 2025',
    gpa: '4.0 / 4.0'
  },
  {
    degree: 'B.S. in Computer Science',
    institution: 'University of Illinois at Chicago',
    year: 'May 2023',
    gpa: '3.6 / 4.0',
    honors: 'Cum Laude'
  }
];

export const ARCHETYPES: ArchetypePreset[] = [
  {
    id: 'ai-agent-architect',
    name: 'AI Agent Architect',
    iconName: 'Bot',
    description: 'Centers on intelligent retrieval pipelines, vector databases (pgvector), and autonomous AI agent systems with human co-design.',
    equippedSlots: {
      'Core Engine': 'asi-system',
      'Strike Module': 'callisto-protocol',
      'Failsafe Circuit': 'doctors-office',
      'Interface Lens': 'tincan-platform',
      'Foundation Plating': 'foundation-plating-sealed',
      'Neural Core': 'neural-core-sealed'
    },
    highlightFocus: 'Retrieval RAG & LLM Orchestration'
  },
  {
    id: 'security-backend',
    name: 'Security-Minded Backend Engineer',
    iconName: 'Shield',
    description: 'Highlights applied cryptography (OPRF, Shamir Secret Sharing), RBAC, JWT auth, and high-performance API architectures.',
    equippedSlots: {
      'Core Engine': 'asi-system',
      'Strike Module': 'callisto-protocol',
      'Failsafe Circuit': 'doctors-office',
      'Interface Lens': 'tincan-platform',
      'Foundation Plating': 'foundation-plating-sealed',
      'Neural Core': 'neural-core-sealed'
    },
    highlightFocus: 'Applied Cryptography & RBAC Isolation'
  },
  {
    id: 'ui-ux-fullstack',
    name: 'UI/UX-Focused Full-Stack Engineer',
    iconName: 'Layout',
    description: 'Emphasizes human-centered design, 10+ heuristic usability evaluations, team lead ownership, and multi-tenant enterprise frontends.',
    equippedSlots: {
      'Core Engine': 'asi-system',
      'Strike Module': 'callisto-protocol',
      'Failsafe Circuit': 'doctors-office',
      'Interface Lens': 'tincan-platform',
      'Foundation Plating': 'foundation-plating-sealed',
      'Neural Core': 'neural-core-sealed'
    },
    highlightFocus: 'Heuristic Usability & Enterprise Vue/React UI'
  }
];

export const SYNERGIES: Synergy[] = [
  {
    id: 'vault-keepers-duet',
    name: "Vault Keeper's Duet",
    description: 'Equipping both Asi System and Callisto activates defense-in-depth security (RBAC + applied OPRF cryptography).',
    requiredProjectIds: ['asi-system', 'callisto-protocol'],
    bonusText: '+25% System Resilience & Cryptographic Data Isolation'
  },
  {
    id: 'retrieval-specialist',
    name: 'Retrieval Specialist',
    description: 'Pairs two-tier vector RAG architecture with subagent knowledge pipelines.',
    requiredProjectIds: ['asi-system', 'neural-core-sealed'],
    bonusText: '+30% Knowledge Precision & pgvector Index Efficiency'
  },
  {
    id: 'human-centered-systems',
    name: 'Human-Centered Systems',
    description: 'Pairs real user research & heuristic evaluation with scalable technical execution.',
    requiredProjectIds: ['tincan-platform', 'asi-system'],
    bonusText: '+20% User Experience Satisfaction & Frictionless Onboarding'
  }
];
