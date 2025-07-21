"use client"

import { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className='search-bar'>
      <form>
        <div className='search-input-container'>
          <Search className='search-icon' size={16} />
          <input
            type='text'
            placeholder='Search blogs...'
            className='search-input'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}
