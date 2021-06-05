import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export function Searchbar() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  return (
    <div>
      <input
        className="search__input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Your video search"
      />
      <button
        onClick={() => {
          dispatch(/*sagas action*/);
        }}
      >
        Search
      </button>
    </div>
  );
}
