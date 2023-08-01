/* eslint-disable no-dupe-keys */
import Dashboard from '../../../../components/dashboard/student'
import SubPannel from '../../../../components/common/subPannel'
import { Stack, } from '@mui/material';

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
          <SubPannel
            icon={<img src='/images/img_language1.png' style={{width: '100%'}} />}
            title='Traffic Safety'
            url='/dashboard'
            buttonText='ENROLL NOW!'
          />
          <SubPannel
            icon={<img src='/images/img_english1.png' style={{width: '100%'}} />}
            title='Basic Home Fire Safty'
            url='/dashboard'
            buttonText='ENROLL NOW!'
          />
          <SubPannel
            icon={<img src='/images/img_personaldevelopment.png' style={{width: '100%'}} />}
            title='Human Rights Gender Equality'
            url='/dashboard'
            buttonText='ENROLL NOW!'
          />
          <SubPannel
            icon={<img src='/images/img_personaldevelopment.png' style={{width: '100%'}} />}
            title='Human Rights Gender Equality'
            url='/dashboard'
            buttonText='ENROLL NOW!'
          />
        </Stack>
      </Dashboard>
    </>
  );
}