import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Next 13's features",
  description: "Testing Next.js 13's new features",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
