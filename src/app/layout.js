import { Inter } from 'next/font/google'
import './styles/main.css'
import './styles/globals.module.css'
import { brand } from '@/lib/data'
import Navbar from '@/components/navbar/Navbar'
import { auth } from '@/lib/auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: `${brand} | Your Gateway to Extraordinary Journeys and Travel Experiences`,
    template: `${brand} | %s`
  },
  description: `Explore Unforgettable Destinations with ${brand} and discover the world\'s wonders with ${brand}. 
  Our travel experts curate extraordinary experiences for every adventurer. From breathtaking landscapes to cultural gems, embark on unforgettable journeys tailored just for you. Start your adventure today!`,
}

export default async function RootLayout({ children }) {

  const session= await auth();
  return (
    
      <html lang="en"> 
        <body className={inter.className}>
          <Navbar session={session}/>
            {children}
        </body>
      </html>

  )
}