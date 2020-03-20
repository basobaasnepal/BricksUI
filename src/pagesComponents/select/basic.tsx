import React, { useState } from "react";
import "../../sass/sourceCode/_types.scss";
import Select from "../../components/select";
import { IonIcon } from "@ionic/react";
import { chevronDownOutline } from "ionicons/icons";

const Basic = () => {
  const listItem = [
    { label: "First", value: "I am value of first" },
    { label: "Second", value: "hello second" },
    { label: "Third", value: "I am value of  Third" },
    { label: "Fourth", value: "I am value of  Fourth" }
  ];
  const [displayCode, setDisplayCode] = useState(false as boolean);
  const handleChange = (e: any) => {};
  const handleCodeClick = () => {
    if (displayCode) {
      setDisplayCode(false);
    } else setDisplayCode(true);
  };
  return (
    <div className="single-example-unit">
      <div className="display-example extra-margin">
        <div className="example-large align">
          <Select
            icon={<IonIcon icon={chevronDownOutline} />}
            options={listItem}
            onChange={handleChange}
            name="food"
            placeholder="basic"
            selectClassName="randomClass"
          ></Select>
        </div>
      </div>
      <div className="display-desc">
        <div className="display-desc-title">Basic</div>
        <div className="desc-wrapper">The most basic dropdown menu.</div>
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

export default Basic;
