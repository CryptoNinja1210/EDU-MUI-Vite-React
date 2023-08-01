
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { Typography } from "@mui/material"
import { styled } from '@mui/material/styles';

const CustomButton = styled(IconButton)(() => ({
  padding: '9px',
  color: 'white',
  height: '35px',
  fontSize: '15px',
  backgroundColor: 'black',
  borderRadius: '5px',
  '&:hover': {backgroundColor: '#3c3c3c'},
  width: {md:'138px', sm: 100, xs:80},
}));

export default function SpecialOffer ( ) {
  return (
    <Box
      sx={{
        mb: '57px',
        boxSizing: 'border-box',
        height: {md:'459px', xs: 'auto'},
        display: {md:'flex',xs: 'block'},
        flexDirection: { xs: 'column', md: 'row'},
        boxShadow: '0px 0px 14px 7px rgba(135, 135, 135, 0.4)',
        background: 'linear-gradient(89.61deg, #C5933E 0.3%, #DEB972 99.66%)',
        p: {lg: '31px 64px 20px 77px', md: '31px 40px 20px 50px', xs: '31px 34px 20px 30px'} ,
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', md: '60%', },
          display: 'flex',
          flexDirection: 'column',
          pt: {xl: "80px", lg: '20px', md: '15px', xs: "10px"},
          alignSelf: {xl: 'start', xs: 'center'},
        }}
      >
        <Typography
          sx={{
            textAlign: {md: 'start',xs: 'center'},
            fontSize: {lg: 50, md:40, sm: 40, xs: 25},
            fontWeight: 800,
          }}
        >
          Get special <span style={{color: 'white'}}>offers</span> <br/> and course updates?
        </Typography>
        <Typography
          sx={{
            textAlign: {md: 'start',xs: 'center'},
            color: 'white',
            fontWeight: 500,
            fontSize: {md: '22px', sm: '20px', xs: '16px'},
          }}
        >
          Lorem ipsum dolor sit amet. consectetur  adipiscino elit.
        </Typography>
        <Box
          sx={{
            mt: 5,
            display: 'flex',
            justifyContent: {md: 'start' ,xs: 'center'}
          }}
        >
          <Paper
            component="form"
            sx={{
              p: '2px 6px',
              display: 'flex',
              borderRadius: '11px',
              border: 'solid black 2px',
              justifyContent: 'space-between',
              width: {md:400 , sm: 350, xs: 270 },
              background: 'linear-gradient(89.61deg, #C5933E 0.3%, #DEB972 99.66%)',
            }}
          >
            <InputBase id='first_email_address' placeholder="Your Email Address"/>
            <CustomButton>Sign Up</CustomButton>
          </Paper>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems:  'center',
          width:{ md:'40%', sm:'60%', xs: '60%'},
          height: {md: '501px'},
          m: {md:0, xs: '25px auto' },
        }}
      >
        <Box
          component="img"
          width= '100%'
          alt="The house from the offer."
          src='images/computer.png'
        />
      </Box>
    </Box>
  );
}
