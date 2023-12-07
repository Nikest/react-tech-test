// Problem statement:
// Given a component consisting of 3 checkboxes and a button.
// The task is to implement the functionality of the button,
// which will change according to the following conditions:

// - If one or more checkboxes are not selected (checked: false),
// then when the button is clicked, all unselected checkboxes become selected.
// - If all checkboxes are selected (checked: true),
// then when the button is clicked, all checkboxes become unselected.

// ** Additional task: Optimize code and memory usage if it's possible.
import React, { useState, useMemo } from "react";

import { generatInitialCheckboxes } from "./utils/generateCheckboxes";
import Checkbox from "./components/Checkbox";

interface Checkboxes {
  [key: string]: boolean;
}

const initialCheckboxes: Checkboxes = generatInitialCheckboxes(3);

export default function App() {
  const [checkboxes, setCheckboxes] = useState<Checkboxes>(initialCheckboxes);

  // #1 - properly calculate isAllSelected value
  const isAllSelected = useMemo(() => Object.values(checkboxes).every(value => value), [checkboxes]);


  console.log(checkboxes);

  const changeValue = (key: string, value: boolean) => {
    setCheckboxes((prev) => ({ ...prev, [key]: value }));
  };

  // #2 - implement button functionality described in the problem statement
  const handleButtonClick = () => {
    setCheckboxes(prev => {
      const newState: Checkboxes = {};
      for (const key in prev) {
        newState[key] = !isAllSelected;
      }
      return newState;
    });
  };

  return (
    <>
      <button onClick={handleButtonClick}>
        {isAllSelected ? "Unselect All" : "Select All"}
      </button>
      <p />
      {Object.entries(checkboxes).map(([key, value]) => (
        <Checkbox
          key={key}
          checked={value}
          name={key}
          onChange={(ev) => changeValue(key, ev.target.checked)}
        />
      ))}
    </>
  );
}
