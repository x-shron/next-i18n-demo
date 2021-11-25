import Navbar from './navbar'
import Footer from './footer'
import Stack from '@mui/material/Stack';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
        <main>
            <Stack justifyContent='center' alignItems='center' direction='column' style={{textAlign:'center'}}>
                {children}
            </Stack>
        </main>
      <Footer />
    </>
  )
}
