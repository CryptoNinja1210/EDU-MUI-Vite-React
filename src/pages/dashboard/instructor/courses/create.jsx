/* eslint-disable no-dupe-keys */
import Dashboard from '../../../../components/dashboard/instructor'
import SubPannel from '../../../../components/common/subPannel'
import { Box, Stack } from '@mui/material';

const NewPlus = () => {
  return (
    <Box sx={{
      width: '50px',
      height: '50px',
    }}>
      <img src='/images/img_group78.png' style={{width: '100%'}} />
    </Box>
  )
}

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
            title='Wild Fire Safety & Preventior'
            url='/dashboard'
            buttonText='ENROLL NOW!'
            badge={<NewPlus />}
          />
        </Stack>
      </Dashboard>
    </>
  );
}