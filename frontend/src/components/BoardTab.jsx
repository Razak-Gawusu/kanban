import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Tab = styled(Flex)`
  gap: 12px;
  padding: 14px 24px;
  background-color: var(--white);
  color: var(--grey-300);
  border-radius: 0 25px 25px 0;
  cursor: pointer;

  &:hover {
    background-color: var(--grey-200);
    color: var(--primary);
    .svg {
      fill: var(--primary);
    }
  }

  &.active {
    background-color: var(--primary);
    color: var(--white);
  }

  &.plain {
    color: var(--primary);
  }
`;

function BoardTab({ label, variant, src }) {
  return (
    <Tab className={variant} maxW={"276px"}>
      <Image src={src} />
      <Text textTransform={"capitalize"} fontWeight={700}>
        {label}
      </Text>
    </Tab>
  );
}

export { BoardTab };
