import React from "react";

const BreadcrumItemTable = () => {
  return (
    <>
      <div className="api-table-title">BreadcrumItem API</div>
      <span className="api-table-desc"></span>
      <div className="grid-table">
        <div className="grid-table-header">
          <div className="header">Property</div>
          <div className="header">Description</div>
          <div className="header">Type</div>
          <div className="header">defaults</div>
        </div>
        <div className="grid-table-type">
          <div className="prop">fontSize</div>
          <div className="desc">Custom font size for the breadcrum items.</div>
          <div className="type">string</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">icon</div>
          <div className="desc">prefix icon for the breadcrum items.</div>
          <div className="type">ReactNode</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">seperator</div>
          <div className="desc">custom seperator icon for breadcrum item.</div>
          <div className="type">ReactNode</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">href</div>
          <div className="desc">link for the breadcrum item.</div>
          <div className="type">ReactNode</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">color</div>
          <div className="desc">
            custom color for the single breadcrum item.
          </div>
          <div className="type">ReactNode</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default BreadcrumItemTable;
