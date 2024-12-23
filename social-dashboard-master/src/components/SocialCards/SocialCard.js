/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";
import { upIcon, downIcon } from "../icons";
import { isPostive, formatNumber } from "../utils";

const styles = (theme, borderColor, todayColor) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: theme.color.ui[300],
    padding: 24,
    borderRadius: 3,
    position: "relative",
    "&:before": {
      content: "''",
      height: 5,
      background: borderColor,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      borderRadius: "3px 3px 0 0"
    }
  },
  row: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  account: {
    marginBottom: 30
  },
  acctNameStyle: {
    color: theme.color.text.secondary,
    fontWeight: 700,
    fontSize: "0.8rem",
    marginLeft: 8,
  },
  followerNum: {
    color: theme.color.text.primary,
    fontWeight: 700,
    fontSize: "3.5rem",
    lineHeight: 1
  },
  followerText: {
    color: theme.color.text.secondary,
    fontWeight: 400,
    fontSize: "0.8rem",
    textTransform: "uppercase",
    letterSpacing: 6
  },
  todayContainer: {
    color: todayColor,
    fontWeight: 700,
    fontSize: "0.8rem",
    marginTop: 30
  },
  todayNum: {
    marginLeft: 3
  }
});

export const SocialCard = ({ 
  borderColor, 
  icon, 
  acctName, 
  followers, 
  today 
}) => {
  const theme = useTheme();
  
  const todayColor = isPostive(today) 
    ? theme.color.status.positive 
    : theme.color.status.negative;
   
  const { 
    container, 
    row, 
    account,
    acctNameStyle, 
    followerNum,
    followerText,
    todayContainer,
    todayNum 
  } = styles(theme, borderColor, todayColor);

  return (
    <div css={container}>
      <div css={[row, account]}>
        {icon}
        <p css={acctNameStyle}>{acctName}</p>
      </div>
      <p css={followerNum}>{followers}</p>
      <p css={followerText}>Followers</p>
      <div css={[row, todayContainer]}>
        {isPostive(today) ? upIcon : downIcon}
        <p css={todayNum}>{formatNumber(today)} Today</p>
      </div>
    </div>
  );
};