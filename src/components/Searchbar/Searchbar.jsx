import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { STATE_STATUS_BUSY } from '../../constants/stateConstants';
import { fetchVideos, setStatus } from '../../store/actions/actions';

export function Searchbar() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('risk of rain 2 ost');

  return (
    <>
      <input
        className="search__input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
      />
      <button
        className="search__button"
        onClick={() => {
          dispatch(setStatus({ status: STATE_STATUS_BUSY }));
          dispatch(fetchVideos({ query }));
        }}
      >
        Search
      </button>
    </>
  );
}
