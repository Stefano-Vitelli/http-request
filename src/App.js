import React from 'react';
import './App.css';
import MovieList from './components/MovieList';


function App() {
  const dummyMovies = [{
    id: 1,
    title: 'Dummy movie 1',
    openingText: 'This is a story tell by...',
    releaseDate: '2021-05-18'
  },
  {
    id: 2,
    title: 'Dummy movie 2',
    openingText: 'This is a story tell by...',
    releaseDate: '2021-05-18'
  }
]
  
  return (
  <React.Fragment>
    <section>
      <button> Fetch Movies</button>
    </section>
    <section>
      <MovieList movies={dummyMovies} />
    </section>
  </React.Fragment>
  );
}

export default App;
