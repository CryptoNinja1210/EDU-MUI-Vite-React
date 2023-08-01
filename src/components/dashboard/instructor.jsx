/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Layout from '../layouts';
import { Box, IconButton } from '@mui/material';
import DashboardPanel from './dashboardPanel';
import PButton from '../common/pButton'
import { list2 } from '../../const/lists'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fingerprint  from '@mui/icons-material/Fingerprint';

export default function Dashboard (props) {
  let navigate = useNavigate();
	const goToPage = (e) => {
		navigate(e)
	};
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
      <DashboardPanel url={props.url} background = 'linear-gradient(45deg, #00CA80 0%, #01008A 100%)' />
      <Box
        sx={{
          bgcolor: '#FCFAF5',
          minHeight: '785px',
          width: '100%',
          p: {lg:'40px', xs: '20px'},
          boxShadow: '0px 0px 14px 7px rgba(135, 135, 135, 0.25)',
          mb: '50px',
          display: 'flex',
        }}
      >
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
          {list2.map((x,i) =>
            <MenuItem key={i} onClick={() => goToPage(x.url)}
              sx={{
                padding: '20px'
              }}
            >
              {x.title}
            </MenuItem>
          )}
        </Menu>
        <Box
          sx={{
            display: {xs: 'none', lg: 'block'},
            minWidth: '310px',
            paddingTop: '82px',
            borderRight: '1px solid black',
            paddingBottom: '200px',
          }}
        >
          { list2.map((x,i) => <PButton key={i} title={x.title} url={x.url} />) }
        </Box>
        <Box
          sx={{
            width: '-webkit-full-available',
            alignItems: 'center',
            maxWidth: '875px',
            p: {sm: '41px 15px ', md:'82px 30px 82px 70px'},
          }}
        >
          { props.children }
        </Box>
      </Box>
		</Layout>
  );
}