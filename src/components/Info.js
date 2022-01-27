import React from 'react';

function Info({title,createdAt,views}) {
  return <div>
      <h1>{title}</h1>
      <div>  {views} Views | Updated On {createdAt} </div>
  </div>;
}

export default Info;
