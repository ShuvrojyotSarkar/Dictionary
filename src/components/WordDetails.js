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
          <p><strong>Definition:</strong> {meaning.definitions[0].definition}</p>
        </div>
      ))}
    </div>
  );
}

export default WordDetails;
