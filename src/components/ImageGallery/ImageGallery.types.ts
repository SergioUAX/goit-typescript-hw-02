import { UnsplashImage } from '../../components/Api/Api.types';

export interface ImageGalleryProps {
  images: UnsplashImage[];
  onImageClick: (image: UnsplashImage) => void;
}