// SearchResultsPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResultsPage = () => {
  const location = useLocation();
  const { state } = location;

  if (!state || !state.searchResults) {
    return (
      <div className="text-center mt-8">
        <p className="text-xl font-semibold">No search results found.</p>
      </div>
    );
  }

  const highlightText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <span>
        {parts.map((part, index) => (
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={index} className="text-emerald-500 font-semibold">{part}</span>
          ) : (
            part
          )
        ))}
      </span>
    );
  };

  const renderSearchResults = () => {
    return state.searchResults.map(result => (
      <div key={result.id} className="bg-white rounded-lg overflow-hidden shadow-md mb-4">
        <img
          src={result.image}
          alt={result.title}
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">
            {highlightText(result.title, state.searchTerm)}
          </h3>
          <p className="text-gray-600">${result.price.toFixed(2)}</p>
          <button className="mt-4 bg-emerald-500 text-white py-2 px-4 rounded-lg">
            Add To Cart
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="container mx-auto mt-32">
      <h2 className="text-2xl font-semibold mb-4">
        Search Results for "{state.searchTerm}"
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {state.searchResults.length > 0 ? (
          renderSearchResults()
        ) : (
          <div className="text-center">
            <p className="text-xl font-semibold">No matching results found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
