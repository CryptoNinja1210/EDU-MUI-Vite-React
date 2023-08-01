/* eslint-disable no-dupe-keys */
import Dashboard from '../../../components/dashboard/student'
import SubPannel from '../../../components/common/subPannel'
import { Stack, Typography } from '@mui/material';
import { AddCircle } from '@mui/icons-material'

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
            icon={<img src='/images/img_11.png' style={{width: '100%'}} />}
            title='Enrolled Courses'
            url='/dashboard'
          />
          <SubPannel
            icon={<img src='/images/img_health1.png' style={{width: '100%'}} />}
            title='Active Courses'
            url='/dashboard'
          />
          <SubPannel
            icon={<img src='/images/img_language1.png' style={{width: '100%'}} />}
            title='Completed Courses'
            url='/dashboard'
          />
          <SubPannel
            icon={<AddCircle sx={{color: '#C4933B', fontSize: '36px'}} />}
            title='Add New Course'
            url='/dashboard'
          />
          <SubPannel
            icon={<img src='/images/img_61602002.png' style={{width: '100%'}} />}
            title='Buy Course'
            url='/dashboard'
          />
          <SubPannel
            icon={<Typography sx={{color: '#C4933B', fontFamily: 'Trebuchet MS', fontSize: '40px'}}>6</Typography>}
            title='Total Courses'
            url='/dashboard'
          />
          <SubPannel
            icon={<AddCircle sx={{color: '#C4933B', fontSize: '36px'}} />}
            title='Add New Course'
            url='/dashboard'
          />
          <SubPannel
            icon={<AddCircle sx={{color: '#C4933B', fontSize: '36px'}} />}
            title='New Features'
            url='/dashboard'
          />
          <SubPannel
            icon={<AddCircle sx={{color: '#C4933B', fontSize: '36px'}} />}
            title='New Features'
            url='/dashboard'
          />
        </Stack>
      </Dashboard>
    </>
  );
}