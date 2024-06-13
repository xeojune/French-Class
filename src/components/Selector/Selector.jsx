import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import './Selector.css';

function Selector({ items, placeholder }) {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className='selector--container'>
      <div 
        onClick={() => setOpen(!open)}
        className={`selector-header ${!selected && "placeholder"}`}
      >
        {selected ? selected : placeholder}
        <BiChevronDown size={20} className={`${open && 'rotate'}`} /> 
      </div>
      <ul className={`selector-list ${open ? 'open' : ''}`}>
        <div className='search-bar'>
          <AiOutlineSearch size={18} className='text-gray-700' />
          <input  
            type='text' 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder={`Enter ${placeholder}`}
            className='placeholder:text-gray-700'
          />
        </div> 
        {items.map((item) => (
          <li 
            key={item}
            className={`selector-item 
              ${item?.toLowerCase() === selected?.toLowerCase() && 'selected'} 
              ${item?.toLowerCase().startsWith(inputValue) ? "" : "hidden"}`}
            onClick={() => {
              if(item?.toLowerCase() !== selected.toLowerCase()){
                setSelected(item);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Selector;
