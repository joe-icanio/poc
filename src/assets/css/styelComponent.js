import { withStyles } from "@material-ui/core/styles";
import { Tooltip } from "@mui/material";
import styled from "styled-components";

export const DataFound = styled.div`
  text-align: center;
  background: rgba(190, 137, 118, 0.12);
  border: 1px solid rgba(190, 137, 118, 0.39);
  width: max-content;
  margin: auto;
  font-family: system-ui;
  padding: 5px 10px;
  border-radius: 5px;
  color: rgb(190, 137, 118);
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: column;
`;

export const ButtonLink = styled.button`
  background: rgb(190, 137, 118);
  padding: 12px 20px;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  font-family: system-ui;
  border: none;
  border-radius: 7px;
`;

export const BlackTooltip = withStyles({
  tooltip: {
    color: "#fff",
    backgroundColor: "#000 !important",
    fontSize: "0.75rem",
  },
  arrow: {
    color: "#000 !important",
  },
})(Tooltip);
