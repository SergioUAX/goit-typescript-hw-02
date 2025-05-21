export interface UnsplashImage {
  id: string;
  alt_description: string | null;
  urls: {
    small: string;
    regular: string;
  };
}

export interface UnsplashResponse {
  results: UnsplashImage[];
}

