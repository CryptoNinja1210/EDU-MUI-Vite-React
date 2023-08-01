/* eslint-disable no-dupe-keys */
import Dashboard from '../../../../components/dashboard/student'
import SubPannel from '../../../../components/common/subPannel'
import { Stack, } from '@mui/material';
import Header from '../../../../components/common/header';

export default function App() {
  const pathname =(window.location.pathname);
  const url = pathname.slice(1)

  return (
    <>
      <Dashboard url={url}>
        <Header title='My Active Courses' />
        <Stack
          justifyContent="center"
          alignItems="center"
          direction='row'
          spacing={{ xs: 1, sm: 2, md: 4 }}
          useFlexGap flexWrap="wrap"
        >
          {/* Gonzaga Paul - Dashboard / Enrolled Courses */}
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
        </Stack>
      </Dashboard>
    </>
  );
}