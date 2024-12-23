/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";

const styles = (theme, checked) => ({
  container: {
    display: "flex",
    alignItems: "center",
    "@media(max-width: 375px)": {
      justifyContent: "space-between",
      width: "100%",
      marginTop: 20,
      paddingTop: 20,
      borderTop: `1px solid ${theme.color.text.secondary}`
    }
  },
  text: {
    fontSize: "0.8rem",
    fontWeight: 700,
    lineHeight: 1,
    color: theme.color.text.secondary,
    marginRight: 10,
    marginBottom: 0
  },
  button: {
    background: theme.toggle,
    border: "none",
    borderRadius: 20,
    position: "relative",
    width: 45,
    height: 25,
    '&:after': {
      content: '" "',
      backgroundColor: theme.color.ui[100],
      borderRadius: "50%",
      position: "absolute",
      top: 2.5,
      right: 2.5,
      transform: checked ? "translateX(0)" : "translateX(-19.5px)",
      transition: "transform 0.1s linear",
      width: 20,
      height: 20,
    },
  },
});

export const Toggle = ({ toggleTheme, checked }) => {
  const theme = useTheme();
  const { container, text, button } = styles(theme, checked);

  return (
    <div css={container}>
      <p css={text}>Dark Mode</p>
      <button css={button} onClick={toggleTheme}></button>
    </div>
  );
};