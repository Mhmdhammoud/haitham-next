import React, { useState, useEffect } from 'react';
import { ListItem } from '../components';
import Link from 'next/link';
function App() {
  const [list, setList] = useState([
    'New York',
    'Paris',
    'London',
    'Tokyo',
    'Sydney',
  ]);
  const [newCity, setNewCity] = useState('');

  const handleDelete = (city: string) => {
    setList(list.filter((item) => item !== city));
  };
  const handleAddItem = () => {
    setList([...list, newCity]);
    setNewCity('');
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewCity(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex space-x-2 mt-4">
        <input
          value={newCity}
          placeholder="Insert a new city..."
          className="border border-1 border-indigo-200 ring-1 ring-indigo-200 rounded-md p-2 dark:text-black"
          onChange={handleChange}
        />
        <button
          className="border border-1 border-indigo-200 rounded-md p-2 disabled:cursor-not-allowed"
          onClick={handleAddItem}
          disabled={newCity === ''}
        >
          Add
        </button>
      </div>
      {list.map((city, index) => {
        return (
          <ListItem
            key={city}
            city={city}
            handleDelete={handleDelete}
            index={index}
          />
        );
      })}
      <Link href="/about">About</Link>
    </div>
  );
}

export default App;
