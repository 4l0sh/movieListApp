import { Fragment, useState } from 'react';
import Metacritic from '../assets/images/Metacritic.png';
import RottenTomatoes from '../assets/images/rottenTomatoes.png';
import IMDb from '../assets/images/IMDb.png';
import Navbar from '../components/navbar';
import './homePage.css';

interface Rating {
  Source: string;
  Value: string;
}

const HomePage = () => {
  const [poster, setPoster] = useState(
    'https://m.media-amazon.com/images/I/81fk-N7tvbL._AC_UF894,1000_QL80_.jpg'
  );
  const [title, setTitle] = useState('Welcome to MovieList');
  const [plot, setPlot] = useState(
    'Search for your favorite movies to see the details here.'
  );
  const [actors, setActors] = useState('');
  const [awards, setAwards] = useState('');
  const [runTime, setRunTime] = useState('129 min');
  const [rating, setRating] = useState<Rating[]>([]);
  const [writer, setWriter] = useState('');
  addEventListener('submit', (e) => {
    e.preventDefault();
    apiRequest();
  });
  const apiRequest = async () => {
    const searchInput = document.getElementById(
      'searchInput'
    ) as HTMLInputElement;
    console.log(searchInput.value);
    fetch(
      `http://www.omdbapi.com/?t=${searchInput.value}&apikey=${import.meta.env.VITE_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setPoster(data.Poster || 'No Poster Available');
        setTitle(data.Title || 'No Title Available');
        setPlot(data.Plot || 'Info Not Available');
        setActors(data.Actors || 'Info Not Available');
        setAwards(data.Awards || 'Info Not Available');
        setRunTime(data.Runtime || 'Info Not Available');
        setRating(data.Ratings || 'Info Not Available');
        setWriter(data.Writer || 'Info Not Available');
        console.log(data.Ratings);
      })
      .catch((err) => console.log('Error Fetching Data', err));
  };

  rating.map((rating) => {
    if (rating.Source === 'Metacritic') {
      return (rating.Source = Metacritic);
    } else if (rating.Source === 'Rotten Tomatoes') {
      return (rating.Source = RottenTomatoes);
    } else if (rating.Source === 'Internet Movie Database') {
      return (rating.Source = IMDb);
    }
  });
  return (
    <Fragment>
      <div className='mainContainer'>
        <div className='searchContainer'>
          <form className='searchForm'>
            <input
              type='text'
              id='searchInput'
              placeholder='Search...'
              className='searchBar'
            />
            <button className='submitBtn'>
              <i className='fa-solid fa-magnifying-glass'></i>
            </button>
          </form>
        </div>
        <div className='contentContainer'>
          <div className='movieImageContainer'>
            <img
              className='Poster'
              src={poster}
              alt='Poster'
              draggable='false'
            />
          </div>
          <div className='movieInfo'>
            <div className='titleInfo'>
              <div className='title'>
                <h1 className='movieTitle'>{title}</h1> <p>({runTime})</p>
              </div>
              <div className='Ratings'>
                {rating.map((rating) => (
                  <div className='ratingContainer' key={rating.Source}>
                    <img
                      src={rating.Source}
                      alt={rating.Source}
                      className='rating'
                    />
                    <p> {rating.Value}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className='actors'>
              <strong className='strong'>Actors: {actors}</strong>
            </p>
            <p className='writer'>
              <strong className='strong'>Writer: {writer}</strong>
            </p>
            <p className='plot'>
              <strong className='strong'>Plot:</strong> {plot}
            </p>
            <p className='awards'>
              <strong className='strong'>Awards:</strong> {awards}
            </p>
          </div>
        </div>
        <Navbar />
      </div>
    </Fragment>
  );
};

export default HomePage;
