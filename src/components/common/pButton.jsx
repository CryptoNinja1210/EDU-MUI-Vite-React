/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router';
import { Box, Button, Typography } from '@mui/material'
import { AddCircle } from '@mui/icons-material'
import PropTypes from 'prop-types';

const PButton = ({ title, url }) => {
	let navigate = useNavigate();

	const goToPage = (e) => {
		navigate(e)
	};

	return (
		<Box>
			<Button
				onClick={() => goToPage(url)}
				size="large"
			>
				<AddCircle sx={{color: '#C4933B', fontSize: '36px', mr: '16px'}} />
				<Typography
					sx={{
						color: '#666',
						'&:hover': {
							color: 'black',
						},'&:active': {
							color: 'black',
						},
						fontSize: 25,
						fontWeight: 600,
						letterSpacing: '-1px',
						textTransform: 'none',
					}}
				>{title}</Typography>
			</Button>
		</Box>
	)
}

PButton.prototype = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
}
export default PButton;