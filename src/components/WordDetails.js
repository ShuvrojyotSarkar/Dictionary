import React from "react";

function WordDetails({ word, data }) {
  if (data.error) {
    return <p className="error">{data.error}</p>;
  }

  const { meanings } = data;

  return (
    <div className="word-details">
      <h2>{word}</h2>
      {meanings.map((meaning, index) => (
        <div key={index}>
          <p><strong>Part of Speech:</strong> {meaning.partOfSpeech}</p>
          <p><strong>Definition:</strong> {meaning.definitions[0].definition}</p>
          <p><strong>Example:</strong> {meaning.definitions[0].example || "N/A"}</p>
          <p><strong>Synonyms:</strong> {meaning.synonyms.join(", ") || "N/A"}</p>
        </div>
      ))}
    </div>
  );
}

export default WordDetails;
