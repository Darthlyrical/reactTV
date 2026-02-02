import "./shows.css";
import React from 'react'
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({show}) {

  const [selectedEpisode, setSelectedEpisode] = React.useState({})

    if(!show) {
      return <div className="show-details">Select a show</div>;

    }
  return (
    <div className="show-details">
      <EpisodeList name={show.name}
       episodes={show.episodes} 
       selectedEpisode={selectedEpisode} 
       setSelectedEpisode={setSelectedEpisode}/>
      <EpisodeDetails episode={selectedEpisode}/>
    </div>  
  )
  
}
