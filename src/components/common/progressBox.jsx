import { Box, Card, CardContent, Typography, } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

// const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({

//   height: '11px',
//   width: '227px',
//   borderRadius: 5,
//   [`&.${linearProgressClasses.colorPrimary}`]: {
//     backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
//   },
//   [`& .${linearProgressClasses.bar}`]: {
//     borderRadius: 5,
//     backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
//   },
// }));

export default function ProgressBox () {
  return (
    <Card
      sx={{
        height: '198px',
        borderRadius: '2em',
        bgcolor: '#FFFF',
        boxShadow: 'none',
        '& p': {
          fontSize: 16,
        }
      }}
    >
      <CardContent>
        <Typography
          py= '18px'
          fontWeight= {600}
          letterSpacing= "-0.72px"
        >
          Progress
        </Typography>
        <Typography
          fontWeight= {600}
          letterSpacing= "-0.72px"
        >
          80% Complete
        </Typography>
        <Box
          py='11px'
          color='#BA8327'
          width='80%'
        >
          <LinearProgress
            color='inherit'
            variant="determinate"
            value={80}
            sx={{
              borderRadius: 5,
              p: '5px'
            }}
          />
          </Box>
        <Typography
          fontWeight= {300}
          letterSpacing= "-0.32px"
        >
        You enrolled in this course on May 22, 2023
        </Typography>
      </CardContent>
    </Card>
  )
}