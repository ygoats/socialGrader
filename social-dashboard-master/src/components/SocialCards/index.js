/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";
import { config } from "./config";
import { SocialCard } from "./SocialCard";

const { container } = ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    columnGap: 20,
    rowGap: 20,
    margin: "50px 0"
  },
});

export const SocialCards = () => {
  const theme = useTheme();

  return (
    <div css={container}>
      {config.map((platform, index) => (
        <SocialCard
          key={index}
          borderColor={theme.color.social[platform.name]}
          icon={platform.icon}
          acctName={platform.acctName}
          followers={platform.followers}
          today={platform.today}
        />
      ))}
    </div>
  );
};