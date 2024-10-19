"use client";

import React from "react";

function CustomButton(props: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  disabled: boolean;
}) {
  return (
    <button onClick={props.onClick} disabled={props.disabled}>
      {props.text}
    </button>
  );
}

export default function Home() {
  const [counter, setCounter] = React.useState(0);

  function handleClick(counterType: string) {
    if (counterType === "plus" && counter < 10) {
      setCounter(counter + 1);
    }

    if (counterType === "min" && counter >= 0) {
      setCounter(counter - 1);
    }

    if (counterType === "reset") {
      setCounter(0);
    }
  }

  return (
    <div>
      <CustomButton
        onClick={() => handleClick("min")}
        text={"-"}
        disabled={counter < 0 || counter >= 10}
      />
      <div>{counter >= 10 || counter < 0 ? "done!" : counter}</div>
      <CustomButton
        onClick={() => handleClick("plus")}
        text={"+"}
        disabled={counter >= 10 || counter < 0}
      />
      <CustomButton
        onClick={() => handleClick("reset")}
        text="reset"
        disabled={counter >= 0 && counter < 10}
      />
    </div>
  );
}
