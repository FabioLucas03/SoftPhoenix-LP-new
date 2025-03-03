import './globals.css'
import CustomCursor from './components/CustomCursor'
import SocialIcons from './components/SocialIcons'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <CustomCursor />
        {children}
        <SocialIcons />
      </body>
    </html>
  )
}
