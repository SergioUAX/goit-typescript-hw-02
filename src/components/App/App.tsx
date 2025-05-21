import { useState, useEffect } from 'react';
import './App.module.css';
import { SearchBar } from "../SearchBar/SearchBar";
import { Toaster } from 'react-hot-toast';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { fetchImagesWithTopic } from '../../components/Api/Api';
import { UnsplashImage } from '../../components/Api/Api.types';
import { Loader } from '../Loader/Loader';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';


const App: React.FC = () => {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [topic, setTopic] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<UnsplashImage | null>(null);
    
  const handleSearch = (searchTopic: string): void => {
    if (searchTopic.trim() === '') {
      ErrorMessage("Please enter a search topic !!!");
    return;
    }
    setImages([]);
    setTopic(searchTopic);
  };

  useEffect(() => {
  const fetchImages = async () => {
    if (topic.trim() === '') return;
    try {
      setLoading(true);
      const data = await fetchImagesWithTopic(1, 12, topic);
      setImages(data.results);
      setPage(2);
    } catch (err: any) {
      ErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  };
  fetchImages();
  }, [topic]);

  const handleLoadMore = async (): Promise<void> => {
    if (topic.trim() === '') {
      ErrorMessage("Please enter a search topic !!!");
      return;
    }
    try {
      setLoading(true);
      const data = await fetchImagesWithTopic(page, 12, topic);
      setImages((prevImages) => [...prevImages, ...data.results]);
      setPage((prevPage) => prevPage + 1);
    } catch (err: any) {
      ErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (image: UnsplashImage): void => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch}/>
      <Toaster />
      {loading && <Loader />}
      <ImageGallery images={images} onImageClick={openModal}/>
      {images.length > 0 && !loading && <LoadMoreBtn onLoadMore={handleLoadMore} />}
      <ImageModal isOpen={isModalOpen} image={selectedImage} onClose={closeModal} />
    </div>
  );
};

export default App;
