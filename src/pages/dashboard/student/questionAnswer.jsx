/* eslint-disable no-dupe-keys */
import Header from '../../../components/common/header';
import Dashboard from '../../../components/dashboard/student'
import { Stack, Typography, Box } from '@mui/material';

export default function App() {
  const pathname =(window.location.pathname);
  const url = pathname.slice(1)
  return (
    <>
      <Dashboard url={url}>
        <Box width={'100%'}>
          <Stack
            // direction='row'
            // spacing={{ xs: 1, sm: 2, md: 4 }}
            useFlexGap flexWrap="wrap"
            sx={{
              bgcolor: '#fff',
              py: '50px',
              px: '20px',
              width: '100%',
              borderRadius: '28px',
              height: '588px',
              alignContent: {md: 'start', xs: 'center'},
              // alignSelf: {md: 'start', xs: 'center'}
            }}
          >
            <Header title='Question & Answer' />
            <Box display= 'flex'>
              <Typography
                sx={{
                  fontSize : {lg: '275px', md: '200px', sm: '275px', xs: '200px'},
                  color: '#CCC',
                  fontWeight: 600,
                  lineHeight: '99%',
                  letterSpacing: '-12.375px'
                }}
              >
                0
              </Typography>
              <Typography variant='h4'
                sx={{
                  // fontSize : '36px',
                  color: '#CCC',
                  fontWeight: 600,
                  lineHeight: '99%',
                  letterSpacing: '-1.62px',
                  alignSelf: 'center',
                  pt: '80px'
                }}
              >
                Question<br/> Answers
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Dashboard>
    </>
  );
}