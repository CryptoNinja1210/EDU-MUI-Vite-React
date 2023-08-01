import { WrapText } from "@mui/icons-material";
import { Button, Box } from "@mui/material";
import Typography from "@mui/material/Typography";


export default function DashboardPanel (props) {
  const {background, url} = props
  return (
    <Box
      sx={{
        width: '100%',
        boxShadow: '0px 0px 14px 7px rgba(135, 135, 135, 0.3)',
        height: {lg: '182.31px', xs: 'auto'},
        background: background,
        display:  "flex",
        justifyContent: 'space-between',
        flexDirection: {sm: 'row', xs: 'column'},
        px: {lg: '60px', md: '30px',xs: '20px'},
        alignItem: 'center',
        pb: {md: '30px', xs: '15px'},
        mt:  '37px',
        mb: "60px",
      }}
    >
      <Box>
        <Typography variant="h5"
          sx={{
            color: 'white',
            fontWeight: 500,
            pt: {md:'53px', xs: '15px'},
          }}
        >
          Welcome
        </Typography>
        <Box
          display='flex'
          justifyContent='start'
          flexWrap={'wrap'}
        >
          <Typography
            letterSpacing='-2.25px'
            color='#000000'
            fontWeight={800}
            sx={{
              fontSize: {lg: '40px',md: '35px', sm: '30px', xs: '25px'},
              mt: {md: '-19px', xs: 0}
            }}
          >
            Gonzaga Paul-
          </Typography>
          <Typography
            letterSpacing='-2.25px'
            color='white'
            fontWeight={800}
            sx={{
              fontSize: {lg: '40px',md: '35px', sm: '30px', xs: '25px'},
              mt: {md: '-19px', xs: 0}
            }}
          >
            {url}
          </Typography>
        </Box>
      </Box>
      {/* <Box
        pt= {{lg:'72px', xs: '30px'}}
        display= 'flex'
        justifyContent= 'center'
        pr= {{lg: '11px', xs: 0}}
      >
        <Button sx={{
          height: '47px',
          fontSize: '22px',
          color: '#FFFFFF',
          fontWeight: '600',
          borderRadius: '13px',
          textTransform: 'none',
          border: 'solid 1px white',
          width: {md: '147px', xs: '130px'},
        }}>
          Explore
        </Button>
      </Box> */}
    </Box>
  )
}