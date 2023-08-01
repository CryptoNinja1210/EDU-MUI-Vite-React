// import { Box } from "@mui/joy"
// import { Typography } from "@mui/material"

// export default function ImageBox (prop) {
//   const {title, name }= prop

//   return (
//    <>
//   <Box
//     sx={{
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: 'center',
//       width: '326px',
//       height: '280px',
//       p: '35px',
//       boxShadow: 2,
//       bgcolor: 'white',
//       borderRadius: '2em',
//       filter: 'drop-shadow(0px 0px 14px rgba(0, 0, 0, 0.4))'
//     }}
//   >
//     <Box
//       component="img"
//       alt="icon"
//       src={"images/" + name}
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         flexShrink: 0,
//         height:"auto",
//         width: "62px",
//         margin: "auto"
//       }}
//     />
//     <Typography
//       sx={{
//         margin: "auto",
//         fontWeight: 800,
//         fontSize: "17px",
//         textAlign: "center",
//       }}
//     >
//       {title}
//     </Typography>
//     <Typography
//       component="a"
//       href="#"
//       sx={{
//         flexDirection: "row",
//         fontWeight: 500,
//         fontSize: "15px",
//         textAlign: "center",
//         color: "gray",
//         textDecoration: "none",
//         ":hover": {
//           cursor: "pointer",
//         }
//       }}
//     >
//       ENROLL NOW
//       <Box
//         component="img"
//         alt="arrow right"
//         src="images/img_arrow1.svg"
//         sx= {{
//           marginLeft: "5px",
//           height: "13px",
//           filter: "invert(0.5)"
//         }}
//       >
//       </Box>
//     </Typography>
//   </Box>
//   </>
//   )
// }

/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router';
import { Box, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';

const CoursesBox = ({ name, title, url, }) => {
	let navigate = useNavigate();

	const goToPage = (e) => {
		navigate(e)
	};

	return (
    <Card
      sx={{
        borderRadius: '28px',
        boxShadow: '0px 0px 12px 14px rgba(57, 57, 57, 0.10)',
      }}
      onClick={() => goToPage(url)}
    >
      <CardActionArea>
        <CardContent
          sx={{
            width: {sm: '326px', xs: '260px'},
            height: {sm: '282px', xs: '220px'},
            p: '50px 35px 52px 35px',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
          }}
        >
          <Box
            component="img"
            alt={title}
            src={"images/" + name}
            width= "62px"
            margin= "auto"
          />
          <Box>
            <Typography
              color={'black'}
              fontSize={17}
              fontWeight={600}
              letterSpacing={-0.95}
              textTransform='none'
            >{title}</Typography>
          </Box>
          <Box>
            <Typography color="#404040" fontSize={13}>ENROLL NOW</Typography>
            <img src="/images/img_arrow5.svg" width='13px' alt="arrow" />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
	)
}

export default CoursesBox;
