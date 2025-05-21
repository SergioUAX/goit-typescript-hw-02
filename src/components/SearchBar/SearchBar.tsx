import { FiSearch } from "react-icons/fi";
import styles from './SearchBar.module.css';
import { SearchBarProps } from "./SearchBar.types";

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    const form = evt.currentTarget;
	  const topic = (form.elements.namedItem('topic') as HTMLInputElement).value;     
    onSearch(topic);
    form.reset();
  };

  return (
    <header className={styles.header}>
      <p>Image finder</p>
      <form onSubmit={handleSubmit}>
        <div>            
            <input            
                type="text"
                name="topic"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
            />
            <button type="submit"><FiSearch/>Search</button>
        </div>
      </form>
    </header>
  );
};