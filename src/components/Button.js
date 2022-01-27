import React from 'react';

function Button({showComments,setShowComments}) {
  
  return <div>
      <button onClick={()=>setShowComments(!showComments)}>{showComments ? "Hide Comments" : "Show comments"}</button>
      <hr></hr>
  </div>
}

export default Button;
