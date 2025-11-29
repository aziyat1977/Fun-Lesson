export interface SlideProps {
  isActive: boolean;
}

export enum Theme {
  Dark = 'dark',
  Light = 'light',
}

export interface QuizItem {
  id: number;
  emoji: string;
  hint: string;
  answer: string;
  icon?: string; // Representation for answer list
}
