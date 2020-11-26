import {useEffect} from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import axios from 'axios';

function App() {

  const fetchData = async () => {
    const myData = await axios.get('https://www.googleapis.com/books/v1/volumes?q=harry');
    console.log(myData);
  }
  useEffect(fetchData, [])

  return (
    <div>
      <Header />
      <SearchBar />
      <Results />
    </div>
  );
}

export default App;
