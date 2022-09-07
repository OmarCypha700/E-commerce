import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Spinner = () => {
  return (
    <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        position: 'relative', 
        left: '50%'}}>
    <CircularProgress />
  </Box>
  )
}

export default Spinner