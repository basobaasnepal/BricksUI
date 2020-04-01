import React, { useState } from "react";
import "../../sass/sourceCode/_types.scss";
import { Button } from "../../components/buttons";
import { IonIcon } from "@ionic/react";
import { alertCircleOutline } from "ionicons/icons";
import Toast from "../../components/toast";

const Icon = () => {
  const [displayCode, setDisplayCode] = useState(false as boolean);
  const handleCodeClick = () => {
    if (displayCode) {
      setDisplayCode(false);
    } else setDisplayCode(true);
  };
  const [display, setDisplay] = useState(false as boolean);
  const handleClick = () => {
    setDisplay(true);
  };
  return (
    <div className="single-example-unit">
      <div className="display-example extra-margin">
        <div className="example-large align">
          <Button type="primary" onClick={handleClick}>
            Open the notification box
          </Button>
          {display && (
            <Toast
              title="Notification Title"
              content="This is the content of the notification with the dynamic icon."
              icon={<IonIcon icon={alertCircleOutline} />}
            />
          )}
        </div>
      </div>
      <div className="display-desc">
        <div className="display-desc-title">Icon</div>
        <div className="desc-wrapper">
          Bricks Ui with dynamic icon. use <code>icon</code> props to provide
          dynamic icon of your own
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

export default Icon;
