import React,{ useState } from 'react';

function SearchComments({filterComments}){
     const [input,setInput]=useState('')

     function changeInput(event){
        setInput((input)=>event.target.value)
        filterComments(input)
     }

     function onSearchSubmit(event) {
        event.preventDefault()
     // filterComments(input)
     }


  return <div>
      <form className="search" onSubmit={onSearchSubmit}>
      <input type="text" name="search" onChange={changeInput} value={input}></input>
      <input type="submit"></input>
      </form>
  </div>;
}

export default SearchComments;
