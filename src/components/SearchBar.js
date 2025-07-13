"use client"

import { useState } from 'react';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
   
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className='search-bar'>
      <form onSubmit={handleSearch}>
        <input 
          type='text' 
          placeholder='Search...' 
          className='search-input'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
    </div>
  );
}
