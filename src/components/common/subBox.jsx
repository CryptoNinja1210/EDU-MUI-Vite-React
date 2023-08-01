/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router';
import { Badge, Box, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';


const SubBox = ({ icon, title, url, bContent, bColor}) => {
	let navigate = useNavigate();

	// const goToPage = (e) => {
	// 	navigate(e)
	// };

  const StyledBadge = styled(Badge)(() => ({
    '& .MuiBadge-badge': {
      width: 45,
      height: 45,
      borderRadius: '50%',
      fontSize: '20px',
      fontWeight: 700,
    },
  }));

	return (
    <Box color={bColor}>
      <StyledBadge
        badgeContent={bContent}
        color={bColor}
        showZero
      >
        <Card
          sx={{
            borderRadius: '28px',
            boxShadow: '0px 0px 12px 14px rgba(57, 57, 57, 0.10)',
          }}
          // onClick={() => goToPage(url)}
        >
          <CardActionArea>
            <CardContent
              sx={{
                width: '207.515px',
                height: '178.403px',
                display: 'flex',
                padding: '40px',
                flexDirection: 'column',
                justifyContent: 'space-between',

              }}
            >
              <Box
                display='flex'
                justifyContent='center'
                width={'100%'}
              >{icon}</Box>
              <Box>
                <Typography
                  textAlign='center'
                  color= '#000'
                  fontSize= '13px'
                  fontWeight= '700'
                >{title}</Typography>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </StyledBadge>
    </Box>
	)
}
export default SubBox;
