import React from "react";

import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";

const CustomizedDivider = styled(Divider)`
  margin-bottom: 0;
  margin-top: 0;
`;

function StyledDivider() {
  return <CustomizedDivider />;
}

function MenuOptions() {
  return (
    <div>
      <ListItemText className="style-bold-over">HOW WE WORK</ListItemText>

      <StyledDivider />

      <ListItemText className="style-bold-over">BLOG</ListItemText>

      <StyledDivider />

      <ListItemText className="style-bold-over">ACCOUNT</ListItemText>

      <StyledDivider />

      <ListItemText className="style-mouse-over">VIEW PLAN</ListItemText>

      <StyledDivider />
    </div>
  );
}

export default MenuOptions;
