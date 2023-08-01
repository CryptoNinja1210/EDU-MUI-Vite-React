import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';

export default function Section () {
  return (
    <Box
      flexDirection= {{
        md: 'row',
        xs: 'column',
      }}
      color= 'white'
      textAlign= {{
        md:'start',
        xs: 'center'
      }}
      width= '100%'
      display= 'flex'
      m='55px 0px 76px 0px'
      alignItems=  'stretch'
      boxShadow= '0px 0px 14px 7px rgba(135, 135, 135, 0.4)'
    >
      <Box
        p= {{md: '70px 59px', xs: '15px'}}
        width= {{md: '50%', xs: '100%' }}
        sx={{background: 'linear-gradient(87deg, #C5933E 0%, #DEB972 100%)'}}
      >
        <Typography
          variant="h3"
          letterSpacing={-0.2}
          fontWeight= {800}
        >
          <span style={{color: 'black'}}>Our</span> Background
        </Typography>
        <Typography
          mt= '13px'
          variant="h6"
          fontWeight= {600}
        >
          Nam eget faucibus felis. Vivamus quis enim lectus. Phasellus justo mi, ornare i d venenatis ac, gravida sed ante. Fusce
          eget nisl id nisi tempus blandit. Integer ipsum massa, fermentum id ipsum aliquet, tempus sagittis odio. Pellente
          sque maximus turpis at eros accumsan.
        </Typography>
      </Box>
      <Box
        bgcolor='black'
        width= {{md: '50%',xs: '100%'}}
        p={{md: '70px 59px',xs: '15px'}}
      >
        <Typography variant="h3" fontWeight= {800}>
          Mission & Vision
        </Typography>
        <Typography variant="h6" fontWeight= {600} mt= '13px'>
          Nam eget faucibus felis. Vivamus quis enim lectus. Phasellus justo mi, ornare i d venenatis ac, gravida sed ante. Fusce
          eget nisl id nisi tempus blandit. Integer ipsum massa, fermentum id ipsum aliquet, tempus sagittis odio. Pellente
          sque maximus turpis at eros accumsan.
        </Typography>
      </Box>
    </Box>
  );
}