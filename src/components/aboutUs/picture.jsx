import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';

export default function Picture (prop) {
  const {image, description, name, degree } = prop
  return (
    <Box
      width= {{
        md:'50%',
        xs: '100%'
      }}
      alignItems= {{
        md: 'end',
        xs: 'center'
      }}
      display='flex'
      alignSelf='end'
      flexWrap="wrap"
      p='5px'
      mb='4em'
    >
      <Box
        m='auto'
        width= {{ md: '55%',sm: "70%",xs: '80%'}}
      >
        <Box
          component="img"
          src={`images/`+image}
          width= '100%'
          boxShadow= '0px 0px 12px rgba(0, 0, 0, 0.25)'
        />
      </Box>
      <Box
        width= {{
          md: '45%',
          xs: '100%'
        }}
        pl= {{
          md: "15px",
          xs: 0
        }}
        textAlign= {{
          md: 'start',
          xs: 'center'
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          {name}
        </Typography>
        <Typography
          variant="h6"
          fontWeight={600}
          width='fit-content'
          borderBottom='solid 1px'
          margin= {{md: 0, xs:'auto'}}
        > {degree}</Typography>
        <Typography
          fontWeight={600}
          alignItems='end'
          fontSize={{lg: '18px', md: '12px', sm: '18px'}}
        >{description} </Typography>
      </Box>
    </Box>
  )
}