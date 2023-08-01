import { Box, styled, Rating, Stack, Typography, LinearProgress } from '@mui/material';

const Rate = styled(Rating) ({
  color: '#BA8327'
})

export default function Statistics () {
  return (
    <Box>
      <Typography
        py= '14px'
        fontSize={16}
        fontWeight={600}
      >
        Course Progress
      </Typography>
      <Typography
        fontSize={16}
        fontWeight={600}
        py="6px"
      >
        30/10
      </Typography>
      <Box
        py='5px'
        width="100%"
        color="#BA8327"
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
      <Box sx={{'& p': {fontSize: 14}}}>
        <Typography>
          You enrolled in this course on May 22, 2023
        </Typography>
        <Stack direction='row' pt='15px' justifyContent='space-between'>
          <Typography fontWeight={600} >Enrolled Students:</Typography>
          <Typography>100 Students</Typography>
        </Stack>
        <Stack direction='row' justifyContent='space-between'>
          <Typography fontWeight={600}>Active Students:</Typography>
          <Typography>0 Active Students</Typography>
        </Stack>
        <Stack direction='row' justifyContent='space-between'>
          <Typography fontWeight={600}>Ratings:</Typography>
          <Rate
            color='#BA8327'
            sx={{alignSelf: 'center'}}
            value={2}
          />
        </Stack>
        <Stack direction='row' justifyContent='space-between'>
          <Typography fontWeight={600}>Comments:</Typography>
          <Typography >0 Comments</Typography>
        </Stack>
      </Box>
    </Box>
  )
}