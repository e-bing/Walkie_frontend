import "./globals.css";

export const metadata = {
  title: "Seo3Kyung App",
  description: "App-like Web UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-white flex justify-center">
        <div className="w-full max-w-[420px] min-h-screen border-x border-gray-200">
          {children}
        </div>
      </body>
    </html>
  );
}
