import React, { useState } from "react";
import "../select/index.scss";

const AutoComplete = (props: any) => {
  const autoComplete = {
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: false,
    userInput: ""
  };
  const defaultProperty = {
    suggestions: []
  };
  const [updateComplete, setUpdateComplete] = useState(autoComplete);
  const onChange = (e: any) => {
    const userInput = e.currentTarget.value;

    const myFilteredSuggestions = props.suggestions.filter(
      (suggestion: any) =>
        suggestion.label.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setUpdateComplete({
      activeSuggestion: 0,
      filteredSuggestions: myFilteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };
  const onClick = (e: any) => {
    setUpdateComplete({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };
  const onKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      setUpdateComplete({
        ...updateComplete,
        activeSuggestion: 0,
        showSuggestions: false,
        userInput:
          updateComplete.filteredSuggestions[updateComplete.activeSuggestion]
      });
    } else if (e.keyCode === 38) {
      if (updateComplete.activeSuggestion === 0) {
        return;
      }

      setUpdateComplete({
        ...updateComplete,
        activeSuggestion: updateComplete.activeSuggestion - 1
      });
    } else if (e.keyCode === 40) {
      if (
        updateComplete.activeSuggestion - 1 ===
        updateComplete.filteredSuggestions.length
      ) {
        return;
      }

      setUpdateComplete({
        ...updateComplete,
        activeSuggestion: updateComplete.activeSuggestion + 1
      });
    }
  };
  let suggestionsListComponent;
  if (updateComplete.showSuggestions && updateComplete.userInput) {
    if (updateComplete.filteredSuggestions.length) {
      suggestionsListComponent = (
        <div className="select-input-dropdown-input visible">
          <div className="select-dropdown-items-wrapper">
            {updateComplete.filteredSuggestions.map((suggestion, index) => {
              const { label } = suggestion;
              return (
                <div
                  className="select-dropdown-item"
                  key={label}
                  onClick={onClick}
                >
                  {label}
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      suggestionsListComponent = (
        <div className="select-input-dropdown-input visible">
          <div className="select-dropdown-items-wrapper">
            <div className="select-dropdown-item">No Suggestions</div>
          </div>
        </div>
      );
    }
  }
  return (
    <>
      <div
        className={`input-${props.size ? props.size : "default"} input-wrapper`}
      >
        <input
          type="text"
          className="bu-input"
          placeholder={props.placeholder}
          value={updateComplete.userInput}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      </div>
      {suggestionsListComponent}
    </>
  );
};
export default AutoComplete;
