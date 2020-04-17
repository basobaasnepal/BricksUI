import React, { useState } from "react";
import "../../sass/sourceCode/_types.scss";
import { IonIcon } from "@ionic/react";
import { personOutline } from "ionicons/icons";
import Avatar from "../../components/avatar";

const Basic = () => {
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
          <Avatar icon={<IonIcon icon={personOutline} />} size="large"></Avatar>
          <Avatar icon={<IonIcon icon={personOutline} />}></Avatar>
          <Avatar icon={<IonIcon icon={personOutline} />} size="small"></Avatar>
        </div>
        <div className="example-large">
          <Avatar
            icon={<IonIcon icon={personOutline} />}
            shape="circle"
            size="large"
          ></Avatar>
          <Avatar
            icon={<IonIcon icon={personOutline} />}
            shape="circle"
          ></Avatar>
          <Avatar
            icon={<IonIcon icon={personOutline} />}
            size="small"
            shape="circle"
          ></Avatar>
        </div>
      </div>
      <div className="display-desc">
        <div className="display-desc-title">Basic</div>
        <div className="desc-wrapper">
          Bricks Ui supports avatar of three sizes, <code>small</code>,{" "}
          <code>default</code>, <code>large</code> and two shapes:{" "}
          <code>circle</code>, <code>default</code>
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

export default Basic;
