import {useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import axios from "axios";
import styles from "./style/SearchBar.module.css";

function App() {
  const [data, setData] = useState([]);
  const [inputText, setInputText] = useState("");

  const fetchData = async () => {
    if (inputText.trim() === "") {
      return 
    }
    const myData = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${inputText}`
    );
    setData(myData.data);
  };

  const handleInput = (e) => {
    setInputText(e.target.value)
  }

  const showResults = () => {
    // console.log(data.length === 0)
    if (data.totalItems === 0) {
      return <p>Ricerca senza risultati</p>
    } else if(data.length === 0) {
      return <p>cerca qualcosa...</p>
    } else {
      return <Results data={data} />
    }
  }

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h2>Cerca un libro</h2>
        <div style={{display: 'flex'}}>
          <input value={inputText} onChange={handleInput} type="text" />
          <button onClick={fetchData}>Cerca</button>
        </div>
      </div>
      {showResults()}
    </div>
  );
}

export default App;
