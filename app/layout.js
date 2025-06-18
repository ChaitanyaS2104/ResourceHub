import "@styles/globals.css";
import Provider from "@components/Provider";
import Navbar from "@components/Navbar";

export const metadata = {
  title: "ResourceHub",
  description: "Organize your resources",
};

export default async function RootLayout({ children }) {
  // const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Navbar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
