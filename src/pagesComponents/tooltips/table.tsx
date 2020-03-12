import React from "react";

const Table = () => {
  return (
    <>
      <div className="api-table-title">API</div>
      <span className="api-table-desc">
        To get a customized button, just set
        <code>placement</code>/<code>text</code>.
      </span>
      <div className="grid-table">
        <div className="grid-table-header">
          <div className="header">Property</div>
          <div className="header">Description</div>
          <div className="header">Type</div>
          <div className="header">defaults</div>
        </div>
        <div className="grid-table-type">
          <div className="prop">Placement</div>
          <div className="desc">
            placement <code>top</code> | <code>topRight</code> |{" "}
            <code>topLeft</code> |<code>left</code> | <code>leftTop</code> |{" "}
            <code>leftBottom</code> |<code>right</code> | <code>rightTop</code>{" "}
            | <code>rightBottom</code> |<code>bottom</code> |{" "}
            <code>bottomRight</code> | <code>bottomLeft</code>
          </div>
          <div className="type">string</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">text</div>
          <div className="desc">text: content of the tooltip.</div>
          <div className="type">string</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Table;
