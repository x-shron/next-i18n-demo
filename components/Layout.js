import Navbar from './navbar'
import Footer from './footer'
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
        <Box >
            {children}
        </Box>
      <Footer />
    </div>
  )
}
