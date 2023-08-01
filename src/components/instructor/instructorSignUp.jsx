
import { Button } from '@mui/material';
import Box from '@mui/material/Box';

export default function InstructorSignUp ( ) {
  return (
    <>
      <Box
        sx={{
          width: '100wv',
          display: 'flex',
          height: {md: '459px', xs: 'auto'},
          boxShadow: '0px 0px 14px 7px rgba(135, 135, 135, 0.4)',
          background: 'linear-gradient(82.72deg, #01F681 0%, #01008A 100%)',
          flexDirection: { xs: 'column', sm: 'column', md: 'row', xl: 'row' },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '100%', lg: '60%', xl: '60%'},
            display: 'flex',
            flexDirection: 'column',
            alignSelf: {xl: 'start', xs: 'center'},
            p: {
              lg: '82px 0px 88px 71px',
              md: '52px 0px 60px 51px',
              xs: '50px 30px',
            }
          }}
        >
          <Box component="span"
            sx={{
              fontSize: {xl: '50', lg: '45px', sm: 33, xs: 25},
              fontWeight: 800,
              letterSpacing: '-1px',
              textAlign: {md: 'start', xs: 'center'}
            }}
          >
            Become an Edusafe <span style={{color: 'white'}}>instructor</span> in a few steps..
          </Box>
          <Box component="span"
          sx={{
              color: 'white',
              fontWeight: 500,
              fontSize: {lg: 22, sm: 20, xs: 18 },
              textAlign: {md: 'start', xs: 'center'},
              pt: '16px'
            }}
          >
            Make learning and teaching more effective with active participation and student collaboration
          </Box>
          <Box
            sx={{
                display: 'flex',
                justifyContent: {md: 'start', xs: 'center'}
              }}
            >
            <Button
              sx={{
                border: 'solid 1px',
                p: '10px',
                color: 'black',
                borderRadius: '5px',
                fontWeight: 700,
                width: '138px',
                height: '36px',
                fontSize: '24px' ,
                mt: '21px',
                textTransform: 'none',
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'end',
            alignSelf: 'end',
            overflow: 'visible',
            // zIndex: 5,
            ml: {md: '-160px', xs: 'auto'}

          }}
        >
          <Box
            component="img"
            zIndex={999}
            height= {{md: '562px', xs: 'auto'}}
            width= {{md: 'auto', xs: '100%'}}
            alt="The house from the offer."
            src='images/img_untitled161.png'
          />
        </Box>
      </Box>
    </>
  );
}
