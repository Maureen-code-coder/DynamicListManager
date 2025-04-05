import React, { useState } from 'react';
import './DynamicListManager.css';

function DynamicListManager() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim() === '') return;

    setItems([...items, inputValue]);
    setInputValue('');
  };

  return (
    <div className="container">
      <h2>Dynamic List Manager</h2>
      <div className="input-group">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter an item"
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <ul className="list">
        {items.map((item, index) => (
          <li key={index} className="list-item">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default DynamicListManager;