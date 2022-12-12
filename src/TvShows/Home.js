import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';

function Home(){
    return(
     
        <div>
    <ul>
      <li >
      <a href="/series">TV Shows</a></li>
    </ul>
    </div>
    
    )
   
    
}
export default Home;