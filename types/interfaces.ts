export interface IPost {
  id: any;
  title?: string;
  slug?: string;
  excerpt?: string;
  content?: string;
  publishedAt?: string;
  featuredImage?: string;
  seoDescription?: string;
  seoMetaImage?: string;
  products?: IPost[];
  body?: any;
}
export interface home {
  id: any;
  title?: string;
  excerpt?: string;
  featuredImage?: string;
  body?: any;
}
export interface about {
  id: any;
  title?: string;
  excerpt?: string;
  body?: any;
}

export interface Page {
  title: string;
  subtitle?: string;
  slug?: string;
  content: string;
  featuredImage?: string;
  seoDescription?: string;
  seoMetaImage?: string;
}
