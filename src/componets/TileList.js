import React from "react";
import {Tile} from "./Tile";

export const TileList = (props) => {
  return (
    <div>
      <ul>
        {props.arr.map((object)=> (
          <Tile 
            object={Object.entries(object)}
          />
          ))}
      </ul>
    
    </div>
  );
};
