
/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router';
import { Box, Typography, styled } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';

const CourseBox = ({ name, title, url, }) => {
	let navigate = useNavigate();

	const goToPage = (e) => {
		navigate(e)
	};

  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  })

	return (
    <Card
      sx={{
        borderRadius: '28px',
        boxShadow: '0px 0px 12px 14px rgba(57, 57, 57, 0.10)',
      }}
      onClick={() => goToPage(url)}
    >
      <CardActionArea>
        <CardContent
          sx={{
            width: {sm: '278px', xs: '250px'},
            height: {sm: '239px', xs: '200px'},
            padding: '0px 30px 40px 30px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Box
            component="img"
            src={"images/" + name}
            alt={title}
            sx={{
              width: "62px",
              margin: "auto",
              display: 'flex',
              justifyContent: 'center'
            }}
          />
          <Box>
            <Typography
              sx={{
                color: '#000',
                textAlign: 'center',
                fontSize: '15px',
                fontWeight: '600',
                letterSpacing: '-0.95px',
                textTransform: 'none',
              }}
            >{title}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center'}}>
            <Typography
              sx={{
                color: '#404040',
                textAlign: 'center',
                fontSize: '13px',
              }}
            >
              ENROLL NOW
            </Typography>
            <img src="/images/img_arrow5.svg" alt="arrow" width='13px' />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
	)
}

export default CourseBox;