import React, { useContext } from "react";
import SubmissionForm from "../SubmissionForm/SubmissionForm";
import ToDoList from "../ToDoList/ToDoList";
import { toDoContext } from "../Context/Context";
const ToDoListWrapper = () => {
  const { error } = useContext(toDoContext);
  return (
    <div className="p-4 gap-y-3">
      <p className="text-red-600 text-center">{error}</p>
      <SubmissionForm />
      <ToDoList />
    </div>
  );
};

export default ToDoListWrapper;
