import { Box, Button, Stack } from "@mui/material";
import InputBase from '@mui/material/InputBase';
import { Typography } from "@mui/material"
import { styled } from '@mui/material/styles';
import { green } from "@mui/material/colors";

//Subject button customization
const CustomButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(green[900]),
  backgroundColor: green[500],
  '&:hover': {
    backgroundColor: green[600],
  },
  borderRadius: '30.5px',
  py: '19px',
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
  height: '65px',
  borderRadius: '10px',
  background: '#F9FBFF',
  boxSizing: 'border-box',
  padding:'19px 43px',
  border: '5px solid #CAD0D8',
});

export default function StudentForm () {
  return (
    <Box
      sx={{
        mt: '72px',
        bgcolor: '#FCFAF5',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: {md: '1114px', xs: '941px'},
        boxShadow: '0px 0px 14px 7px rgba(135, 135, 135, 0.4)',
        p:  {md: '63px 320px 43px 314px '},
        mb: '90px',
      }}
    >
      <Box>
        <Box
          sx={{
            background: '#FFFFFF',
            boxSizing: "border-box",
            p: {md:'42px 92px 58px 92px', xs: '42px 20px'},
            width: {md: '644px', xs: '100%'},
            height: {sm: '941px', xs: 'auto'},
            boxShadow: '0px 0px 14px 7px rgba(0, 0, 0, 0.2)',
            '& label': {
              p: '3px 30px',
              fontWeight: 800,
            },
          }}
        >
          <Stack spacing={'19px'}>
            <Typography
              fontWeight= {800}
              fontSize= '30px'
              textAlign= 'center'
              mb= '50px'
            >
              STUDENT SIUNUP
            </Typography>
            <Box>
              <label>First Nmae</label>
              <CustomInput placeholder="First Nmae"/>
            </Box>
            <Box>
              <label>Last Name</label>
              <CustomInput placeholder="Last Name"/>
            </Box>
            <Box>
              <label>User Name</label>
              <CustomInput placeholder="User Name"/>
            </Box>
            <Box>
              <label>E-mail</label>
              <CustomInput placeholder="E-mail"/>
            </Box>
            <Box>
              <label>Password</label>
              <CustomInput placeholder="Password"/>
            </Box>
            <Box>
              <label>Password Confirmation</label>
              <CustomInput placeholder="Password Confirmation"/>
            </Box>
          </Stack>
          <Box
            m= 'auto'
            pt= '58px'
            display= 'flex'
            justifyContent= 'center'
          >
            <CustomButton > Subject</CustomButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}