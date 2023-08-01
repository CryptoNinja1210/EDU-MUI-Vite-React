/* eslint-disable no-dupe-keys */
import Dashboard from '../../../components/dashboard/student'
import SubPannel from '../../../components/common/subPannel'
import { Box, Button, Stack, } from '@mui/material';

export default function App() {
  const pathname =(window.location.pathname);
  const url = pathname.slice(1)
  return (
    <>
      <Dashboard url={url}>
        <Stack
          justifyContent="center"
          alignItems="center"
          direction='row'
          spacing={{ xs: 1, sm: 2, md: 4 }}
          useFlexGap flexWrap="wrap"
        >
          <SubPannel
            icon={<img src='/images/img_it1.png' style={{width: '100%'}} />}
            title='Wild Fire Safety & Prevention'
            url='/dashboard'
            buttonText='ENROLL NOW!'
          />
          <SubPannel
            icon={<img src='/images/img_health1.png' style={{width: '100%'}} />}
            title='Fire Chemistry'
            url='/dashboard'
            buttonText='ENROLL NOW!'
          />
          <SubPannel
            icon={<img src='/images/img_language1.png' style={{width: '100%'}} />}
            title='Traffic Safety'
            url='/dashboard'
            buttonText='ENROLL NOW!'
          />
        </Stack>
        {/* <Button
            sx={{
              width: '152.7px',
              height: '36.5px',
              display: 'flex',
              fontSize: '15px',
              fontWeight: '700',
              alignItmem: 'center',
              background: 'linear-gradient(89.7deg, #BA8328 0.23%, #D5A340 99.74%)',
              borderRadius: '9px',
              color: 'white',
              m: {sm: '1px auto', xs: '1px auto', lg: '0px'},
              my: {sm: '20px', xs: '20px'},
              textTransform: 'none',
            }}
          >Buy Course!</Button> */}
      </Dashboard>
    </>
  );
}