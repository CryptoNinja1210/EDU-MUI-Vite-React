import { styled } from '@mui/material/styles';
import { Box, Button, Stack } from "@mui/material";
import {Typography} from '@mui/material';
import InputBase from '@mui/material/InputBase';
import { green } from '@mui/material/colors';

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


const dataes = [
  {
    title: 'Call Us',
    tel1: "TEl: +82-10-4287-7896",
    tel2: 'TEl: +256-701-4780-2016'
  },
  {
    title: 'Email Us',
    tel1: "Email 1: info@edusafeafrica.com",
    tel2: 'Email 2. support@edusafeafrica.com'
  },
  {
    title: 'Call us',
    tel1: "TEl: +82-10-4287-7897",
    tel2: 'TEl: +256-701-4780-2018'
  },
]

export default function ContactForm () {
  return (
    <Box
      mb= '58px'
      mt= '85px'
      width= '100%'
      bgcolor= '#FCFAF5'
      display= {{md:'flex', xs: 'block'}}
      boxShadow= '0px 0px 14px 7px rgba(135, 135, 135, 0.4)'
      padding= {{lg: '107px 70px 70px 70px ', md:"70px 30px", sm: "60px 20px"  }}
    >
      <Box width= {{ md: '40%',  xs: '100%'}} textAlign= {{sm: 'start', xs: 'center'}}>
        {dataes.map((data, i) => (
          <Box key = {data.tel1+i}>
            <Typography
              py= "20px"
              color= 'black'
              fontWeight= {800}
              fontSize= {{lg:45, md: 36, sm: 34, xs: 25}}
            > {data.title}
            </Typography>
            <Typography fontWeight={500} variant="h6">{data.tel1} </Typography>
            <Typography fontWeight={500} variant="h6">{data.tel2}</Typography>
          </Box>
        ))}
        <Box pb={5}>
          <Typography
            py= "20px"
            color= 'black'
            fontWeight= {800}
            fontSize= {{lg:45, md: 36, sm: 34, xs: 25}}
          > Visit us
          </Typography>
          <Box sx={{"& p":{fontWeight: 500} }}>
            <Typography variant="h6">34 Mutungo-Bina Street</Typography>
            <Typography variant="h6">Church Lane</Typography>
            <Typography variant="h6">Kampala-Uganda </Typography>
          </Box>
        </Box>
      </Box>
      <Box width= {{md:'60%', xs: '100%'}}>
        <Box
          height= 'auto'
          bgcolor= '#FFFFFF'
          boxShadow= '0px 0px 14px 7px rgba(0, 0, 0, 0.2)'
          p= {{lg:'40px 89px 54px 98px', md: "40px", sm: '30px', xs: "25px 35px"}}
          sx={{
            '& label': {
              p: '3px 30px',
              fontWeight: 800,
            },
          }}
        >
          <Stack spacing='17px'>
            <Typography
              fontWeight= {800}
              fontSize= {30}
              textAlign= 'center'
            >
              Get in touch
            </Typography>
            <Box>
              <label> Name</label>
              <CustomInput id='user_name' placeholder="Name"/>
            </Box>
            <Box>
              <label> Email</label>
              <CustomInput id='user_email' placeholder="Email"/>
            </Box>
            <Box>
              <label> Subject</label>
              <CustomInput id='user_subject' placeholder="Subject" />
            </Box>
            <Box>
              <label> Message</label>
              <InputBase
                id='user_message'
                multiline
                rows={4}
                variant="filled"
                placeholder="Message"
                sx={{
                  width: '100%',
                  height: '124px',
                  border: '5px solid #CAD0D8',
                  borderRadius: '10px',
                  background: '#F9FBFF',
                  boxSizing: 'border-box',
                  p:'19px 43px'
                }}
              />
            </Box>
          </Stack>
          <Box
            py= '54px'
            display= 'flex'
            justifyContent= 'center'
          >
            <CustomButton>Subject
              <img style={{paddingLeft:'10px'}} width ='25px' src="images/img_arrow2.svg" />
            </CustomButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}