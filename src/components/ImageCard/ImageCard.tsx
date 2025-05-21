import styles from './ImageCard.module.css';
import { ImageCardProps } from './ImageCard.types';

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
    return (
        <div className={styles.card}>
            <img
                src={image.urls.small}
                alt={image.alt_description || "Unsplash image"}                
            />
        </div>
    );
};

export default ImageCard;