import React from "react";

function WordDetails({ word, data }) {
  if (data.error) {
    return (
      <p className="text-red-500 text-center mt-4 font-semibold">
        {data.error}
      </p>
    );
  }

  const { meanings } = data;

  return (
    <div className="mt-6 p-4 bg-white shadow-lg rounded-lg max-w-xl mx-auto">
      <h2 className="text-2xl font-bold underline text-left capitalize">
        {word}
      </h2>
      {meanings.map((meaning, index) => (
        <div key={index} className="mt-3 border-t pt-1">
          <p className="text-lg font-medium">
            <strong className="text-green-600" >Part of Speech:</strong> <br/> {meaning.partOfSpeech}
          </p>
          <p className="text-lg font-medium">
            <strong className="text-green-600">Definition:</strong> <br/> {meaning.definitions[0].definition}
          </p>
          <p className="text-lg font-medium">
            <strong className="text-green-600">Synonyms:</strong>{" "} <br/>
            {meaning.synonyms.length > 0 ? meaning.synonyms.join(", ") : "N/A"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default WordDetails;
