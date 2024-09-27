/* eslint-disable react/jsx-no-undef */
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";


export const metadata = {
  title: "Timely",
  description: "Schedule your tasks",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {/* Header */}
          <Header />
          {/* Main */}
          <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {children}
          </main>
          {/* Footer */}
          <footer className="bg-blue-100 py-8">
            <div className="container text-center text-gray-600 mx-auto px-4">
              <p>Made with &#x1F497; by <a className="text-blue-800" href="#">Sabarishni.</a></p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
