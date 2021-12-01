import { useState } from "react";
import video from "../data/video.js";
import Buttons from "./Buttons.js";
import Comments from "./Comments.js";

function App() {

  const [upVotes, setUpVotes] = useState(video.upvotes);
  const [downVotes, setDownVotes] = useState(video.downvotes);
  
  function handleUpVotes() {
    setUpVotes(upVotes + 1)
  }

  function handleDownVotes() {
    setDownVotes(downVotes - 1)
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>Views: {video.views} | Uploaded {video.createdAt}</p>
      <Buttons 
        video={video} 
        handleUpVotes={handleUpVotes} 
        handleDownVotes={handleDownVotes} 
        upVotes={upVotes} 
        downVotes={downVotes} 
      />
      <hr />
      <Comments video={video} />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
