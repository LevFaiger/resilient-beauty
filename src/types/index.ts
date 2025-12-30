export type Language = 'en' | 'he' | 'ru';

export interface LocalizedString {
  en: string;
  he: string;
  ru?: string;
}

export interface Artist {
  id: string;
  name: LocalizedString;
  biography: LocalizedString;
  imageUrl: string;
  additionalImages?: string[];
  videoUrl?: string;
  animationUrls?: string[];
  paintingDescription: LocalizedString;
  paintingStyle?: LocalizedString;
  links: string[];
  isFree: boolean;
  birthYear?: number;
  deathYear?: number;
}

export interface Translation {
  [key: string]: LocalizedString | Translation;
}
