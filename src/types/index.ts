export type Language = 'en' | 'he';

export interface LocalizedString {
  en: string;
  he: string;
}

export interface Artist {
  id: string;
  name: LocalizedString;
  biography: LocalizedString;
  imageUrl: string;
  paintingDescription: LocalizedString;
  links: string[];
  isFree: boolean;
  birthYear?: number;
  deathYear?: number;
}

export interface Translation {
  [key: string]: LocalizedString | Translation;
}
