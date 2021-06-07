import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../../store/actions/actions';
import { selectVideosAmont } from '../../store/selectors/selectors';

export function Searchbar() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const videosAmount = useSelector(selectVideosAmont);

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
          dispatch(fetchVideos({ query, videosAmount }));
        }}
      >
        Search
      </button>
    </>
  );
}
