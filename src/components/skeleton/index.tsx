import React from "react";
import "./index.scss";
import { SkeletonProps } from "../../Interfaces";

const Skeleton = (props: SkeletonProps) => {
  let { rows } = props;
  const addRows = () => {
    let rowsProps: any = [];
    if (rows! >= 2) {
      for (let i = 0; i < rows!; i++) {
        rowsProps.push(
          <p
            className={
              props.active ? "card-description loading" : "card-description"
            }
          ></p>
        );
      }
      return rowsProps;
    } else {
      for (let i = 0; i <= 1; i++) {
        rowsProps.push(
          <p
            className={
              props.active ? "card-description loading" : "card-description"
            }
          ></p>
        );
      }
      return rowsProps;
    }
  };
  return (
    <div className="card">
      {props.avatar ? (
        <>
          <div
            className={props.active ? "card-image loading" : "card-image"}
          ></div>
        </>
      ) : (
        <></>
      )}
      <div className="card-detail">
        <h3 className={props.active ? "card-title loading" : "card-title"}></h3>
        {addRows()}
        <p
          className={
            props.active
              ? "card-description-footer loading"
              : "card-description-footer"
          }
        ></p>
      </div>
    </div>
  );
};

export default Skeleton;
