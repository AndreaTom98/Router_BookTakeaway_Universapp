import {useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import axios from "axios";
import styles from "./style/SearchBar.module.css";

function App() {
  const [data, setData] = useState([]);
  const [inputText, setInputText] = useState("");

  const fetchData = async () => {
    const myData = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${inputText}`
    );
    setData(myData);
  };

  const handleInput = (e) => {
    setInputText(e.target.value)
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
      {data.length === 0 ? <p>cerca qualcosa...</p> : <Results data={data} />}
    </div>
  );
}

export default App;
