import { Box, Card, CardContent, Rating, Stack, Typography, Button, LinearProgress } from '@mui/material';

export default function CourseProgress () {
  return (
    <Card
      sx={{
        mt: {xl: 0, xs: '20px'},
        ml: {xl: '30px', xs: 0},
        boxShadow: 0,
        borderRadius: '28px',
        width: '100%',
        '& p': {fontSize: 16}
      }}
    >
      <CardContent>
        <Typography
          py= '14px'
          fontWeight= {600}
        >
          Course Progress
        </Typography>
        <Stack
          width='50%'
          direction='row'
          justifyContent={'space-between'}
        >
          <Typography fontWeight= {600}>
            30/10
          </Typography>
          <Typography fontWeight= {600}>
            0% Complete
          </Typography>
        </Stack>
        <Box
          py= '5px'
          width='50%'
          color= '#BA8327'
        >
          <LinearProgress
            color='inherit'
            variant='determinate'
            value={30}
            sx={{
              bgcolor: 'black',
              borderRadius: 5
            }}
          />
        </Box>
        <Typography>
          You enrolled in this course on May 22, 2023
        </Typography>
        <Typography py= '20px' fontWeight= {600}>
          A course by
        </Typography>
        <span>EdusafeAfrica</span>
        <Typography fontWeight= {600}>
          Course Description:
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio.
        </Typography>
        <Stack direction={{sm: 'row', xs: 'column'}} justifyContent='flex-start'>
          <Typography py= '34px' fontWeight= {600}>
            Comment/Rate Course
          </Typography>
          <Rating sx={{alignSelf: 'center'}} value={2}/>
        </Stack>
        <Box mb='34px' borderBottom='1px dashed black'></Box>
        <Button
          sx={{
            width: '152.7px',
            height: '36.5px',
            fontSize: '15px',
            fontWeight: '700',
            alignItmem: 'center',
            background: 'linear-gradient(89.7deg, #BA8328 0.23%, #D5A340 99.74%)',
            borderRadius: '9px',
            color: 'white',
            textTransform: 'none',
            my: '2rem'
          }}
        >Buy Course!
        </Button>
      </CardContent>
    </Card>
  )
}