/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";
import { upIcon, downIcon } from "../icons";
import { isPostive, formatNumber } from "../utils";

const styles = (theme, differenceColor) => ({
  container: {
    background: theme.color.ui[300],
    padding: 24,
    borderRadius: 3,
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
  },
  top: {
    alignItems: "center",
    marginBottom: 20
  },
  bottom: {
    alignItems: "flex-end"
  },
  typeStyle: {
    color: theme.color.text.secondary,
    fontWeight: 700,
    fontSize: "0.8rem",
  },
  countStyle: {
    color: theme.color.text.primary,
    fontWeight: 700,
    fontSize: "1.8rem",
    lineHeight: 1
  },
  differenceContainer: {
    display: "flex",
    alignItems: "center"
  },
  differenceStyle: {
    color: differenceColor,
    fontWeight: 700,
    fontSize: "0.8rem",
    lineHeight: 1,
    marginLeft: 3
  },
});

export const OverviewCard = ({ type, icon, count, difference }) => {
  const theme = useTheme();
  
  const differenceColor = isPostive(difference) 
    ? theme.color.status.positive 
    : theme.color.status.negative;
   
  const { 
    container, 
    row, 
    top,
    bottom, 
    typeStyle,
    countStyle,
    differenceContainer,
    differenceStyle
  } = styles(theme, differenceColor);

  return (
    <div css={container}>
      <div css={[row, top]}>
        <p css={typeStyle}>{type}</p>
        {icon}
      </div>
      <div css={[row, bottom]}>
        <p css={countStyle}>{count}</p>
        <div css={differenceContainer}>
          {isPostive(difference) ? upIcon : downIcon}
          <p css={differenceStyle}>{formatNumber(difference)}%</p>
        </div>
      </div>
    </div>
  );
};