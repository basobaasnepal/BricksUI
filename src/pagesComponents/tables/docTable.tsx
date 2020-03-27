import React from "react";

const DocTable = () => {
  return (
    <>
      <div className="api-table-title">API</div>
      <span className="api-table-desc">
        To get a customized Table, just set
        <code>columns</code>/<code>dataSource</code>.
      </span>
      <div className="grid-table">
        <div className="grid-table-header">
          <div className="header">Property</div>
          <div className="header">Description</div>
          <div className="header">Type</div>
          <div className="header">defaults</div>
        </div>
        <div className="grid-table-type">
          <div className="prop">columns</div>
          <div className="desc">
            Columns is array of object containing <code>title</code> and
            <code> key</code> for the table header or defines the number of
            columns. <code>title</code> contains the title for the table head
          </div>
          <div className="type">Array</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">dataSource</div>
          <div className="desc">
            Array of object. It contains <code>key</code> |{" "}
            <code>dataValues</code> | <code>render</code>.
            <code>dataValues</code> is array of string containing values for the
            table description
            <code>render</code> is array of object used when action button is
            needed.
          </div>
          <div className="type">array</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">headClassName</div>
          <div className="desc">class name for the title row of the table</div>
          <div className="type">string</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">onClick</div>
          <div className="desc">set the handler to handle click event</div>
          <div className="type">(event) => void</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">bodyClassName</div>
          <div className="desc">Class name for the body row of the table</div>
          <div className="type">string</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default DocTable;
