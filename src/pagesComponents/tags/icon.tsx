import React, { useState } from "react";
import "../../sass/sourceCode/_types.scss";
import Tag from "../../components/tag";
import { IonIcon } from "@ionic/react";
import {
  logoFacebook,
  logoTwitter,
  logoYoutube,
  logoLinkedin,
} from "ionicons/icons";

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
          <Tag
            color="white"
            icon={<IonIcon icon={logoFacebook} style={{ color: "#fff" }} />}
            bgColor="#3b5999"
          >
            Facebook
          </Tag>
          <Tag
            color="white"
            icon={<IonIcon icon={logoTwitter} />}
            bgColor="#55acee"
          >
            Twitter
          </Tag>
          <Tag
            closeable
            color="white"
            icon={<IonIcon icon={logoYoutube} />}
            bgColor="#cd201f"
          >
            Youtube
          </Tag>
          <Tag
            closeable
            color="white"
            icon={<IonIcon icon={logoLinkedin} />}
            bgColor="#55acee"
          >
            LinkedIn
          </Tag>
        </div>
      </div>
      <div className="display-desc">
        <div className="display-desc-title">Closeable</div>
        <div className="desc-wrapper">
          Set <code>closeable</code> props true to make a tag closeable
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
