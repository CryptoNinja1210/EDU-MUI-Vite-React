/* eslint-disable no-dupe-keys */
import Dashboard from '../../../components/dashboard/instructor'
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
        </Stack>
      </Dashboard>
    </>
  );
}