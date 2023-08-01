import { Box, Grid, Stack } from "@mui/material";
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
})

export default function Explore () {
  return (
    <Box
      mb= '50px'
      mt= '45px'
      width= '100%'
      bgcolor= '#FAFBF6'
      boxShadow= '0px 0px 14px 7px rgba(185, 185, 185, 0.4)'
    >
      <Grid container>
        <Grid item md={5} xs={12}  textAlign='center' display={"flex"}>
          <Img src="images/student.png" alt="student"/>
        </Grid>
        <Grid item xs={12} md={7} p={{md: '151px 29px', sm: '25px', xs: '45px 0px'}}>
          <Box p={1}>
            <Typography
              variant="h2"
              pr={{lg: '96px'}}
              fontWeight={700}
              textAlign={{md: 'start', xs: 'center'}}
            >
              A Faster Way For To Grow & Upskill
            </Typography>
            <Typography
              variant="h6"
              mb={{md: '46px'}}
              p={{lg: '0px 113px 10px 0px'}}
              fontWeight={700}
              textAlign={{md: 'start', xs: 'center'}}
            >
              Our range of solutions has something to offer all businesses and organizations. Whether you`re a non-profit or a commercial entity, we can tailor a plan for your needs.
            </Typography>
          </Box>
          <Stack
            direction={{lg:'row', md: 'column'}}
            justifyContent='space-around'
            spacing={{ md:1, xs: 2}}
            alignItems={'center'}
            display='flex'
            pr={{lg:'133px'}}
            sx={{
              "& button": {
                height: '45px',
                fontWeight: 700,
                borderRadius: '9px',
                textTransform: 'none',
              }
            }}
          >
            <Button
              sx={{
                color: 'white',
                width:  {lg:'191px', xs: '80%'},
                fontSize: '18px',
                background: 'linear-gradient(89.7deg, #BA8328 0.23%, #D5A340 99.74%)',
              }}
            >Contact Us</Button>
            <Button
              sx={{
                color: '#BB852A',
                width: {lg:'343px', xs: '80%'},
                border: '1.5px solid #000',
                fontSize: {sm: '18px', xs: '14px'},
              }}
            >Explore Alison For Business</Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}
