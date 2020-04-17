import React, { useState } from "react";
import "../../sass/sourceCode/_types.scss";
import { IonIcon } from "@ionic/react";
import { personOutline } from "ionicons/icons";
import Avatar from "../../components/avatar";

const Badge = () => {
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
          <Avatar
            icon={<IonIcon icon={personOutline} />}
            shape="circle"
            bgColor="#87d068"
            badge={2}
          />
          <Avatar icon={<IonIcon icon={personOutline} />} badge={90} />
          <Avatar src="images/user.jpg" alt="" shape="circle" badge={10} />
          <Avatar shape="circle" fontSize={22} badge={100} left={14}>
            B
          </Avatar>
        </div>
      </div>
      <div className="display-desc">
        <div className="display-desc-title">Badge</div>
        <div className="desc-wrapper">
          Usually used for reminders and notifications.
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

export default Badge;
