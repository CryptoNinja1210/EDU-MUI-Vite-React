
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomPaper = styled(Paper)({
  padding: '2px 6px',
  display: 'flex',
  borderRadius: '11px',
  border: 'solid black 2px',
  justifyContent: 'space-between',
  width: {md:400 , sm: 350, xs: 270 },
  background: 'linear-gradient(89.61deg, #C5933E 0.3%, #DEB972 99.66%)',
});

const CustomButton = styled(IconButton)({
  backgroundColor: 'black',
  '&:hover': {
    backgroundColor: '#3c3c3e',
  },
  color: 'white',
  borderRadius: '5px',
  width: {md:'138px', sm: 100, xs:80},
  height: '35px',
  fontSize: '15px',
})


export default function Touch () {
  return (
    <Box
      sx={{
        width: '100%',
        height: {lg: '459px',md: '400px', xs: 'auto'},
        display: {md:'flex',xs: 'block'},
        flexDirection: { xs: 'column',  md: 'row' },
        m: '39px 0px',
        background: 'linear-gradient(89.61deg, #C5933E 0.3%, #DEB972 99.66%)',
        boxShadow: '0px 0px 14px 7px rgba(135, 135, 135, 0.4)',
        overflow: 'visible',
      }}
    >
      <Box
        sx={{
          textAlign: { md: 'start',  xs: 'center' },
          width: {xs: '100%', md: '50%'},
          display: 'flex',
          flexDirection: 'column',
          p: {
              lg: '46px 15px 0px 71px ',
              md: '30px 0px 0px 31px ',
              xs: '30px'
            },
        }}
      >
        <Typography
          fontWeight= {800}
          fontSize= {{xl: 48, lg: 40, md:30, sm: 30, xs: 24}}
        >
          Get in <span style={{color: 'white'}}>touch</span> with us
          We are always open
          24/7 for you.
        </Typography>
        <Typography
          variant='h6'
          color= 'white'
          fontWeight= {500}
        >
          Make learning and teaching more effective with
          active participation and student collaboration
        </Typography>
        <Box
          mt= '16px'
          display= 'flex'
          justifyContent= {{md: 'start' ,xs: 'center'}}
        >
          <CustomPaper component="form">
            <InputBase
              sx={{ ml: 1}}
              id='user_email_address'
              placeholder="Your Email Address"
            />
            <CustomButton type="button">
              Sign Up
            </CustomButton>
          </CustomPaper>
        </Box>
      </Box>
      <Box
        alignSelf= 'end'
        display= 'flex'
        ml= {{md:'-90px', xs: 0}}
        width= {{ xs: '100%', md: '50%',}}
        zIndex={99}
      >
        <Box
          component="img"
          mb= '-13px'
          height= {{lg: '517px', md: '459px'}}
          width= {{md: 'auto', xs: '100%'}}
          alt="The house from the offer."
          src='images/img_untitled141.png'
        />
      </Box>
    </Box>
  );
}
