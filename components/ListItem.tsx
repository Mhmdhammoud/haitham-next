import React from 'react';

const ListItem = (props) => {
  return (
    <div className="flex items-center justify-center space-x-2 space-y-2">
      <h1 className="text-red-500 text-xl font-bold">{props.index + 1}</h1>
      <h1 className="text-red-500 text-xl font-bold">{props.city}</h1>
      <button
        className="border p-2 border-1 border-black"
        onClick={() => props.handleDelete(props.city)}
      >
        Delete
      </button>
    </div>
  );
};

export default ListItem;
