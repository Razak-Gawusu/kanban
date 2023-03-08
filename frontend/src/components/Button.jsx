import React from "react";
import styled from "@emotion/styled";
import { Button } from "@chakra-ui/react";

const CButton = styled(Button)`
  border: none;
  font-size: 13px;
  padding: 18px 28px;
  border-radius: 25px;
  &:hover {
    opacity: 0.8;
  }
  &.primaryLarge {
    color: var(--white);
    background-color: var(--primary);
    font-size: 15px;
    padding: 25px 35px;
  }
  &.primary {
    color: var(--white);
    background-color: var(--primary);
  }
  &.secondaryLarge {
    color: var(--primary);
    background-color: var(--grey-100);
    padding: 25px 35px;
    font-size: 15px;
    &:hover {
      opacity: 1;
      background-color: var(--grey-200);
    }
  }
  &.secondary {
    color: var(--primary);
    background-color: var(--grey-100);
    &:hover {
      opacity: 1;
      background-color: var(--grey-200);
    }
  }
  &.dangerLarge {
    color: var(--white);
    background-color: var(--secondary);
    padding: 25px 35px;
    font-size: 15px;
  }
  &.danger {
    color: var(--white);
    background-color: var(--secondary);
  }

  &.tertiary {
  }

  .btnLoader {
    width: 1rem;
    height: 1rem;
    margin-left: 1.2rem;
    position: relative;
    display: inline-block;
    box-sizing: content-box;
    &::after {
      content: " ";
      display: block;
      width: 1rem;
      height: 1rem;
      box-sizing: content-box;
      backface-visibility: hidden;
      border-radius: 50%;
      border: 0.2rem solid currentColor;
      border-left-color: transparent;
      transform-origin: 50% 50%;
      transform-box: fill-box;
      animation: ld-spin 500ms infinite linear;
    }
  }
  @keyframes ld-spin {
    0% {
      animation-timing-function: cubic-bezier(0.5856, 0.0703, 0.4143, 0.9297);
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export function CustomButton({ label, variant, disabled, loading, src }) {
  return (
    <CButton disabled={disabled} className={`${variant}`}>
      <img src={src} alt="" />
      {label}
      {loading && <span className="btnLoader"></span>}
    </CButton>
  );
}
