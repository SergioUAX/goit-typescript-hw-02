import styles from './LoadMoreBtn.module.css';
import { LoadMoreBtnProps } from './LoadMoreBtn.types';

export const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onLoadMore }) => {
  const handleOnClick = (evt: React.MouseEvent<HTMLButtonElement>): void => {
        evt.preventDefault(); 
        onLoadMore();  
  };

    return (
        <div className={ styles.loadmorebtn}>
            <button onClick={handleOnClick}>Load more</button>
        </div>
  );
};