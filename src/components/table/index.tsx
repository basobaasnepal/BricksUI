import React from "react";
import "./index.scss";
import {
  TableProps,
  RenderProps,
  DataSources,
  TableColums
} from "../../Interfaces";
import { Button } from "../buttons";

const Table = (props: TableProps) => {
  return (
    <table cellSpacing={0}>
      <thead>
        <tr
          className={`bu-table-header ${
            props.headClassName ? props.headClassName : ""
          }`}
        >
          {props.columns.map((column: TableColums) => (
            <th className="bu-table-header-items" key={column.key}>
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.dataSource.map((data: DataSources, i: number) => (
          <tr
            className={`
              ${
                props.onClick
                  ? `bu-table-content dynamic ${
                      props.bodyClassName ? props.bodyClassName : ""
                    } `
                  : `bu-table-content ${
                      props.bodyClassName ? props.bodyClassName : ""
                    } `
              }`}
            key={data.key}
            onClick={() => (props.onClick ? props.onClick(data) : "")}
          >
            {props.dataSource[i].dataValues.map((value: any, j: number) => (
              <td className="bu-table-content-items" key={j}>
                {value}
              </td>
            ))}
            {props.dataSource[i].render ? (
              <>
                {props.dataSource[i].render?.map(
                  (object: RenderProps, j: number) => (
                    <td className="bu-table-content-items " key={j}>
                      <Button
                        type="primary"
                        onClick={() => object.click("hello")}
                      >
                        {object.title}
                      </Button>
                    </td>
                  )
                )}
              </>
            ) : (
              <></>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
