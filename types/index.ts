export interface Book {
  id: string;
  slug: string;
  title: string;
  titleBn?: string;
  author: string;
  authorSlug: string;
  genre: string;
  genres: string[];
  description: string;
  shortDescription: string;
  coverColor: string;
  coverPattern?: string;
  rating: number;
  reviewCount: number;
  year: number;
  pages: number;
  language: 'bangla' | 'english' | 'both';
  tags: string[];
  featured?: boolean;
  trending?: boolean;
  isNewRelease?: boolean;
  whyRead?: string;
}

export interface Author {
  id: string;
  slug: string;
  name: string;
  nameBn?: string;
  genre: string;
  genres: string[];
  biography: string;
  shortBio: string;
  bookCount: number;
  location: string;
  featured?: boolean;
  isNewVoice?: boolean;
  isEmerging?: boolean;
  specialization?: string;
  awards?: string[];
  social?: {
    facebook?: string;
    instagram?: string;
    website?: string;
  };
}

export interface Community {
  id: string;
  name: string;
  nameBn?: string;
  location: string;
  members: number;
  currentBook: string;
  currentBookAuthor: string;
  nextMeeting: string;
  description: string;
  tags: string[];
  coverColor: string;
}

export interface Event {
  id: string;
  slug: string;
  title: string;
  titleBn?: string;
  date: string;
  time: string;
  location: string;
  venue: string;
  category: EventCategory;
  speaker?: string;
  description: string;
  tags: string[];
  isFeatured?: boolean;
  registrationUrl?: string;
}

export type EventCategory =
  | 'Author Meet'
  | 'Book Launch'
  | 'Reading Circle'
  | 'Writing Workshop'
  | 'Literary Discussion'
  | 'School Event'
  | 'University Event';

export interface ReaderStory {
  id: string;
  name: string;
  age?: number;
  category: string;
  location: string;
  quote: string;
  fullStory?: string;
}

export interface ReadingChallengeMonth {
  month: number;
  monthName: string;
  monthNameBn: string;
  theme: string;
  themeBn: string;
  description: string;
}

export interface WellbeingTopic {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}
