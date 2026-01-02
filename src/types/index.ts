export type SectionId =
  | "splash"
  | "intro"
  | "tools"
  | "elements"
  | "color"
  | "techniques"
  | "studio"
  | "gallery"
  | "quiz"
  | "certificate";

export interface ToolItem {
  id: string;
  name: string;
  desc: string;
  iconName: string; // Mapping icon string to Lucide component
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index
}
