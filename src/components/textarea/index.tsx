import React from "react";
import "../input/index.scss";

const Textarea = () => {
  return (
    <div className="input-wrapper">
      <textarea
        rows={4}
        className="text-area"
        placeholder="input your text here."
      ></textarea>
    </div>
  );
};

export default Textarea;
