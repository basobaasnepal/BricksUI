import React from "react";
import "./index.scss";
import { BreadcrumItemsProps } from "../../Interfaces";

const BreadcrumItems = (props: BreadcrumItemsProps) => {
  return (
    <li
      className="breadcrum-list-items"
      style={{ fontSize: props.fontSize ? props.fontSize : 14 }}
    >
      <span className="breadcrum-list-item-body">
        {props.href ? (
          <>
            <a href={props.href}>
              {props.icon ? (
                <>
                  {props.icon}
                  <span
                    className="breadcrum-list-item-text"
                    style={{ color: props.color }}
                  >
                    {props.children}
                  </span>
                </>
              ) : (
                <>
                  <span
                    className="breadcrum-list-item-text"
                    style={{ color: props.color }}
                  >
                    {props.children}
                  </span>
                </>
              )}
            </a>
          </>
        ) : (
          <>
            {props.icon ? (
              <>
                {props.icon}
                <span
                  className="breadcrum-list-item-text"
                  style={{ color: props.color }}
                >
                  {props.children}
                </span>
              </>
            ) : (
              <>
                <span
                  className="breadcrum-list-item-text"
                  style={{ color: props.color }}
                >
                  {props.children}
                </span>
              </>
            )}
          </>
        )}
      </span>
      <span className="breadcrum-item-seperator">
        {props.seperator ? props.seperator : "/"}
      </span>
    </li>
  );
};
export default BreadcrumItems;
