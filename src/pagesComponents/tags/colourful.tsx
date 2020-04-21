import React, { useState } from "react";
import "../../sass/sourceCode/_types.scss";
import Tag from "../../components/tag";

const Colorful = () => {
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
          <Tag bgColor="#f50" color="#fff">
            #f50
          </Tag>
          <Tag bgColor="#2db7f5" color="#fff">
            #2db7f5
          </Tag>
          <Tag bgColor="#87d068" color="#fff" closeable>
            #87d068
          </Tag>
        </div>
        <div className="example-large">
          <Tag color="purple">purple</Tag>
          <Tag color="red">red</Tag>
          <Tag color="green" closeable>
            green
          </Tag>
        </div>
      </div>
      <div className="display-desc">
        <div className="display-desc-title">Colorful</div>
        <div className="desc-wrapper">
          Set <code>color</code> and <code>bgColor</code> props for custom and
          colorful tags
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

export default Colorful;
