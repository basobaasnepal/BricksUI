import React, { useState } from "react";
import "../../sass/sourceCode/_types.scss";
import Tag from "../../components/tag";

const Closeable = () => {
  const [displayCode, setDisplayCode] = useState(false as boolean);
  const handleCodeClick = () => {
    if (displayCode) {
      setDisplayCode(false);
    } else setDisplayCode(true);
  };
  return (
    <div className="single-example-unit">
      <div className="display-example">
        <div className="example-large">
          <Tag>unremovable</Tag>
          <Tag closeable>Tag 2</Tag>
          <Tag closeable>Tag 3</Tag>
        </div>
      </div>
      <div className="display-desc">
        <div className="display-desc-title">Closeable</div>
        <div className="desc-wrapper">
          Set <code>closeable</code> props true to make a tag closeable
        </div>
      </div>
      <div className="source">
        <span onClick={handleCodeClick}>code</span>
      </div>
      {displayCode ? (
        <>
          <div className="source-code">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            iusto facere maxime facilis vero fugit ratione rerum eaque, sapiente
            ipsam voluptas velit quod dolores eos, fuga est? Omnis, magni
            ratione?
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Closeable;
