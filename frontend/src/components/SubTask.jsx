import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { CustomCheckbox } from "./CustomCheckbox";

function SubTask({ title, isCompleted }) {
  return (
    <Flex p={"12px"} backgroundColor={"var(--grey-100)"} borderRadius={"8px"}>
      <CustomCheckbox />
      <Text
        paddingTop={"1px"}
        fontSize={"13px"}
        fontWeight={"700"}
        color={isCompleted && "var(--grey-300)"}
        textDecoration={isCompleted && "line-through"}
      >
        {title}
      </Text>
    </Flex>
  );
}

export { SubTask };
