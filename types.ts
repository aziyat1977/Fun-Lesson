
export interface SlideProps {
  isActive: boolean;
}

export enum Theme {
  Dark = 'dark',
  Light = 'light',
}

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface QuizItem {
  id: number;
  emoji: string;
  hint: string;
  answer: string;
  icon?: string; // Representation for answer list
}

// New Types
export interface SimpleQuestion {
  question: string;
  answer: string;
  hint?: string;
}

export interface TruthLieItem {
  topic: string;
  options: { text: string; isLie: boolean }[];
  explanation: string;
}

export interface BinaryChoiceItem {
  statement: string;
  isTrue: boolean;
  fact: string;
}

export interface WYRItem {
  optionA: string;
  optionB: string;
}

export interface ConnectionItem {
  words: string[];
  answer: string;
}

export interface SynonymItem {
  word: string;
  options: string[];
  correctIndex: number;
}
