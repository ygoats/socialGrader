/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";
import { Toggle } from "./Toggle";

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    "@media(max-width: 375px)": {
      flexDirection: "column"
    }
  },
  title: {
    marginBottom: 5,
    color: theme.color.text.primary,
  },
  subtitle: {
    marginBottom: 0,
    color: theme.color.text.secondary,
    fontSize: "1rem"
  }
});

export const Header = ({ toggleTheme, checked }) => {
  const theme = useTheme();
  const { container, title, subtitle } = styles(theme);

  return (
    <div css={container}>
      <div>
        <h1 css={title}>Social Media Dashboard</h1>
        <h2 css={subtitle}>Total followers: 23,004</h2>
      </div>
      <Toggle toggleTheme={toggleTheme} checked={checked} />
    </div>
  );
};