
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomButton = styled(IconButton)(() => ({
  padding: '10px',
  backgroundColor: 'black',
  '&:hover': {
    backgroundColor: '#3c3c3c',
  },
  color: 'white',
  borderRadius: '5px',
  width: {md:'138px', sm: 100, xs:80},
  height: '35px',
  fontSize: '15px'
}));

export default function CourseSignUp( props) {
  const { name } = props
  return (
    <Box
      sx={{
        mt: '39px',
        mb: '76px',
        width: '100%',
        height: {md: '459px', xs: '100%'},
        display: {md:'flex',xs: 'block'},
        flexDirection: { xs: 'column',  md: 'row' },
        overflow: 'hidden',
        background: 'linear-gradient(89.61deg, #C5933E 0.3%, #DEB972 99.66%)',
        boxShadow: '0px 0px 14px 7px rgba(135, 135, 135, 0.4)'
      }}
    >
      <Box
        // display= 'flex'
        // flexDirection= 'column'
        width= {{xs: '100%', md: '55%'}}
        alignSelf= {{xl: 'start', md: 'center' }}
        textAlign= {{ md: 'start',  xs: 'center' }}
        p= {{xl: '87px 54px 0px 73px',lg: '60px 30px',xs: '50px 20px'}}
      >
        <Typography
          fontSize= {{xl: 48, lg: 45, md:30, sm: 38, xs: 25}}
          fontWeight= {800}
        >
          Get special <span style={{color: 'white'}}>offers</span> <br />
          and course updates?
        </Typography>
        <Typography
          color= 'white'
          fontWeight= {500}
          fontSize={ {md: 22, sm: 28, xs: 20 }}
          p={{
              xl: '7px 150px 22px 0px',
              md: '6px 100px 20px 0px',
              xs: '10px 0px'
          }}
        >
          Lorem ipsum dolor sit amet. consectetur  adipiscino elit.
        </Typography>
        <Box
          display='flex'
          justifyContent={{md: 'start' ,xs: 'center'}}
        >
          <Paper
            component="form"
            sx={{
              p: '2px 6px',
              display: 'flex',
              borderRadius: '11px',
              border: 'solid black 2px',
              justifyContent: 'space-between',
              width: {lg:400 , sm: 350, xs: 270 },
              background: 'linear-gradient(89.61deg, #C5933E 0.3%, #DEB972 99.66%)',
            }}
          >
            <InputBase
              sx={{ ml: 1}}
              id='course_user_email_address'
              placeholder="Your Email Address"
            />
            <CustomButton type='button'>Sign Up</CustomButton>
          </Paper>
        </Box>
      </Box>
      <Box
        display= 'flex'
        alignSelf= 'end'
        height= {{md: '459px', xs: 'auto'}}
      >
        <Box
          component="img"
          height= '100%'
          alt="The house from the offer."
          src='images/img_untitled81.png'
          width= {{md: 'auto', xs: '100%'}}
        />
      </Box>
    </Box>
  );
}
