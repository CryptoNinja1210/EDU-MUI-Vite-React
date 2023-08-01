import { Box } from "@mui/material";
import Picture from "./picture";
import Typography from '@mui/material/Typography';

const dataes = [
  {
    name: 'Devon Lane',
    degree: 'Professor',
    description: "Nam eget faucibus felis. Vivamus quis enim lectus. Phasellus lusto mi ornare id venenatis ac, gravidased ante.",
    image: 'img_rectangle25.png'
  },
  {
    name: 'Devon Lane',
    degree: 'Professor',
    description: "Nam eget faucibus felis. Vivamus quis enim lectus. Phasellus lusto mi ornare id venenatis ac, gravidased ante.",
    image: 'img_rectangle26.png'
  },
  {
    name: 'Devon Lane',
    degree: 'Professor',
    description: "Nam eget faucibus felis. Vivamus quis enim lectus. Phasellus lusto mi ornare id venenatis ac, gravidased ante.",
    image: 'img_rectangle27.png'
  },
  {
    name: 'Devon Lane',
    degree: 'Professor',
    description: "Nam eget faucibus felis. Vivamus quis enim lectus. Phasellus lusto mi ornare id venenatis ac, gravidased ante.",
    image: 'img_rectangle28.png'
  }
]
export default function ourTeam () {
  return (
    <Box
      width= '100%'
      m= '55px 0px 84px'
      bgcolor= '#FCFAF5'
      boxShadow= '0px 0px 14px 7px rgba(135, 135, 135, 0.4)'
    >
      <Box>
        <Typography variant="h3"
          color='black'
          fontWeight={800}
          p= {{md: '105px 89px',xs:'20px'}}
          textAlign= {{md: 'start', xs:'center'}}
        >
          Our Team
        </Typography>
      </Box>
      <Box
        display='flex'
        flexWrap='wrap'
        overflow='hidden'
        justifyContent='center'
        alignItems= {{md: 'end', xs: 'center'}}
        alignSelf= {{md: 'end', xs: 'center'}}
        p= {{md:'0px 53px 125px 51px', xs: '0px 10px'}}
      >
        {dataes.map((data, i) =>(
          <Picture
            key={data.image + "_" + i}
            name={data.name}
            image={data.image}
            degree={data.degree}
            description={data.description}
          />
        ))}
      </Box>
    </Box>
  );
}