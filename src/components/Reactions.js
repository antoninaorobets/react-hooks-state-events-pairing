import React, {useState} from 'react';

function Reactions() {
    const [likes, setLikes] = useState(0)
    const [dislikes, setDisikes] = useState(0)

    function onLikeClick(){
        setLikes(likes+1)
    }
    function onDislikeClick(){
        setDisikes(dislikes+1)
    }

  return <div>
      <button id="likes" onClick={onLikeClick}>{likes} 👍</button> 
      <button id="dislikes" onClick={onDislikeClick}>{dislikes} 👎</button>
  </div>;
}

export default Reactions;
