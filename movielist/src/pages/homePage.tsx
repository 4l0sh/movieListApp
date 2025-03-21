import { Fragment, useState } from 'react';
import './homePage.css';
const HomePage = () => {
  const [poster, setPoster] = useState('');
  const [title, setTitle] = useState('Movie Title');
  const [plot, setPlot] = useState('');
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
        setPoster(data.Poster);
        setTitle(data.Title);
        setPlot(data.Plot);
        console.log(data);
      })
      .catch((err) => console.log('Error Fetching Data', err));
  };
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
            <img className='Poster' src={poster} alt='' />
          </div>
          <div className='movieInfo'>
            <h1 className='movieTitle'>{title}</h1>
            <p className='plot'>
              <strong>Plot:</strong> {plot}
            </p>
          </div>
        </div>
        <div className='navigationContainer'>
          <div className='navItem'>Home</div>
          <div className='navItem'>Explore</div>
          <div className='navItem'>Library</div>
          <div className='navItem'>Account</div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
