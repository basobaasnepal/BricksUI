import React from "react";

const Table = () => {
  return (
    <>
      <div className="api-table-title">API</div>
      <span className="api-table-desc">
        To get a customized tag, just set
        <code>type</code>/<code>color</code>/<code>icon</code> .
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
            types <code>warning</code> |<code>success</code> |{" "}
            <code>processing</code> |<code>default</code> | <code>error</code>
          </div>
          <div className="type">string</div>
          <div className="defaults">
            <span>default</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">closeable</div>
          <div className="desc">
            set closeable props to make tags closeable.
          </div>
          <div className="type">boolean</div>
          <div className="defaults">
            <span>false</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">color</div>
          <div className="desc">sets color for text of the tag</div>
          <div className="type">string</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">onClose</div>
          <div className="desc">Callback executed when tag is closed</div>
          <div className="type">() => void</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">bgColor</div>
          <div className="desc">sets Background Color for tag</div>
          <div className="type">string</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">borderColor</div>
          <div className="desc">sets Border Color for tag</div>
          <div className="type">string</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">icon</div>
          <div className="desc">Set the icon of tag</div>
          <div className="type">ReactNode</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Table;
