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
              type="search"
              className="bu-input"
              placeholder={props.placeholder}
              id={props.id}
              value={props.value}
              name={props.name}
            />
            <Button
              type="primary"
              className="search-input-button search-icon-wrapper"
            >
              {props.searchBtn ? (
                <>{props.searchBtn}</>
              ) : (
                <>
                  <IonIcon icon={search} />
                </>
              )}
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
              type="search"
              className="bu-input"
              placeholder={props.placeholder}
              id={props.id}
              value={props.value}
              name={props.name}
            />
            <Button
              type="primary"
              className="search-input-block search-icon-wrapper"
            >
              <span className="search-text">
                {props.searchBtn ? <>{props.searchBtn}</> : <>Search</>}
              </span>
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
              type="search"
              className="bu-input"
              placeholder={props.placeholder}
              id={props.id}
              value={props.value}
              name={props.name}
            />
            <Button type="primary" className="search-icon-wrapper">
              {props.searchBtn ? (
                <>{props.searchBtn}</>
              ) : (
                <>
                  <IonIcon icon={search} />
                </>
              )}
            </Button>
          </div>
        </div>
      );
  }
};
export default Search;
