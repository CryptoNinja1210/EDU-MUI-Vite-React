import * as React from 'react';
import Stack from '@mui/joy/Stack';
import LinearProgress from '@mui/joy/LinearProgress';

export default function LinearProgressDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Stack sx={{ flex: 50 }}>
      <Typography></Typography>
      <LinearProgress varient='solid' sx={{color: '#BA8327'}} determinate value={25} />
    </Stack>
  );
}