/* eslint-disable no-dupe-keys */
import { Box, Stack, Typography, styled } from '@mui/material';
import Rating from '@mui/material/Rating';

export default function ReviewItem (prop) {

  const Rate = styled(Rating)({
    color: '#C6963F',
  })

  const {title, content} = prop
  return (
    <Box
      sx={{
        bgcolor: '#fff',
      }}
    >
      <Typography
        fontSize= '16px'
        fontWeight= {600}
        letterSpacing= '-0.72px'
        py= '5px'
      >{title}
      </Typography>
      <Box>
        <Typography
          fontSize= '14px'
          letterSpacing= '-0.28px'
        >{content}
        </Typography>
        <Rate
          size='small'
          value={3}
          sx={{
            mt: '3px',
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'relative',
            // top: '-20px',
          }}
        />
      </Box>
    </Box>
  )
}