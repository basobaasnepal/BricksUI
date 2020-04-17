import React from "react";

const Table = () => {
  return (
    <>
      <div className="api-table-title">API</div>
      <span className="api-table-desc">
        To get a customized avatar, just set
        <code>icon</code>/<code>shape</code>/<code>size</code> .
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
          <div className="desc">Size of the avatar</div>
          <div className="type">
            <code>small</code>|<code>large</code>|<code>default</code>
          </div>
          <div className="defaults">
            <span>default</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">shape</div>
          <div className="desc">shape of the avatar</div>
          <div className="type">
            <code>circle</code>|<code>default</code>
          </div>
          <div className="defaults">
            <span>default</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">src</div>
          <div className="desc">
            the address of the image for an image avatar
          </div>
          <div className="type">string</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">icon</div>
          <div className="desc">custom icon type for an icon avatar </div>
          <div className="type">ReactNode</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">alt</div>
          <div className="desc">
            This attribute defines the alternative text describing the image
          </div>
          <div className="type">string</div>
          <div className="defaults">
            <span>false</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">fontSize</div>
          <div className="desc">
            sets the font size of the text avatar.The font size of text is in
            pixels.
          </div>
          <div className="type">number</div>
          <div className="defaults">
            <span>20</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">top</div>
          <div className="desc">
            helps to give top margin for the avatar text.
          </div>
          <div className="type">number</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">left</div>
          <div className="desc">
            helps to give left margin for the avatar text.
          </div>
          <div className="type">number</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">badge</div>
          <div className="desc">
            notification badge, displays the number of notifications.
          </div>
          <div className="type">number</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">color</div>
          <div className="desc">
            custom color for icon and text of the avatar.
          </div>
          <div className="type">string</div>
          <div className="defaults">
            <span>-</span>
          </div>
        </div>
        <div className="grid-table-type">
          <div className="prop">bgColor</div>
          <div className="desc">custom background color for the avatar.</div>
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
