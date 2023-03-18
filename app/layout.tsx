import './globals.css'

export const metadata = {
  title: 'Saving Goal',
  description: 'Start now!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#fff" />
        </head>
      <body className="h-screen bg-black">{children}</body>
    </html>
  )
}
