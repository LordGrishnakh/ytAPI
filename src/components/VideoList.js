import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
  const renderedList = props.videos.map((video, idx)=>{
    return <VideoItem key={idx} onVideoSelect={props.onVideoSelect} video={video} />
  });
  
  return (
    <div className="ui relaxed divided list">
      {renderedList}
    </div>
  )
};

export default VideoList;
