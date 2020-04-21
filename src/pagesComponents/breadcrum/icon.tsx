import React, { useState } from "react";
import "../../sass/sourceCode/_types.scss";
import Breadcrum from "../../components/breadcrum";
import BreadcrumItems from "../../components/breadcrumItems";
import { IonIcon } from "@ionic/react";
import { homeOutline, personOutline } from "ionicons/icons";

const Icon = () => {
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
          <Breadcrum>
            <BreadcrumItems
              icon={<IonIcon icon={homeOutline} />}
              href="home"
            ></BreadcrumItems>
            <BreadcrumItems
              icon={<IonIcon icon={personOutline} />}
              href="/home"
            >
              Components
            </BreadcrumItems>
            <BreadcrumItems>Button</BreadcrumItems>
          </Breadcrum>
        </div>
      </div>
      <div className="display-desc">
        <div className="display-desc-title">Icon</div>
        <div className="desc-wrapper">
          Use <code>icon</code> props for custom icon of the breadcrum. While
          using <code>icon</code> props it is recommended to use{" "}
          <code>href</code> props for link.
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
