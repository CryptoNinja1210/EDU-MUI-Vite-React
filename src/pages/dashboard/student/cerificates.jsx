/* eslint-disable no-dupe-keys */
import Dashboard from '../../../components/dashboard/student'
import { Stack, } from '@mui/material';

export default function App() {
  const pathname =(window.location.pathname);
  const url = pathname.slice(1)
  return (
    <>
      <Dashboard url={url}>
        <Stack
          width="100%"
          direction='row'
          useFlexGap flexWrap="wrap"
          spacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{
            bgcolor: '#fff',
            py: '50px',
            px: {lg: '30px', md: '20px'},
            borderRadius: '28px'
          }}
        >
            <img src='/images/cert-maker-2 1.png' style={{width: '290px', height: '204px'}} alt='certification mark' />
            <img src='/images/cert-maker-2 1.png' style={{width: '290px', height: '204px'}} alt='certification mark' />
            <img src='/images/cert-maker-2 1.png' style={{width: '290px', height: '204px'}} alt='certification mark' />
            <img src='/images/cert-maker-2 1.png' style={{width: '290px', height: '204px'}} alt='certification mark' />
        </Stack>
      </Dashboard>
    </>
  );
}