import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const CustomizedButton = styled(Button)`
  color: hsl(0, 0%, 98%);
  border: 1px solid hsl(0, 0%, 98%);
  background-color: hsl(256, 26%, 20%);
  font-family: Karla, sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 10px 30px;
  opacity: 0.9;
  position: absolute;
  top: 90px;
  right: 80px;

  :hover {
    color: black;
    background-color: hsl(0, 0%, 98%);
  }

  @media screen and (max-width: 576px) {
    position: static;
    display: block;
    margin: 15px auto 0 auto;
  }
`;

function ButtonHowWeWork() {
  return <CustomizedButton>HOW WE WORK</CustomizedButton>;
}

export default ButtonHowWeWork;
