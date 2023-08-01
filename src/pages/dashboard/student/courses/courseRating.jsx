/* eslint-disable no-dupe-keys */
import Dashboard from '../../../../components/dashboard/student';
import CourseProgress from '../../../../components/common/courseProgress';
import SubPannel from '../../../../components/common/subPannel'
import { Box, Stack } from '@mui/material';

export default function App() {

  const pathname =(window.location.pathname);
  const url = pathname.slice(1)
  return (
    <>
      <Dashboard url={url}>
        <Box
          display='flex'
          justifyContent='space-around'
          alignItems="start"
          flexWrap={{xl:'nowrap', xs: 'wrap'}}
          // useFlexGap
        >
          <SubPannel
            icon={<img src='/images/img_it1.png' style={{width: '100%'}} />}
            title='Wild Fire Safety & Prevention'
            url='/dashboard'
            buttonText='ENROLL NOW!'
          />
          <CourseProgress/>
        </Box>
      </Dashboard>
    </>
  );
}