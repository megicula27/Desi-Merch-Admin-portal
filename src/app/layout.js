import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "@/components/ui/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin Portal",
  description: "E-commerce Admin Portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex h-screen bg-background">
            <Sidebar />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background">
              <div className="container mx-auto px-6 py-8">{children}</div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
