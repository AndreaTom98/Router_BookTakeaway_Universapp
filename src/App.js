import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import axios from "axios";
import styles from "./style/SearchBar.module.css";

function App() {
  const [data, setData] = useState();

  const fetchData = async () => {
    const myData = await axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=harry"
    );
    console.log(myData);
    setData(myData);
  };

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h2>Cerca un libro</h2>
        <div style={{display: 'flex'}}>
          <input type="text" />
          <button onClick={fetchData}>Cerca</button>
        </div>
      </div>
      <Results data={data} />
    </div>
  );
}

export default App;
