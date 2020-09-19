import styled from "styled-components";

export const Wrapper = styled.div`
  height: 32px;

  display: flex;
  align-items: center;
  cursor: default;
`;

export const Indicator = styled.div`
  height: 14px;
  width: 14px;

  border-radius: 7px;

  //pega props (value) do component
  ${(props) => (props.value ? "background-color: #004d61;" : "")}

  border: 2px solid #004d61;
  margin-right: 8px;
  cursor: pointer;
`;
