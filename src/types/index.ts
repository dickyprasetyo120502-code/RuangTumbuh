export type CategoryType = 
  | 'Kenali Dirimu'
  | 'Kenali Emosimu'
  | 'Pertemanan'
  | 'Belajar'
  | 'Keluarga'
  | 'Dunia Digital'
  | 'Pengembangan Diri';

export type GradeLevel = 'Kelas 7' | 'Kelas 8' | 'Kelas 9' | 'Semua Kelas';

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: CategoryType;
  readTime: string; // e.g. "4 menit"
  date: string;
  grade: GradeLevel;
  thumbnail: string;
  heroImage: string;
  featured?: boolean;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: {
    intro: string;
    sections: {
      heading?: string;
      body: string[];
      callout?: {
        type: 'quote' | 'tip' | 'reminder';
        title?: string;
        text: string;
      };
    }[];
    reflection: {
      title: string;
      questions: string[];
    };
  };
  relatedArticleSlugs: string[];
}

export interface VideoQuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface VideoItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  duration: string;
  category: CategoryType;
  youtubeId: string;
  videoUrl?: string;
  thumbnail: string;
  featured?: boolean;
  summary: {
    points: string[];
    keyTakeaway: string;
  };
  transcript: {
    timestamp: string;
    speaker: string;
    text: string;
  }[];
  reflection: {
    questions: string[];
  };
  quiz: VideoQuizQuestion[];
}

export interface ScenarioQuestion {
  id: number;
  situation: string;
  question: string;
  options: {
    id: 'A' | 'B' | 'C' | 'D';
    text: string;
    isRecommended: boolean;
    feedback: string;
  }[];
}

export interface CommunicationQuestion {
  id: number;
  situation: string;
  question: string;
  options: {
    id: 'A' | 'B' | 'C';
    text: string;
    style: 'Asertif' | 'Pasif' | 'Agresif';
    isCorrect: boolean;
    feedback: string;
  }[];
}

export interface LearningAssessmentQuestion {
  id: number;
  question: string;
  options: {
    type: 'visual' | 'auditory' | 'kinesthetic';
    text: string;
  }[];
}

export interface JournalEntry {
  id: string;
  date: string;
  mood: MoodType;
  prompt: string;
  content: string;
  tags?: string[];
}

export type MoodType = 'senang' | 'biasa' | 'sedih' | 'cemas' | 'lelah';

export interface MoodMeta {
  type: MoodType;
  label: string;
  sublabel: string;
  emoji: string;
  color: string;
  bgColor: string;
  borderColor: string;
  affirmation: string;
  recommendedCategory: CategoryType;
  advice: string;
  breathingHelp?: boolean;
}
