import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import "./globals.css";

export const metadata = {
  title: "Fifty",
  description: "Fifty app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
				<Header />
				{children}
				<Footer />
			</body>
    </html>
  );
}
