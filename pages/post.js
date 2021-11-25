import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';

export default  function post(){
    return (
        <div style={{width:'500px',margin:'30px auto'}}>
           <Stack spacing={{xs: 1, sm: 2, md: 10}} direction='row' justifyContent='center'>

               <Button variant="contained" color='primary' size='small'>
                劳动力塑料袋
                </Button>     
                <Button variant='outlined' color='success' size='small'>
                    劳动力塑料袋
                </Button> 
           </Stack>
              
        </div>
    )
}