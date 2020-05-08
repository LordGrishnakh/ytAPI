import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import yt from "./api/yt";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import { YEK } from "./api/yt";

import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTurnSubmit('buildings');
  }, [])

  const onTurnSubmit = async (term) => {
    const response = await yt.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: YEK,
      },
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTurnSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={onVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
