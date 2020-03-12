import React from "react";

const Table = () => {
  return (
    <>
      <div className="api-table-title">API</div>
      <span className="api-table-desc">
        To get a customized button, just set
        <code>type</code>/<code>shape</code>/<code>size</code> .
      </span>
      <div className="grid-table">
        <div className="grid-table-header">
          <div className="header">Property</div>
          <div className="header">Description</div>
          <div className="header">Type</div>
          <div className="header">defaults</div>
        </div>
        <div className="grid-table-type">
          <div className="prop">Types</div>
          <div className="desc">
            types <code>primary</code> | <code>warning</code> |
            <code>success</code> | <code>danger</code> |<code>defaults</code>
          </div>
          <div className="type">string</div>
          <div className="defaults">
            <span>defaults</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">size</div>
          <div className="desc">
            size <code>large</code> | <code>small</code> | <code>medium</code>
          </div>
          <div className="type">string</div>
          <div className="defaults">
            <span>medium</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">href</div>
          <div className="desc">redirect url of link button</div>
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
          <div className="prop">disabled</div>
          <div className="desc">
            disabled property is used to make disabled button.
          </div>
          <div className="type">boolean</div>
          <div className="defaults">
            <span>false</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">block</div>
          <div className="desc">
            block property is used to make block button
          </div>
          <div className="type">boolean</div>
          <div className="defaults">
            <span>false</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">shape</div>
          <div className="desc">
            shapes <code>circle</code> | <code>round</code> |{" "}
            <code>default</code>
          </div>
          <div className="type">string</div>
          <div className="defaults">
            <span>defaults</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Table;
