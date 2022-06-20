import AddMovie from './components/AddMovie/AddMovie';
import MoviesList from './components/MoviesList';
import SearchMovie from './components/SearchMovie/SearchMovie';
import { moviesData } from './components/MoviesData';
import { useState } from 'react';

function App() {
  const [nameSearch, setNameSearch] = useState('');
  const [ratingSearch, setRatingSearch] = useState(1);
  return (
    <div className="App">
      <SearchMovie
        ratingSearch={ratingSearch}
        setRatingSearch={setRatingSearch}
        setNameSearch={setNameSearch}
      />
      <MoviesList
        moviesList={moviesData.filter(
          el =>
            el.name.toLowerCase().includes(nameSearch.toLowerCase().trim()) &&
            el.rating === ratingSearch
        )}
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <AddMovie />
      </div>
    </div>
  );
}

export default App;
