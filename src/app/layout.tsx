import './globals.css';

export const metadata = {
  title: 'Seo3Kyung App',
  description: 'App-like Web UI',
  manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="overscroll-none touch-manipulation">
      <body className=" flex justify-center font-sans">
        <div className="w-full max-w-[420px]  border-gray-200">{children}</div>
      </body>
    </html>
  );
}
