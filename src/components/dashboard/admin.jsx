/* eslint-disable react/prop-types */
import { useState } from 'react';
// import { useNavigate } from 'react-router';
import Layout from '../layouts';
import { Box, IconButton } from '@mui/material';
import DashboardPanel from './dashboardPanel';
import PButton from '../common/pButton'
import { list3 } from '../../const/lists'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fingerprint  from '@mui/icons-material/Fingerprint';

export default function Dashboard (props) {
  const pathname =(window.location.pathname);
  const url = pathname.slice(1)
  // let navigate = useNavigate();
	// const goToPage = (e) => {
	// 	navigate(e)
	// };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Layout>
      <DashboardPanel
        url={url}
        background='url(/images/img_rectangle17.png), lightgray 50% / cover repeat'
      />
      <Box
        mb= '50px'
        width= '100%'
        display= 'flex'
        bgcolor= '#FCFAF5'
        minHeight= '785px'
        p= {{lg:'40px', xs: '20px'}}
        boxShadow= '0px 0px 14px 7px rgba(135, 135, 135, 0.25)'
      >
        {/* fingerpring Icon button(displays on smartphone) */}
        <IconButton
          id="demo-positioned-button"
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          variant="elevated"
          size='large'
          sx={{
            position: 'absolute',
            display: {xs: 'block', lg: 'none'}
          }}
        >
          <Fingerprint color="success" fontSize='large' />
        </IconButton>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          {list3.map((x,i) =>
            <MenuItem
              key={i}
              // onClick={() => goToPage(x.url)}
              sx={{ p: '20px'}}
            >
              {x.title}
            </MenuItem>
          )}
        </Menu>
        <Box
          pt= '82px'
          pb= '200px'
          minWidth= '310px'
          borderRight= '1px solid black'
          display= {{xs: 'none', lg: 'block'}}
        >
          { list3.map((x,i) => <PButton key={i} title={x.title} /*url={x.url}*/ /> )}
        </Box>
        <Box maxWidth= '875px' p= {{sm: '41px 15px 41px 15px', md:'82px 30px 82px 70px'}}>
          { props.children }
        </Box>
      </Box>
		</Layout>
  );
}