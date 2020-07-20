import React from 'react';
import "98.css";
import './Setup.css';

const Setup = () => {

   return (
      <div className="window" >
         <div className="title-bar">
            <div className="title-bar-text">Setup your Cypherplug</div>
            <div className="title-bar-controls">
               <button aria-label="Minimize" />
               <button aria-label="Maximize" />
               <button aria-label="Close" />
            </div>
         </div>
         <div className="window-body" style={{ width: 320, height: 80, padding: 4 }} >
            <label htmlFor="name">Give your Cyperhplug a name:</label>
            <div className="field-row" style={{justifyContent: "center"}}>
               <input id="name" type="text" className="name-input"></input>
            </div>
            <button className="next-button" onClick={() => console.log("next")}>Next</button>
         </div>
      </div>
   );
}

export default Setup;