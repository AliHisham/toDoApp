import React, { useContext } from "react";
import MyButton from "./MyButton";
import { toDoContext } from "../Context/Context";

const Tile = (props) => {
  const { remove, finish } = useContext(toDoContext);
  return (
    <div className="flex bg-amber-200 p-3 rounded-md mt-2">
      <div className="w-2/3 flex flex-col gap-y-2">
        <div>{props.title}</div>
        <div
          className={
            props.status === "unfinished" ? "text-red-600" : "text-green-500"
          }
        >
          {" "}
          {props.status}
        </div>
      </div>
      <div className="w-1/3 justify-end flex gap-2">
        <MyButton
          disabled={props.status === "unfinished" ? false : true}
          className={
            props.status === "unfinished"
              ? "bg-teal-600 text-white p-2 rounded-md"
              : "bg-gray-600 text-white p-2 rounded-md"
          }
          onClick={() => {
            finish(props);
          }}
        >
          Finish
        </MyButton>
        <MyButton
          onClick={() => {
            remove(props.id);
          }}
          className="bg-red-600 p-2 rounded-md text-white"
        >
          delete
        </MyButton>
      </div>
    </div>
  );
};

export default Tile;
