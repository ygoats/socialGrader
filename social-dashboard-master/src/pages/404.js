import React from "react"
import { Layout } from "../components/Layout"
import { ThemeProvider } from "emotion-theming";
import { lightTheme } from "../theme";

const NotFoundPage = () => (
  <ThemeProvider theme={lightTheme}>
    <Layout>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  </ThemeProvider>
)

export default NotFoundPage
