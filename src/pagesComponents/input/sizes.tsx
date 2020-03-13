import React, { useState } from "react";
import "../../sass/sourceCode/_types.scss";
import Input from "../../components/input";
import { person, settings } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

const Sizes = () => {
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
            placeholder="small"
            size="small"
            suffix={<IonIcon icon={settings} />}
          />
          <Input
            placeholder="default"
            size="default"
            prefix={<IonIcon icon={person} />}
          />
          <Input placeholder="large" size="large" type="password" />
        </div>
      </div>
      <div className="display-desc">
        <div className="display-desc-title">sizes</div>
        <div className="desc-wrapper">
          There are three sizes of Input Box: <code>large</code> (40px),{" "}
          <code>default</code> (32px), <code>small</code> (26px)
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

export default Sizes;
