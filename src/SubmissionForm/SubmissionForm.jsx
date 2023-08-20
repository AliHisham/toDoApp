import React, { useContext, useRef } from "react";
import MyButton from "../CustomComponents/MyButton";
import { toDoContext } from "../Context/Context";
const SubmissionForm = () => {
  const { add } = useContext(toDoContext);
  const ref = useRef();
  const handleInputChange = (e) => {
    ref.current.value = e.target.value;
  };
  const handelingFormSubmission = (value) => {
    add(value);
    ref.current.value = "";
  };
  return (
    <div className="flex justify-center gap-2">
      <textarea
        ref={ref}
        onChange={handleInputChange}
        type="text"
        className="border-2 border-teal-600 w-2/3 rounded-md"
      ></textarea>
      <MyButton
        onClick={() => handelingFormSubmission(ref.current.value)}
        className="bg-teal-600 rounded-md text-white p-4 w-1/12"
      >
        ADD
      </MyButton>
    </div>
  );
};

export default SubmissionForm;
