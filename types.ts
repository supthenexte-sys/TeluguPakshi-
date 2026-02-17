
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
  tags: string[];
}

export enum Category {
  BIG_STORIES = "బిగ్ స్టోరీస్",
  TELANGANA = "తెలంగాణ",
  ANDHRA_PRADESH = "ఆంధ్రప్రదేశ్",
  CINEMA = "సినిమా",
  REVIEWS = "రివ్యూస్",
  OTT = "ఓటీటీ"
}
