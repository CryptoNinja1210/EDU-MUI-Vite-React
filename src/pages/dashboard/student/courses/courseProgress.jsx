/* eslint-disable no-dupe-keys */
import Dashboard from '../../../../components/dashboard/student'
import SubPannel from '../../../../components/common/subPannel'
import { Stack } from '@mui/material';
import ProgressBox from '../../../../components/common/progressBox';

export default function App() {
  const pathname =(window.location.pathname);
  const url = pathname.slice(1)
  // console.log(title.split('/').map((item)=>item.charAt(0).toUpperCase() + item.slice(1)))
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
            title='Wild Fire Safety & Preventior'
            url='/dashboard'
            buttonText='ENROLL NOW!'
          />
          <ProgressBox />
        </Stack>
      </Dashboard>
    </>
  );
}