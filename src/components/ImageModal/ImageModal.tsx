import Modal from 'react-modal';
import { KeyboardEvent, useEffect } from 'react';
import styles from './ImageModal.module.css';
import { ImageModalProps } from './ImageModal.types';

Modal.setAppElement('#root');

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, image, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: globalThis.KeyboardEvent): void => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      contentLabel="Image Modal"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >      
      <div className={styles.modalcontent} onClick={(e) => e.stopPropagation()}>
        <img
          src={image?.urls.regular}
          alt={image?.alt_description || 'Unsplash image'}
          draggable={false}
        />
        <button
          onClick={onClose}
          aria-label="Close modal"
          className={styles.invisibleCloseBtn}
        >
          ×
        </button>
      </div>
    </Modal>
  );
};

export default ImageModal;
