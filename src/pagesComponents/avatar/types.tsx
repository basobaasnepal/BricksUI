import React, { useState } from "react";
import "../../sass/sourceCode/_types.scss";
import { IonIcon } from "@ionic/react";
import { personOutline } from "ionicons/icons";
import Avatar from "../../components/avatar";

const Types = () => {
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
          />
          <Avatar shape="circle" left={13} fontSize={22}>
            B
          </Avatar>
          <Avatar
            shape="circle"
            fontSize={20}
            bgColor="#fde3cf"
            color="#f56a00"
          >
            BR
          </Avatar>
          <Avatar shape="circle" fontSize={12} left={3} top={14}>
            USER
          </Avatar>
          <Avatar src="images/user.jpg" alt="" shape="circle" />
        </div>
      </div>
      <div className="display-desc">
        <div className="display-desc-title">Types</div>
        <div className="desc-wrapper">
          Use <code>icon</code> props for avatar icon, use <code>src</code>{" "}
          props for avatar image. Pass text as children for avatar text. Use
          custom font size using <code>fontSize</code> props, position text of
          the avatar using <code>top</code> and <code>left</code> props. Use{" "}
          <code>bgColor</code> and <code>color</code> props for custom colors.
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

export default Types;
