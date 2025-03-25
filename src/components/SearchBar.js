import React, { useState } from "react";

function SearchBar({onSearch}){
  cosnt [searchTerm,setSearchTerm] = useState('')

  const handleChange = (e) => {
    //searchForm 
    setSearchTerm(e.tatget.value);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    onSearch(searchTerm)
  }
  return(
    <div>
      <form onSubmit ={handleSubmit}>
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