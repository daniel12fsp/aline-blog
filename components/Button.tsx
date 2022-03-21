import styled from "styled-components";

export const GenerateButton = styled.a`
  padding: 20px;
  background-color: rgb(204 201 144);
  color: rgb(102 0 0);
  size: 20px;
  font-weight: 700;
  width: fit-content;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  text-decoration: unset;
  text-align: center;
  &:hover {
    background-color: rgb(204 201 144 / 56%);
    color: rgb(102 0 0);
    cursor: pointer;
  }
`;
