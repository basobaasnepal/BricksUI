import React from "react";
import { SearchProps } from "../../Interfaces";
import "../input/index.scss";
import { Button } from "../buttons";
import { search } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

const Search = (props: SearchProps) => {
  switch (props.button) {
    case "icon":
      return (
        <div
          className={`input-${
            props.size ? props.size : "default"
          } input-wrapper`}
        >
          <div className="input-outer push">
            <input
              type="text"
              className="bu-input"
              placeholder="eg.rijalbinaya2@gmail.com"
            />
            <Button
              type="primary"
              className="search-input-button search-icon-wrapper"
            >
              <IonIcon icon={search} />
            </Button>
          </div>
        </div>
      );
    case "block":
      return (
        <div
          className={`input-${
            props.size ? props.size : "default"
          } input-wrapper`}
        >
          <div className="input-outer push">
            <input
              type="text"
              className="bu-input"
              placeholder="eg.rijalbinaya2@gmail.com"
            />
            <Button
              type="primary"
              className="search-input-block search-icon-wrapper"
            >
              <span className="search-text">Search</span>
            </Button>
          </div>
        </div>
      );
    default:
      return (
        <div
          className={`input-${
            props.size ? props.size : "default"
          } input-wrapper`}
        >
          <div className="input-outer push">
            <input
              type="text"
              className="bu-input"
              placeholder="eg.rijalbinaya2@gmail.com"
            />
            <Button type="default" className="search-icon-wrapper ">
              <IonIcon icon={search} className="icon-default" />
            </Button>
          </div>
        </div>
      );
  }
};
export default Search;
