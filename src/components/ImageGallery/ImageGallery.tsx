import ImageCard from "../ImageCard/ImageCard";
import styles from './ImageGallery.module.css';
import { ImageGalleryProps } from './ImageGallery.types';

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <ul className={styles.gallery}>
      {images.map((image) => (
        <li key={image.id} onClick={() => onImageClick(image)}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};