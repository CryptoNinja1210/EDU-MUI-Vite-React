/* eslint-disable no-dupe-keys */
import Dashboard from '../../components/dashboard/admin'
import { Stack, Typography, } from '@mui/material';
import SubBox from '../../components/common/subBox';

export default function App() {
  const pathname =(window.location.pathname);
  const url = pathname.slice(1)
  return (
    <>
      <Dashboard url={url}>
        <Typography
          fontSize='22px'
          fontWeight={600}
          pb={'40px'}
        >
          Dashboard
        </Typography>
        <Stack
          justifyContent="center"
          alignItems="center"
          direction='row'
          spacing={{ xs: 3, sm: 6, md: 9 }}
          useFlexGap
          flexWrap="wrap"
        >
          <SubBox
            icon={<img src='/images/img_clock.svg' style={{width: '39px'}} />}
            title='My profile'
            url='/dashboard'
            bContent={1}
            bColor='warning'
          />
          <SubBox
            icon={<img src='/images/img_12126477book.png' style={{width: '58px'}} />}
            title='My profile'
            url='/dashboard'
            bContent={50}
            bColor='primary'
          />
          <SubBox
            icon={<img src='/images/img_5195192045cha.png' style={{width: '66px'}} />}
            title='My profile'
            url='/dashboard'
            bContent={20}
            bColor='success'
          />
          <SubBox
            icon={<img src='/images/img_clock.svg' style={{width: '39px'}} />}
            title='My profile'
            url='/dashboard'
            bContent={1}
            bColor='warning'
          />
          <SubBox
              icon={<img src='/images/img_6843077bankbu.svg' style={{width: '57px'}} />}
              title='My profile'
              url='/dashboard'
              bContent={8}
              bColor='primary'
            />
           <SubBox
            icon={<img src='/images/img_6843044busines.svg' style={{width: '59px'}} />}
            title='My profile'
            url='/dashboard'
            bContent={0}
            bColor='success'
          />
        </Stack>
      </Dashboard>
    </>
  );
}