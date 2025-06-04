import "./styles/globals.css";
import Provider from "./components/Provider";
import Navbar from "./components/Navbar";

import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";

export const metadata = {
  title: "ResourceHub",
  description: "Organize your resources",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <Provider session={session}>
          <div className="main">
            <div className="gradient" />
          </div>
          <main>
            <Navbar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
