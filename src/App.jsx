import {tvShows} from './shows/data'
import React from "react"; 
import ShowSelection from "./shows/ShowSelection";
import ShowDetails from "./shows/ShowDetails";


/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
export default function App() {

  const [selectedShow, setSelectedShow] = React.useState();

  
 
  
  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection 
        shows={tvShows} 
        selectedShow={selectedShow} 
        setSelectedShow={setSelectedShow}/>
      </header>
      <main>
        <ShowDetails key={selectedShow?.name} show={selectedShow}/>
      </main>
    </>
  );
}
