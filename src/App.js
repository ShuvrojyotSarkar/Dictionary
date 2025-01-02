import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WordDetails from "./components/WordDetails";
import "./index.css";

function App() {
  const [word, setWord] = useState("");
  const [wordData, setWordData] = useState(null);

  const handleSearch = async (searchWord) => {
    const API_URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
    try {
      const response = await axios.get(API_URL);
      setWord(searchWord);
      setWordData(response.data[0]);
    } catch (error) {
      setWordData({ error: "Word not found. Please try another word." });
    }
  };

  return (
    <div className="app">
      <h1>Dictionary App</h1>
      <SearchBar onSearch={handleSearch} />
      {wordData && <WordDetails word={word} data={wordData} />}
    </div>
  );
}

export default App;
