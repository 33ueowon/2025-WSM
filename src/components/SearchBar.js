import React, { useState } from "react";
import styles from '../styles/Cart.module.css'

function SearchBar({onSearch}){
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (e) => {
    //searchForm 
    setSearchTerm(e.target.value); // Fixed typo: tatget -> target
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    onSearch(searchTerm)
  }
  return(
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="상품 검색 하세요"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">
          <span>검색</span>
        </button>
      </form>
    </div>
  )
}
export default SearchBar;