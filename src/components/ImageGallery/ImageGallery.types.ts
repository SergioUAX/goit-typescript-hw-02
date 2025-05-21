import { UnsplashImage } from '../../components/Api/api.types';

export interface ImageGalleryProps {
  images: UnsplashImage[];
  onImageClick: (image: UnsplashImage) => void;
}