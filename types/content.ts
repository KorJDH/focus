export interface SiteLinkSet {
  app: string;
  openChat: string;
  instagram: string;
  inquiryForm?: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface ScheduleItem {
  label: string;
  value: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

export interface ScheduleEvent {
  id: string;
  badge: string;
  title: string;
  dayTime: string;
  location: string;
  capacity: string;
  status: string;
  image: string;
}
