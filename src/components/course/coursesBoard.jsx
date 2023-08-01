/* eslint-disable no-dupe-keys */
import { Box } from "@mui/joy"
import { Typography } from "@mui/material"
import CoursesBox from './coursesBox';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function CoursesBoard (props) {

  const {color,} = props
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
        boxShadow: '0px 0px 14px 7px rgba(135, 135, 135, 0.4)',
        background: '#FCFAF5',
        p: "107px 0 156px",
        width: "100%",
        mb: '86px'
      }}
    >
      <Box
        width= '100%'
        display= "flex"
        pl= {{xl:"88px", xs:"35px"}}
      >
        <Box
          width= '50%'
          display= 'flex'
          ml= {{lg: 0, sm: '-30px', xs: "-25px"}}
          justifyContent= {{lg: 'space-between', xs: 'center'}}
        >
        <Typography
          mb= '35px'
          pl= '36px'
          color= {color}
          fontWeight= {800}
          flexDirection= "column"
          fontSize= {{xl:'45px',lg: '35px ', md: '30px',sm: '21px', xs:'18px'}}
        >
          Feature Courses
        </Typography>
      </Box>
      <Box
        ml= '10px'
        mt= "-5px"
        width = '40%'
        borderBottom = '1px solid black'
        height= {{xl:'45px',lg: '35px ', md: '30px',sm: '21px', xs:'18px'}}
      >
      </Box>
      <Box
        p={{
          xl:'25px 266px 0px 5px',
          lg: '15px 200px 0px 5px',
          md: '10px 66px 0px 5px',
          xs: '8px 16px 0px 5px'
        }}
        pl= '5px'
        fontWeight={600}
        fontSize= {{md: '19px',xs: '12px'}}
      >
        <span>PRICE</span>
      </Box>
    </Box>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'end',
        flexShrink: 0,
        mt: '-30px',
        "& button": {
          bgcolor: 'black',
          '&:hover': {
            bgcolor: '#3c3c3c',
          },
          color: 'white',
          width: '29px',
          height: '16px',
          fontSize: '11px',
          fontWeight: 500,
          textTransform: 'none',
        }
      }}
    >
      <Button sx={{mr: '12px'}}> Free</Button>
      <Button sx={{ mr: {xl: '121px', xs: '50px'} }}> Paid</Button>
    </Box>
    <Stack
      spacing={{
        lg:'55px',
        md: '30px',
        xs: '20px'
      }}
      direction='row'
      useFlexGap
      flexWrap="wrap"
      sx={{
        justifyContent: {
          xl:'space-between',
          xs:'space-around'
        },
       m: {
          lg: "31px 74px 0",
          xs: "20px 30px 0"
        }
      }}
    >
      {courses.map((course,i) => (
        <CoursesBox
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