import React from 'react';
import { useParams } from 'react-router-dom';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import CustomerEnter from '../CustomerEnter/CustomerEnter';


const Search = (props) => {
  const {searchQuery} = useParams();
  const search = CustomerInfo.filter(cm =>cm.id.includes(searchQuery));
  
  console.log(searchQuery,search);

  
  const handleChange = e =>{
    console.log(e.target.value);
  }

  
  return (
    <div>

      <input type="text" onChange={handleChange} placeholder="Search.." name="search"/>

      
    </div>
  );
};

export default Search;