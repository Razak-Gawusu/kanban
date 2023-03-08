import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import white from "../asset/icons/boardIcon-white.svg";
import voilet from "../asset/icons/boardIcon-voilet.svg";
import grey from "../asset/icons/boardIcon-grey.svg";

const Tab = styled(Flex)`
  gap: 12px;
  padding: 14px 24px;
  background-color: var(--white);
  color: var(--grey-300);

  &.active {
    background-color: var(--primary);
    color: var(--white);
    border-radius: 0 25px 25px 0;
  }

  &.plain {
    color: var(--primary);
  }
`;

function getIcon(variant) {
  if (variant === "active") {
    return white;
  } else if (variant === "plain") {
    return voilet;
  } else {
    return grey;
  }
}

function BoardTab({ label, variant }) {
  return (
    <Tab className={variant} maxW={"276px"}>
      <Image src={getIcon(variant)} />
      <Text textTransform={"capitalize"} fontWeight={700}>
        {variant === "plain" && "+  "}
        {label}
      </Text>
    </Tab>
  );
}

export { BoardTab };
