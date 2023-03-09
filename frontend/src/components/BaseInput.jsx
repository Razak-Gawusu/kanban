// import React from "react";
// import { Stack, Text, Input, Textarea } from "@chakra-ui/react";

// function BaseInput({ label, type }) {
//   return (
//     <Stack>
//       <Text htmlFor={label}></Text>
//       {type === "text" && <Input id={label} />}
//       {type === "textarea" && <Textarea id={label} />}
//     </Stack>
//   );
// }

// export { BaseInput };

import React from "react";
// import { CgAsterisk } from "react-icons/cg";
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Textarea,
} from "@chakra-ui/react";
import styled from "@emotion/styled";

const Wrapper = styled(Box)`
  width: 100%;
  .inputType {
    outline: none;
    &:focus {
      border: solid 1px var(--primary);
    }
  }
  .inputType[type="datetime-local"]::-webkit-calendar-picker-indicator {
    width: 3rem;
    height: 2rem;
    position: absolute;
    z-index: 10;
    right: 1rem;
    opacity: 0;
    &::focus {
      background: #fff;
    }
  }
  .inputType[type="date"]::-webkit-calendar-picker-indicator {
    opacity: 0;
  }
  .inputType[disabled] {
    opacity: 0.8;
  }
`;

export const BaseInput = React.forwardRef(
  (
    {
      label,
      IconClick,
      placeholder,
      id,
      type,
      readonly,
      rightIcon,
      right,
      color,
      rows,
      fontSize,
      isRequired,
      width,
      maxW,
      border,
      labelSize,
      fontW,
      height,
      ...rest
    },
    ref
  ) => {
    return (
      <Wrapper className="container">
        <Text
          mb="1.4rem"
          color={color || "#333758"}
          fontSize={labelSize || "1.4rem"}
          fontWeight={fontW || "400"}
          as="label"
          position="relative"
          htmlFor={id}
        >
          {label}
          {isRequired && (
            <Box as="span" position="absolute" top="0" right="-1rem">
              {/* <CgAsterisk color="var(--error)" size="10" /> */}
            </Box>
          )}
        </Text>
        <InputGroup>
          {type !== "textarea" ? (
            <Input
              fontSize={fontSize || "1.6rem"}
              id={id}
              type={type}
              bgColor="#F7F9FB"
              border={"1px solid #E0E0E0" || border}
              borderRadius="4px"
              h={height || "4.8rem"}
              w={"100%" || width}
              maxW={maxW}
              p="1.2rem 1.6rem"
              placeholder={placeholder}
              readOnly={readonly}
              className="inputType"
              cursor="pointer"
              ref={ref}
              {...rest}
            />
          ) : (
            <Textarea
              id={id}
              type={type}
              fontSize={"1.4rem" || fontSize}
              color={"#363942" || color}
              bgColor={"#FAFCFF"}
              placeholder={placeholder}
              rows={rows || "6"}
              ref={ref}
              {...rest}
            />
          )}
          <InputRightElement
            top="50%"
            transform="translateY(-45%)"
            right={right || "1rem"}
            onClick={IconClick}
            cursor="pointer"
            zIndex="0"
            position="absolute"
            pointerEvents={`${type === "date" ? "none" : ""}`}
          >
            <img src={rightIcon} alt="" />
          </InputRightElement>
        </InputGroup>
      </Wrapper>
    );
  }
);

BaseInput.displayName = "BaseInput";
