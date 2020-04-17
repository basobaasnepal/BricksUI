import React, { useState } from "react";
import "../../sass/sourceCode/_types.scss";
import Tag from "../../components/tag";

const Type = () => {
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
          <Tag type="success">Success</Tag>
          <Tag type="processing">Processing</Tag>
          <Tag type="error">error</Tag>
          <Tag type="warning">warning</Tag>
          <Tag type="default">default</Tag>
        </div>
      </div>
      <div className="display-desc">
        <div className="display-desc-title">Type</div>
        <div className="desc-wrapper">
          set <code>type</code> props for different types of tags. Bricks-Ui
          supports <code>success</code>|<code>error</code>|
          <code>processing</code>|<code>warning</code> tags.
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
export default Type;
