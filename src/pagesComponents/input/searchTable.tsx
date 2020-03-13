import React from "react";

const SearchTable = () => {
  return (
    <>
      <div className="api-table-title">Search API</div>
      <span className="api-table-desc">
        To get a customized search bar, just set
        <code>size</code>/<code>searchBtn</code>/<code>button</code>
      </span>
      <div className="grid-table">
        <div className="grid-table-header">
          <div className="header">Property</div>
          <div className="header">Description</div>
          <div className="header">Type</div>
          <div className="header">defaults</div>
        </div>
        <div className="grid-table-type">
          <div className="prop">size</div>
          <div className="desc">
            size <code>large</code> | <code>default</code> | <code>small</code>
          </div>
          <div className="type">string</div>
          <div className="defaults">
            <span>default</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">searchBtn</div>
          <div className="desc">
            Custom icon placed at the end of the search bar.
          </div>
          <div className="type">string|ReactNode</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">button</div>
          <div className="desc">
            Type of button at the end of the search bar.
            <code>icon</code> for small icon or text. <code>block</code> for
            block icon or text
          </div>
          <div className="type">string</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">onSearch</div>
          <div className="desc">set the handler to handle search event</div>
          <div className="type">(event) => void</div>
          <div className="defaults">
            <span>-</span>
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
          <div className="prop">id</div>
          <div className="desc">The ID for input</div>
          <div className="type">string</div>
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
          <div className="prop">name</div>
          <div className="desc">name attribute for the input type</div>
          <div className="type">string</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchTable;
