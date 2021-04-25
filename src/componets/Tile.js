import React from "react";

export const Tile = ({object}) => {
  
  return (
    <div className="tile-container">
      <li key={object[0][1].toString()}>
        <p style={{fontSize: 25,
                    color: "red",
                    margin: 0,
                    height: 26}} className="tile-title">{object[1][1]}</p>
        {object.slice(2).map((arr) => 
        <p className="tile">{arr[1]}</p>      
        )}
      </li>
    </div>
  );
};