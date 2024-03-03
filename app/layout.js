import { StrictMode } from "react";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <StrictMode>
    <html lang="en" >
      <body className="bg-gradient-to-r from-color1 to-color2">{children}</body>
    </html>
    </StrictMode>
  );
}
