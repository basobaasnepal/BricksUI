import React, { useState } from "react";
import "../../sass/sourceCode/_types.scss";
import Search from "../../components/search";
import { search, person } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

const SearchAttribute = () => {
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
          <Search
            placeholder="input search text"
            button="icon"
            searchBtn={<IonIcon icon={person} />}
          />
          <Search
            placeholder="input search text"
            button="block"
            searchBtn="text"
          />
        </div>
      </div>
      <div className="display-desc">
        <div className="display-desc-title">Custom Search Button</div>
        <div className="desc-wrapper">
          Give icon of your own choice with <code>searchBtn</code> props to the
          button of search bar
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

export default SearchAttribute;
