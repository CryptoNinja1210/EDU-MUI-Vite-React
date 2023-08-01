import { Box } from "@mui/joy"
import { Typography } from "@mui/material"
import CourseBox from "./courseBox";
import Stack from '@mui/material/Stack';
export default function CoursesBoard () {

  const  courses = [
    {
      title :'Wild Fire Safety & Preventior',
      name: 'img_it1.png'
    },
    {
      title :'Fire Chemistry',
      name: 'img_health1.png'
    },
    {
      title :'Trafic Safety',
      name: 'img_language1.png'
    },
    {
      title :'Basic Home Fire Safety',
      name: 'img_english1.png'
    },
    {
      title :'Human RIghts Gender Euqality',
      name: 'img_personaldevelopment.png'
    },
    {
      title :'Human RIghts Gender Euqality',
      name: 'img_personaldevelopment.png'
    }
  ]

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        p: "41px 0 75px",
        position: 'relative',
        boxShadow: '0px 0px 14px 7px rgba(135, 135, 135, 0.4)',
        background: 'linear-gradient(90deg, #C5933E 36.70%, #DFBA73 100%)',
      }}
    >
      <Box
        sx= {{
          pl: {
            xl:"180px",
            lg:"50px",
            md:"50px",
            sm:"35px",
            xs:"35px"
          },
          display: "flex",
          width: '100%',
        }}
      >
        <Box
          sx={{
            width: '50%',
            display: 'flex',
            justifyContent: 'center',
            ml: {lg: 0, sm: '-30px', xs: "-25px"}
          }}
        >
          <Typography
            sx={{
              fontWeight: 800,
              flexDirection: "column",
              fontSize: {xl:'45px', md: '35px',sm: '25px', xs:'16px'},
              color: 'white',
              mb: '35px',
            }}
          >
            Feature Courses
          </Typography>
        </Box>
        <Box
          sx={{
            width: {lg:'79%', md: '68%', xs: '50%'},
            borderBottom: '1px solid white',
            height: {xl:'45px',lg: '35px ', md: '30px',sm: '21px', xs:'18px'},
            ml: '10px',
            mt: "-5px"
          }}
        >
          <Box sx={{
            fontSize: {xl: 45,lg: 35, md: 30,sm: 21, xs: 18},
            color: 'white',
            width: '100%',
            mt: {xl: '11px',lg: '9px', md: '7px', xs: '4px'},
            ml: '-5px'
          }}>
            &#x2022;
          </Box>
        </Box>
      </Box>
      <Stack
        spacing={{ xs: 1, sm: 2, md: 3 }}
        direction='row'
        useFlexGap
        flexWrap="wrap"
        sx={{
          justifyContent: {
            lg:'space-between',
            xs:'space-around'
          },
          m: {
            lg: "31px 171px 0",
            md: "31px 50px 0",
            xs: "auto"
          }
        }}
      >
        {courses.map((course,i) => (
          <CourseBox
            key={course.name + "_" + i}
            name={course.name}
            title={course.title}
            alt={course.title}
          />
        ))}
      </Stack>
    </Box>
  )
}