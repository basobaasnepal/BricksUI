import React, { useState } from "react";
import "../../sass/sourceCode/_types.scss";
import Input from "../../components/input";
import { person } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

const Password = () => {
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
          <Input
            type="password"
            placeholder="password"
            prefix={<IonIcon icon={person} />}
            visibilityToggle
          />
        </div>
      </div>
      <div className="display-desc">
        <div className="display-desc-title">Password box</div>
        <div className="desc-wrapper">Input type of password.</div>
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

export default Password;
