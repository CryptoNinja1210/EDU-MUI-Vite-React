/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router';
import { Box, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';

const Subpannel = ({ icon, title, url, buttonText, badge }) => {
	let navigate = useNavigate();

	const goToPage = (e) => {
		navigate(e)
	};

	return (
    // <Box maxWidth={'100%'} maxHeight={'100%'} display={'block'} margin={'auto'}>
      <Card
        sx={{
          borderRadius: '28px',
          boxShadow: '0px 0px 12px 14px rgba(57, 57, 57, 0.10)',
          minWidth: '228px',
          minHeight: '196px',
          // width: '100%',
          // height: '100%',
        }}
        onClick={() => goToPage(url)}
      >
        <Box position= 'absolute' ml= '195px' mt= '-15px'>
          {badge}
        </Box>
        <CardActionArea>
          <CardContent
            sx={{
              width: '228px',
              height: '196px',
              padding: '24px',
              display: 'flex',
              // justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <Box
              m= 'auto'
              width= '60px'
              display= 'flex'
              // justifyContent = 'center'
            >{icon}</Box>
            <Box>
              <Typography
                color= '#000'
                textAlign= 'center'
                fontSize= '16px'
                fontWeight= '600'
                letterSpacing= '-0.72px'
                textTransform= 'none'
              >{title}</Typography>
            </Box>
            <Box display= 'flex' m='auto'>
              <Typography
                color= '#404040'
                textAlign= 'center'
                fontSize= '16px'
              >
                {buttonText}
              </Typography>
              <img src="/images/img_arrow5.svg" alt="arrow" />
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    // </Box>
	)
}

export default Subpannel;
