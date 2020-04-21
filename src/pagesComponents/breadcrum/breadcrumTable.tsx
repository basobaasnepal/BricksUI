import React from "react";

const BreadcrumTable = () => {
  return (
    <>
      <div className="api-table-title">Breadcrum API</div>
      <span className="api-table-desc"></span>
      <div className="grid-table">
        <div className="grid-table-header">
          <div className="header">Property</div>
          <div className="header">Description</div>
          <div className="header">Type</div>
          <div className="header">defaults</div>
        </div>
        <div className="grid-table-type">
          <div className="prop">bgColor</div>
          <div className="desc">Custom background Color for the breadcrum.</div>
          <div className="type">string</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">color</div>
          <div className="desc">Custom color for the breadcrum.</div>
          <div className="type">string</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default BreadcrumTable;
