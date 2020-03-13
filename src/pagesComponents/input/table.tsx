import React from "react";

const Table = () => {
  return (
    <>
      <div className="api-table-title">Input API</div>
      <span className="api-table-desc">
        To get a customized input, just set
        <code>type</code>/<code>size</code>/<code>prefix</code>/
        <code>suffix</code>/<code>postTab</code>/<code>preTab</code> .
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
            types <code>text</code> | <code>password</code> | <code>email</code>{" "}
            |<code>number</code>
          </div>
          <div className="type">string</div>
          <div className="defaults">
            <span>text</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">size</div>
          <div className="desc">
            size <code>large</code> | <code>small</code> | <code>default</code>
          </div>
          <div className="type">string</div>
          <div className="defaults">
            <span>default</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">placeholder</div>
          <div className="desc">
            Temporarily takes the place of the final data
          </div>
          <div className="type">string</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">onChange</div>
          <div className="desc">set the handler to handle change event</div>
          <div className="type">(event) => void</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">disabled</div>
          <div className="desc">
            disabled property is used to make input disabled.
          </div>
          <div className="type">boolean</div>
          <div className="defaults">
            <span>false</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">prefix</div>
          <div className="desc">The prefix icon for the Input.</div>
          <div className="type">string|ReactNode</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">suffix</div>
          <div className="desc">
            The suffix icon for the Input. suffix is not shown in
            <code>type</code> password if <code>visibilityToggle</code> is true
          </div>
          <div className="type">string|ReactNode</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">postTab</div>
          <div className="desc">
            The label text displayed after (on the right side of) the input
            field.
          </div>
          <div className="type">string|ReactNode</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">preTab</div>
          <div className="desc">
            The label text displayed after (on the right side of) the input
            field.
          </div>
          <div className="type">string|ReactNode</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">value</div>
          <div className="desc">The input content value</div>
          <div className="type">string</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">id</div>
          <div className="desc">The ID for input</div>
          <div className="type">string</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">visibilityToggle</div>
          <div className="desc">
            Whether show toggle button. <code>Note:</code> Used for{" "}
            <code>type</code> password only. suffix icon is not visible when{" "}
            <code>visibilityToggle</code> is true.
          </div>
          <div className="type">string|ReactNode</div>
          <div className="defaults">
            <span>false</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">defaultValue</div>
          <div className="desc"> The initial input content</div>
          <div className="type">string</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">name</div>
          <div className="desc">name attribute for the input type </div>
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
