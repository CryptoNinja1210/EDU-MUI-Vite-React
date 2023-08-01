/* eslint-disable no-dupe-keys */
import Dashboard from '../../../components/dashboard/instructor'
import { Stack, Typography } from '@mui/material';

export default function App() {
  const pathname =(window.location.pathname);
  const url = pathname.slice(1)
  return (
    <>
      <Dashboard url={url}>
        <Stack
          useFlexGap flexWrap="wrap"
        >
          <Typography
            fontSize={22}
            fontWeight={700}
          >
            My Announcements
          </Typography>
          <img
            src='/images/img_pngtreeannouncement.png'
            alt='announcement' width='242px'
          />
          <Typography
            fontSize={22}
            fontWeight={700}
            py='20px'
          >
            My Announcements 01
          </Typography>
          <Typography
            py='9px'
            fontSize={25}
            fontWeight={700}
          >
            Course Action:
          </Typography>
          <Typography
            fontSize={18}
            fontWeight={500}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          </Typography>
        </Stack>
      </Dashboard>
    </>
  );
}