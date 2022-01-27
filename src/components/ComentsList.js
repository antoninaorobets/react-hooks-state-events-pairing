import React, { useState } from 'react';
import Comment from './Comment';
import SearchComments from './SearchComments';

function ComentsList({ comments }) {
  const [commentsToDisplay, setCommentsToDisplay] = useState(comments)
  

  function filterComments(filterParameter) {
    const display = comments.filter((comment) => {
      return comment.user.includes(filterParameter)})
      setCommentsToDisplay(display)
    }
  

  const comentsElements = commentsToDisplay.map((comment,index)=> {return <Comment key={index} commentData={comment} />})

  return <div>
    <h3>{comments.length} Comments totala</h3>
    <SearchComments filterComments={filterComments} />
    <div> {comentsElements} </div>
  </div>;
}

export default ComentsList;
