import { UnsplashImage } from '../../components/Api/Api.types';

export interface ImageModalProps {
  isOpen: boolean;
  image: UnsplashImage | null;
  onClose: () => void;
}
