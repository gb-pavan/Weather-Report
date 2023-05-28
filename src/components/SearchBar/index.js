import React from 'react';
import './index.css';

const SearchBar = props => {
  const { city, setCity, handleInputKeyDown } = props;

  const handleSubmit = event => {
    event.preventDefault();
    // Perform the desired submit action here
    handleInputKeyDown(event)
  };

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  return (
    <div className="search-element-container">
      <form onSubmit={handleSubmit}>
        <input
          value={city}
          onChange={event => setCity(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter Location"
          type="text"
        />
      </form>
    </div>
  );
};

export default SearchBar;
