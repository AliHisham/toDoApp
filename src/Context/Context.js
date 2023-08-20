import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const toDoContext = createContext({
  allList: [],
  add: null,
  remove: null,
  finish: null,
  error: null,
});

export const AllToDoListContext = ({ children }) => {
  const [allList, setList] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3000/db")
      .then((res) => {
        let { data } = res.data;
        if (JSON.stringify(data) != JSON.stringify(allList)) {
          setList(data);
          setError(null);
        }
      })
      .catch((err) => {
        console.log(err, "fetching failed");
        setError("check your connection");
      });
  }, [allList]);

  const add = (textArea) => {
    if (textArea) {
      axios
        .post("http://localhost:3000/data", {
          title: textArea,
          status: "unfinished",
        })
        .then((res) => {
          setList((prevState) => [
            ...prevState,
            { title: textArea, status: "unfinished" },
          ]);
          // setList((prev) =>
          //   prev.push({ title: textArea, status: "unfinished" })
          // );
          setError(null);
          document.getElementById("scroll").scrollTop =
            document.getElementById("scroll").scrollHeight;
        })
        .catch((err) => {
          console.log(err, "error while inserting new task");
          setError("error while inserting a new task ");
        });
    } else {
      setError("please enter a name for your task");
    }
  };
  const remove = (id) => {
    axios
      .delete(`http://localhost:3000/data/${id}`)
      .then((res) => {
        setList((prev) => prev.filter((l) => l.id !== id));
        setError(null);
      })
      .catch((err) => {
        console.log("failed", err);
        setError("error while deleting a task");
      });
  };
  const finish = (object) => {
    axios
      .patch(`http://localhost:3000/data/${object.id}`, {
        status: "finished",
      })
      .then((res) => {
        setList((prev) =>
          prev.map((l) => {
            if (l.id == object.id) {
              return {
                ...l,
                status: "finished",
              };
            } else {
              return l;
            }
          })
        );
        setError(null);
      })
      .catch((err) => {
        console.log(err, "there is an issue here");
        setError("error while updating the status");
      });
  };
  return (
    <toDoContext.Provider
      value={{
        allList,
        add,
        remove,
        finish,
        error,
      }}
    >
      {children}
    </toDoContext.Provider>
  );
};
