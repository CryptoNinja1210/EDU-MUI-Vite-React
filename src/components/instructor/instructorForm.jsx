import { Box, Button, Stack } from "@mui/material";
import InputBase from '@mui/material/InputBase';
import { green } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

//Subject button customization
const CustomButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(green[900]),
  backgroundColor: green[500],
  '&:hover': {
    backgroundColor: green[600],
  },
  borderRadius: '30.5px',
  padding: '19px 0px',
  width: '226px',
  height: '61px',
  alignContent: 'center',
  fontSize: '15px',
  fontWeight: 800,
  textTransform: 'none',
}));

// input tag customization
const CustomInput = styled(InputBase)({
  width: '100%',
  height: '61px',
  border: '5px solid #CAD0D8',
  borderRadius: '10px',
  background: '#F9FBFF',
  boxSizing: 'border-box',
  padding:'19px 43px'
});

export default function InstructorForm () {
  return (
    <Box
      width= '100%'
      display= 'flex'
      bgcolor= {{md: '#FCFAF5', xs:'white' }}
      m= '76px 0px 58px'
      boxSizing= 'border-box'
      justifyContent= 'center'
      height= {{md: 'auto', xs: '898px'}}
      p= {{md: '84px 320px 65px 314px ' , xs: 0}}
      boxShadow= '0px 0px 14px 7px rgba(135, 135, 135, 0.4)'
    >
      <Box>
        <Stack spacing={'19px'}
          height= '898px'
          background= '#FFFFFF'
          width= {{md: '644px', sm: '100%'}}
          p= {{md: '45px 92px 84px 92px', xs: '45px 60px'}}
          boxShadow= '0px 0px 14px 7px rgba(0, 0, 0, 0.2)'
          sx={{'& label': { padding: '3px 30px', fontWeight: 800}}}
        >
          <Box>
            <label>Fisrt Nmae</label>
            <CustomInput id="ins_firstname" placeholder="Fisrt Nmae"/>
          </Box>
          <Box>
            <label>Last Name</label>
            <CustomInput id="ins_lastname" placeholder="Last Name"/>
          </Box>
          <Box>
            <label>User Name</label>
            <CustomInput id="ins_username" placeholder="User Name"/>
          </Box>
          <Box>
            <label>E-mail</label>
            <CustomInput id="ins_email" placeholder="E-mail"/>
          </Box>
          <Box>
            <label>Password</label>
            <CustomInput id="ins_password" placeholder="Password"/>
          </Box>
          <Box>
            <label>Password Confirmation</label>
            <CustomInput id="ins_password_confirm" placeholder="Password Confirmation"/>
          </Box>
          <Box pt= '76px' display= 'flex' justifyContent= 'center'>
            <CustomButton> Subject </CustomButton>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}