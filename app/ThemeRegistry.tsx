"use client";

import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { getTheme } from "./theme";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = getTheme("light");
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
