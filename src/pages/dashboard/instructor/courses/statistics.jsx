/* eslint-disable no-dupe-keys */
import Dashboard from '../../../../components/dashboard/instructor'
import SubPannel from '../../../../components/common/subPannel'
import { Box, Stack } from '@mui/material';
import Statistics from '../../../../components/common/statistics';
import { useEffect } from 'react';




export default function App() {
  // useEffect(() => {
  // }, [])
  let pathname =(window.location.pathname);
  const url = pathname.slice(1)
  return (
    <>
      <Dashboard url={url}>
        <Stack
          justifyContent="center"
          alignItems="center"
          direction='row'
          useFlexGap flexWrap={{xs:"wrap", xl: 'nowrap'}}
          spacing={{ xs: 1 }}
        >
          <Stack alignItems="center" justifyContent={'center'}useFlexGap flexWrap="wrap">
            <SubPannel
              icon={<img src='/images/img_it1.png' style={{width: '100%'}} />}
              title='Sample New 1'
              url='/dashboard'
              buttonText='ENROLL NOW!'
            />
            <Statistics />
          </Stack><Stack alignItems="center" justifyContent={'center'}useFlexGap flexWrap="wrap">
            <SubPannel
              icon={<img src='/images/img_it1.png' style={{width: '100%'}} />}
              title='Sample New 1'
              url='/dashboard'
              buttonText='ENROLL NOW!'
            />
            <Statistics />
          </Stack><Stack alignItems="center" justifyContent={'center'}useFlexGap flexWrap="wrap">
            <SubPannel
              icon={<img src='/images/img_it1.png' style={{width: '100%'}} />}
              title='Sample New 1'
              url='/dashboard'
              buttonText='ENROLL NOW!'
            />
            <Statistics />
          </Stack>
        </Stack>
      </Dashboard>
    </>
  );
}

/* eslint-disable no-dupe-keys */
// import Dashboard from '../../../../components/dashboard/instructor'
// import SubPannel from '../../../../components/common/subPannel'
// import { Box, Grid, Stack } from '@mui/material';
// import Statistics from '../../../../components/common/statistics';




// export default function App() {

//   let pathname =(window.location.pathname);
//   const url = pathname.slice(1)
//   return (
//     <>
//       <Dashboard url={url}>
//         <Grid container columns={12}
//           justifyContent="center"
//           alignItems="center"
//           direction='row'
//           useFlexGap flexWrap="wrap"
//           // display={'flex'}
//           // flexDirection={{sm: 'row', xs: 'column'}}
//           spacing={2}
//           // justifyContent="center"
//           // alignItems="center"
//           // direction='row'
//           // spacing={{ xs: 1, sm: 2, md: 4 }}
//           // useFlexGap flexWrap="wrap"
//         >
//           <Grid item xs={12} sm={4}>
//             <Stack
//               justifyContent='center'
//               spacing={1}
//             >
//               <SubPannel
//                 icon={<img src='/images/img_it1.png' style={{width: '100%'}} />}
//                 title='Sample New 1'
//                 url='/dashboard'
//                 buttonText='ENROLL NOW!'
//               />
//               <Statistics />
//             </Stack>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <Stack
//               justifyContent='center'
//               spacing={1}
//             >
//               <SubPannel
//                 icon={<img src='/images/img_it1.png' style={{width: '100%'}} />}
//                 title='Sample New 1'
//                 url='/dashboard'
//                 buttonText='ENROLL NOW!'
//               />
//               <Statistics />
//             </Stack></Grid>
//           <Grid item xs={12} sm={4}>
//             <Stack
//               justifyContent='center'
//               spacing={1}
//             >
//               <SubPannel
//                 icon={<img src='/images/img_it1.png' style={{width: '100%'}} />}
//                 title='Sample New 1'
//                 url='/dashboard'
//                 buttonText='ENROLL NOW!'
//               />
//               <Statistics />
//             </Stack>
//           </Grid>
//         </Grid>
//       </Dashboard>
//     </>
//   );
// }