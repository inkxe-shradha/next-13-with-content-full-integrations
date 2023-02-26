import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="layout">
          <header>
            <Link href="/">
              <h1>
                <span>Just Add</span>
                <span>Marmite</span>
              </h1>
              <h2>Spread The Joy</h2>
            </Link>
          </header>

          <div className="page-content">{children}</div>

          <footer>
            <p>Copyright of content full API</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
