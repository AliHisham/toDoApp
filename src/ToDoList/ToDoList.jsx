import React, { useContext } from "react";
import Tile from "../CustomComponents/Tile";
import { toDoContext } from "../Context/Context";
const ToDoList = () => {
  const { allList } = useContext(toDoContext);
  return (
    <div
      id="scroll"
      className="mt-3 justify-center w-3/4 mx-auto h-96 overflow-y-auto"
    >
      {allList.length ? (
        allList.map((list, i) => {
          return <Tile key={i} {...list}></Tile>;
        })
      ) : (
        <p>there is no Items to show</p>
      )}
    </div>
  );
};

export default ToDoList;
