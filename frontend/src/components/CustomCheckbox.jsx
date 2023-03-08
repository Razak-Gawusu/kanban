import React from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border: solid 2px var(--grey-200);
    border-radius: 3.5px;
    background-color: inherit;
  }

  &:hover input ~ .checkmark {
    background-color: var(--grey-100);
  }

  input:checked ~ .checkmark {
    background-color: var(--primary);
    border: solid 2px var(--primary);
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    left: 6px;
    top: 2.5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
export function CustomCheckbox({ checked }) {
  return (
    <Label>
      <input type={"checkbox"} checked={checked} />
      <span className="checkmark"></span>
    </Label>
  );
}
