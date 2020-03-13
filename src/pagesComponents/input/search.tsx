import React, { useState } from "react";
import "../../sass/sourceCode/_types.scss";
import Search from "../../components/search";
import { search } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

const SearchBox = () => {
  const [displayCode, setDisplayCode] = useState(false as boolean);
  const handleCodeClick = () => {
    if (displayCode) {
      setDisplayCode(false);
    } else setDisplayCode(true);
  };
  return (
    <div className="single-example-unit">
      <div className="display-example extra-margin">
        <div className="example-large align">
          <Search placeholder="input search text" />
          <Search placeholder="input search text" button="icon" />
          <Search placeholder="input search text" button="block" />
        </div>
      </div>
      <div className="display-desc">
        <div className="display-desc-title">Search box</div>
        <div className="desc-wrapper">
          Example of creating a search box by grouping a standard input with a
          search button.
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

export default SearchBox;
