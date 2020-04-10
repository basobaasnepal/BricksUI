import React from "react";

const Table = () => {
  return (
    <>
      <div className="api-table-title">API</div>
      <span className="api-table-desc">
        To get a customized radio, just set
        <code>name</code>/<code>value</code>/<code>label</code> .
      </span>
      <div className="grid-table">
        <div className="grid-table-header">
          <div className="header">Property</div>
          <div className="header">Description</div>
          <div className="header">Type</div>
          <div className="header">defaults</div>
        </div>
        <div className="grid-table-type">
          <div className="prop">disabled</div>
          <div className="desc">Disable Radio</div>
          <div className="type">boolean</div>
          <div className="defaults">
            <span>false</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">animation</div>
          <div className="desc">specifies whether animation is set</div>
          <div className="type">boolean</div>
          <div className="defaults">
            <span>false</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">options</div>
          <div className="desc">
            <code>options</code> props is array of an object with label and
            value. You can generate a group of radio from an array of the
            object.
          </div>
          <div className="type">Array</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">defaultChecker</div>
          <div className="desc">
            Sets checked as the default value of the radio.
          </div>
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
        <div className="grid-table-type">
          <div className="prop">vertical</div>
          <div className="desc">
            sets vertical orientation of the radio group.
          </div>
          <div className="type">boolean</div>
          <div className="defaults">
            <span>false</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">id</div>
          <div className="desc">id of the radio.</div>
          <div className="type">string</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">name</div>
          <div className="desc">name of the radio.</div>
          <div className="type">string</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">value</div>
          <div className="desc">value of the radio.</div>
          <div className="type">string</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">labelMargin</div>
          <div className="desc">set margin for the label of the radio.</div>
          <div className="type">number</div>
          <div className="defaults">
            <span>10px</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">button</div>
          <div className="desc">Makes radio group of buttons.</div>
          <div className="type">boolean</div>
          <div className="defaults">
            <span>false</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">radioItemMargin</div>
          <div className="desc">Sets right margin for the radio item.</div>
          <div className="type">number</div>
          <div className="defaults">
            <span>5px</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">label</div>
          <div className="desc">
            specifies the label of the radio button.It is optional, you can set
            label yourself using <code>span</code> tag.
          </div>
          <div className="type">string</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">labelClassName</div>
          <div className="desc">class name for the label of the radio.</div>
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
