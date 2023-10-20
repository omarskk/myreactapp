import React, { useState } from "react";

function Autocomplete({ suggestions, onSuggestionSelected, value, name }) {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
    const filteredSuggestions = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setFilteredSuggestions([]);
    onSuggestionSelected(suggestion);
  };

  return (
    <div>
      <input
        type="text"
        name={name}
        value={inputValue}
        onChange={handleInputChange}
      />
      <ul>
        {filteredSuggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Autocomplete;


