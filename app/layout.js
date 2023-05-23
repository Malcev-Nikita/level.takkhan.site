import '../css/main.css'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'LEVEL',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="ru">
      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  )
}


export default RootLayout;