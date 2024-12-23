import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { SocialCards } from "../components/SocialCards";
import { Overview } from "../components/Overview";
import { ThemeProvider } from "emotion-theming";
import { lightTheme, darkTheme } from "../theme";

const IndexPage = () => {
  const [checked, setChecked] = useState(true);
  const toggleTheme = () => setChecked(!checked);

  return (
    <ThemeProvider theme={checked ? lightTheme : darkTheme}>
      <Layout>
        <Header toggleTheme={toggleTheme} checked={checked} />
        <SocialCards />
        <Overview />
      </Layout>
    </ThemeProvider>
  )
};

export default IndexPage
