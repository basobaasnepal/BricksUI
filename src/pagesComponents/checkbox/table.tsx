import React from "react";

const Table = () => {
  return (
    <>
      <div className="api-table-title">API</div>
      <span className="api-table-desc">
        Get a customized Checkbox, set
        <code>animation</code> props for animated views.
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
          <div className="desc">Set Disabled props for a disabled checkbox</div>
          <div className="type">boolean</div>
          <div className="defaults">
            <span>false</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">name</div>
          <div className="desc">Name for the checkbox</div>
          <div className="type">string</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">id</div>
          <div className="desc">id for the checkbox</div>
          <div className="type">string</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">options</div>
          <div className="desc">
            <code>options</code> props is array of an object with label and
            value. You can generate a group of checkboxes from an array of the
            object.
          </div>
          <div className="type">Array</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">defaultChecked</div>
          <div className="desc">
            Sets checked as the default value of the checkbox
          </div>
          <div className="type">boolean</div>
          <div className="defaults">
            <span>false</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">animation</div>
          <div className="desc">Gives animated effect to our checkbox</div>
          <div className="type">boolean</div>
          <div className="defaults">
            <span>false</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">onChange</div>
          <div className="desc">
            The callback function that is triggered when the state changes.
          </div>
          <div className="type">Function(e:Event)</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Table;
