import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Mnews | Update yourself",
  description: "Update yourself about front-end news",
  openGraph: {
    type: "website",
    siteName: "Mnews",
    title: "Mnews | Update yourself",
    images: [
      {
        url: "/assets/mnews-logo.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-200">
        <Header />
        {children}
      </body>
    </html>
  );
}
