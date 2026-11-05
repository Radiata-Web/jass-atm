import { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { Box } from "@chakra-ui/react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import HomePage from "@/pages/HomePage"
import AtmsPage from "@/pages/AtmsPage"
import * as gtag from "@/lib/gtag"

function ScrollAndAnalytics() {
  const location = useLocation()

  useEffect(() => {
    gtag.pageview(location.pathname + location.search)

    if (location.hash) {
      const id = location.hash.slice(1)
      // Allow the route to paint before scrolling to hash targets
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView()
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.search, location.hash])

  return null
}

export default function App() {
  return (
    <Box as="div" minH="100vh">
      <ScrollAndAnalytics />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/atms" element={<AtmsPage />} />
      </Routes>
      <Footer />
    </Box>
  )
}
