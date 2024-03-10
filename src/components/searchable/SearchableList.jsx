import { useState, useRef } from "react";

export default function SearchableList({ items, children, itemKeyFn }) {
 const lastChange = useRef();
 const [searchTerm, setSearchTerm] = useState("");
 const searchResults = items.filter((item) => JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()));

 function handleChange(e) {
  if (lastChange.current) {
   clearTimeout(lastChange.current);
  }
  lastChange.current = setTimeout(() => {
   lastChange.current = null;
   setSearchTerm(e.target.value);
  }, 500);
 }
 return (
  <div className="searchable-list">
   <input type="search" placeholder="Search" onChange={handleChange} />
   <ul>
    <li>
     {searchResults.map((item, index) => (
      <li key={itemKeyFn(item)}>{children(item)}</li>
     ))}
    </li>
   </ul>
  </div>
 );
}
