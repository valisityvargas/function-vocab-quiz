import './globals.css'

export const metadata = {
  title: 'Function Vocabulary Quiz',
  description: 'Interactive quiz for AP Pre-Calculus function vocabulary',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
