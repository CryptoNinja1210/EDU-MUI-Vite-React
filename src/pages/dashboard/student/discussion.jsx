/* eslint-disable no-dupe-keys */
import Dashboard from '../../../components/dashboard/student'
import SubPannel from '../../../components/common/subPannel'
import { Box, Stack, Typography } from '@mui/material';
import Header from '../../../components/common/header';

const Discussion = () => {
  return (
    <Box sx={{
      backgroundColor: '#C4933B',
      width: '50px',
      height: '50px',
      borderRadius: '25px',
      display: 'flex',
      textAlign: 'center',
      flexDirection: 'column',
      flexShrink: '0',
      letterSpacing: '-10px',
      p: '15px 5px',
    }}>
      <Typography fontSize={18} fontWeight={600} sx={{marginTop: '-5px'}}>0</Typography>
      <Typography
        fontSize={9}
        fontWeight={700}
        letterSpacing='-0.81px'
        sx={{marginTop: '-10px'}}
      >Discussion</Typography>
    </Box>
  )
}

export default function App() {
  const pathname =(window.location.pathname);
  const url = pathname.slice(1)
  return (
    <>
      <Dashboard url={url}>
        <Header title='My Disscussion-0'/>
        <Stack
          justifyContent="center"
          alignItems="center"
          direction='row'
          spacing={{ xs: 1, sm: 2, md: 4 }}
          useFlexGap flexWrap="wrap"
        >
          <SubPannel
            icon={<img src='/images/img_it1.png' style={{width: '100%'}} />}
            title='Wild Fire Safety & Preventior'
            url='/dashboard'
            buttonText='ENROLL NOW!'
            badge={<Discussion />}
          />
          <SubPannel
            icon={<img src='/images/img_health1.png' style={{width: '100%'}} />}
            title='Fire Chemistry'
            url='/dashboard'
            buttonText='ENROLL NOW!'
            badge={<Discussion />}
          />
          <SubPannel
            icon={<img src='/images/img_language1.png' style={{width: '100%'}} />}
            title='Traffic Safety'
            url='/dashboard'
            buttonText='ENROLL NOW!'
            badge={<Discussion />}
          />
          <SubPannel
            icon={<img src='/images/img_english1.png' style={{width: '100%'}} />}
            title='Basic Home Fire Safty'
            url='/dashboard'
            buttonText='ENROLL NOW!'
            badge={<Discussion />}
          />
          <SubPannel
            icon={<img src='/images/img_personaldevelopment.png' style={{width: '100%'}} />}
            title='Human Rights Gender Equality'
            url='/dashboard'
            buttonText='ENROLL NOW!'
            badge={<Discussion />}
          />
          <SubPannel
            icon={<img src='/images/img_personaldevelopment.png' style={{width: '100%'}} />}
            title='Human Rights Gender Equality'
            url='/dashboard'
            buttonText='ENROLL NOW!'
            badge={<Discussion />}
          />
        </Stack>
      </Dashboard>
    </>
  );
}