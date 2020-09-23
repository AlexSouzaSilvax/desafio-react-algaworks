import React from "react";
import { Wrapper } from "./AppHeader.styles";
import { useSelector } from "react-redux";

function AppHeader() {
  const result = useSelector((state) => state.calculator);
  return (
    <Wrapper>
      alga <span>Shopping {result}</span>
    </Wrapper>
  );
}

export default AppHeader;
