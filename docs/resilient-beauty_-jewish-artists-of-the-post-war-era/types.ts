
export enum Language {
  EN = 'en',
  HE = 'he'
}

export interface Artist {
  id: string;
  name: {
    [Language.EN]: string;
    [Language.HE]: string;
  };
  biography: {
    [Language.EN]: string;
    [Language.HE]: string;
  };
  imageUrl: string;
  paintingDescription: {
    [Language.EN]: string;
    [Language.HE]: string;
  };
  links: string[];
  isFree: boolean;
  videoUrl?: string;
  birthYear?: number;
  deathYear?: number;
}

export interface Translation {
  [key: string]: {
    [Language.EN]: string;
    [Language.HE]: string;
  };
}
