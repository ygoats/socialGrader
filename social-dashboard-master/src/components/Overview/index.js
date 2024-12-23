/** @jsx jsx */
import { Fragment } from "react";
import { jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";
import { OverviewCard } from "./OverviewCard";
import { config } from "./config";

const styles = theme => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    columnGap: 20,
    rowGap: 20,
    margin: "25px 0"
  },
  header: {
    color: theme.color.text.secondary
  }
});

export const Overview = () => {
  const theme = useTheme();
  const { container, header } = styles(theme);

  return (
    <Fragment>
      <h2 css={header}>Overview - Today</h2>
      <div css={container}>
        {config.map((card, index) => (
          <OverviewCard
            key={index}
            type={card.type}
            icon={card.icon}
            count={card.count}
            difference={card.difference}
          />
        ))}
      </div>
    </Fragment>
  );
};