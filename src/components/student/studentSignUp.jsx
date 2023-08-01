
import Box from '@mui/material/Box';
import { Stack, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)(( ) => ({
  border: 'solid 1px',
  textTransform: 'none',
  padding: '10px',
  color: 'black',
  borderRadius: '5px',
  fontWeight: 700,
  width: '138px',
  height: '36px',
  fontSize: '24px' ,
  marginTop: '16px',
}));

export default function StudentSignUp () {
  return (
    <Stack flexDirection={{md: 'row'}}
      sx={{
        width: '100%',
        m: '39px 0px',
        height: {lg: '459px',xs: 'auto'},
        boxShadow: '0px 0px 14px 7px rgba(135, 135, 135, 0.40)',
        background: 'linear-gradient(90deg, #C4933B 0%, #E1BF79 100%)',
      }}
    >
      <Stack
        width= {{xs: '100%', md: '50%'}}
        alignSelf= {{xl: 'none', xs: 'center',}}
        textAlign= {{ md: 'start',  xs: 'center' }}
        p= {{
          lg: '82px 0px 0px 71px ',
          md: '50px 0px 0px 41px ',
          xs: '30px 15px'
        }}
      >
        <Typography
          variant='h3'
          fontWeight= {800}
          letterSpacing= '-1px'
          pb="16px"
        >
          Become an Edusafe <br/>
          <span style={{color: 'white'}}> Student</span> in a few steps..
        </Typography>
        <Typography
          variant='h6'
          color= 'white'
          fontWeight= {500}
          pr= {{lg: '87px', xs: 0}}
        >
          Make learning and teaching more effective with
          active participation and student collaboration
        </Typography>
          <Box
            display= 'flex'
            pb= {{md: '82px', xs: 0}}
            justifyContent= {{md: 'start', xs: 'center'}}
          >
            <CustomButton>Sign Up</CustomButton>
          </Box>
      </Stack>
      <Box
        alignSelf= 'end'
        width= {{ xs: '70%', md: '45%',}}
        m= {{md: '0px 0px -10px -50px', xs: 'auto'}}
        zIndex={99}
      >
        <Box
          component="img"
          mb= {{md: 0, xs:'-10px'}}
          height= {{lg: '567px', md: '459px'}}
          width= {{md: 'auto', xs: '100%'}}
          alt="The house from the offer."
          src='images/img_untitled171.png'
        />
      </Box>
    </Stack>
  );
}
