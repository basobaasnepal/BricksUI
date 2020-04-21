import React, { useState } from "react";
import "../../sass/sourceCode/_types.scss";
import Breadcrum from "../../components/breadcrum";
import BreadcrumItems from "../../components/breadcrumItems";
import { IonIcon } from "@ionic/react";
import { homeOutline } from "ionicons/icons";
import MenuItem from "../../components/menuItem";
import Menu from "../../components/menu";
import Dropdown from "../../components/dropdown";

const DropDown = () => {
  const [displayCode, setDisplayCode] = useState(false as boolean);
  const handleCodeClick = () => {
    if (displayCode) {
      setDisplayCode(false);
    } else setDisplayCode(true);
  };
  const menu = (
    <Menu>
      <MenuItem>
        <a href="https://basobaas.com">1st menu item</a>
      </MenuItem>
      <MenuItem>
        <a href="https://basobaas.com">2nd menu item</a>
      </MenuItem>
      <MenuItem>
        <a href="https://basobaas.com">3rd menu item</a>
      </MenuItem>
    </Menu>
  );
  const dropColor = "rgba(0,0,0,0.45)";
  return (
    <div className="single-example-unit">
      <div className="display-example">
        <div className="example-large">
          <Breadcrum>
            <BreadcrumItems
              icon={<IonIcon icon={homeOutline} />}
              href="home"
            ></BreadcrumItems>
            <BreadcrumItems>
              <a href="components">Components</a>
            </BreadcrumItems>
            <BreadcrumItems href="/home">
              <Dropdown overlay={menu} placement="bottom">
                <span className="side-icon" style={{ color: dropColor }}>
                  General
                </span>
              </Dropdown>
            </BreadcrumItems>
            <BreadcrumItems>Button</BreadcrumItems>
          </Breadcrum>
        </div>
      </div>
      <div className="display-desc">
        <div className="display-desc-title">Dropdown</div>
        <div className="desc-wrapper">
          Breadcrum with dropdown. Just pass dropdown menu inside as a children
          of the breadcrumItems
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

export default DropDown;
