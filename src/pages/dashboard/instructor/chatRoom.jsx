/* eslint-disable no-dupe-keys */
import SubBox from '../../../components/common/subBox';
import Dashboard from '../../../components/dashboard/instructor'
import { Stack, Typography, } from '@mui/material';

// const NewPlus = () => {
//   return (
//     <Box sx={{
//       width: '50px',
//       height: '50px',
//     }}>
//       <img src='/images/img_group78.png' style={{width: '100%'}} />
//     </Box>
//   )
// }


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
          Chat Room
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
              icon={<img src='/images/img_settings.svg' style={{width: '57px'}} />}
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