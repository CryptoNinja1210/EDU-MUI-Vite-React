/* eslint-disable no-dupe-keys */
import ReviewItem from '../../../components/common/review';
import Dashboard from '../../../components/dashboard/student'
import { Box, Stack, Typography, } from '@mui/material';

const reviews = [
  {
    title: 'course1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
  },
  {
    title: 'course2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
  },
  {
    title: 'course3',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
  },
  {
    title: 'course4',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
  },
]

export default function App() {
  const pathname =(window.location.pathname);
  const url = pathname.slice(1)
  return (
    <>
      <Dashboard url={url}>
        <Box
          bgcolor= '#fff'
          my= {{md: '-25px', xs: 0  }}
          py= '25px'
          px= {{md:'50px', xs: '20px'}}
          borderRadius= '28px'
        >
          <Box>
            <Typography
              fontSize= '16px'
              fontWeight= {600}
              letterSpacing= '-0.72px'
              py= '15px'
            >Courses Reviews
            </Typography>
          </Box>
          <Stack
            bgcolor="paper"
            direction='column'
            spacing= {{xl: '16.77px', lg: '15px'}}
            useFlexGap flexWrap="wrap"
            width={{md: '70%', xs: '100%'}}
          >
            {reviews.map((x, i) => (
              <ReviewItem
                key={x.title + '_' + i}
                title={x.title}
                content={x.content}
              />
            ))}
          </Stack>
        </Box>
      </Dashboard>
    </>
  );
}