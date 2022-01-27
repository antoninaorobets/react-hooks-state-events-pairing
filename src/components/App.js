import React,{useState} from "react";
import video from "../data/video.js";
import Video from "./Video.js";
import Info from "./Info.js";
import Reactions from "./Reactions.js";
import ComentsList from "./ComentsList.js";
import Button from "./Button.js";

function App() {
  console.log("Here's your data:", video);
  const [showComments,setShowComments]=useState(true)

  return (
    <div className="App">
    <Video />
    <Info title={video.title} views={video.views} createdAt={video.createdAt} />
    <Reactions />
    <Button showComments={showComments} setShowComments={setShowComments} />
    {showComments ? <ComentsList comments={video.comments}/> : null}
    
    </div>
  );
}

export default App;
