import React from "react";

const Table = () => {
  return (
    <>
      <div className="api-table-title">API</div>
      <span className="api-table-desc">
        To get a customized button, just set
        <code>overlay</code>/<code>placement</code>/<code>trigger</code> .
      </span>
      <div className="grid-table">
        <div className="grid-table-header">
          <div className="header">Property</div>
          <div className="header">Description</div>
          <div className="header">Type</div>
          <div className="header">defaults</div>
        </div>
        <div className="grid-table-type">
          <div className="prop">Disabled</div>
          <div className="desc">
            Whether the items in dropdown menu is disabled
          </div>
          <div className="type">boolean</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">overlay</div>
          <div className="desc">The dropdown menu</div>
          <div className="type">Menu | () => Menu</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">placement</div>
          <div className="desc">
            Placement of popup menu: <code>bottomLeft</code> |{" "}
            <code>bottomCenter</code> | <code>bottomRight</code>
            <code>topLeft</code> | <code>topCenter</code> |{" "}
            <code>topRight</code>
          </div>
          <div className="type">string</div>
          <div className="defaults">
            <span>bottomLeft</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">trigger</div>
          <div className="desc">
            The trigger mode which executes the dropdown action.
            <code>click</code> | <code>hover</code>. Note that hover can't be
            used on touchscreens.
          </div>
          <div className="type">string</div>
          <div className="defaults">
            <span>hover</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">overlayClass</div>
          <div className="desc">Class for dropdown menu items</div>
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
