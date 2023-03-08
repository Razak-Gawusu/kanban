import React from "react";
import styled from "@emotion/styled";
import { Flex, Image } from "@chakra-ui/react";
import sun from "../asset/icons/sun.svg";
import moon from "../asset/icons/moon.svg";

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--primary);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: var(--primary);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px var(--primary);
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 24px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

function ToggleSwitch() {
  return (
    <Flex
      justifyContent={"center"}
      maxW={"251px"}
      p={"14px"}
      gap={"24px"}
      bgColor={"var(--grey-100)"}
      borderRadius={"8px"}
    >
      <Image src={sun} />
      <Label>
        <input type="checkbox" />
        <span className="slider round"></span>
      </Label>
      <Image src={moon} />
    </Flex>
  );
}

export { ToggleSwitch };
