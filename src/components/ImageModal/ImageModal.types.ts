import { UnsplashImage } from '../../components/Api/api.types';

export interface ImageModalProps {
  isOpen: boolean;
  image: UnsplashImage | null;
  onClose: () => void;
}
