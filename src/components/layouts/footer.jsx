/* eslint-disable react/no-unescaped-entities */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/joy/Grid';
// import { Button } from '@mui/material';

export default function Footer() {
	return(
		<Box
			sx={{
				borderRadius: '43px',
				padding: {xs: '16px 19px 16px 19px', sm: '32px 30px 32px 30px', md:'48px 59px 48px 59px'},
				backgroundColor: '#F5EFDF',
			}}
		>
			<Grid
				container
				spacing={0}
				sx={{
					flexGrow: 1,
				}}
			>
				<Grid
					xs={12}
					md={3}
					lg={2}
					sx= {{
						flexDirection: {xs:"column",sm:"row",md:"column"},
						display: "flex",
					}}
				>
					<Box
						sx={{
							width: '143px',
							height: '147px',
							flexDirection: 'column',
						}}
					>
						<img src='/images/applogo.png' style={{ width: "100%" }} />
					</Box>
					<Box
						sx={{
							display: 'flex',
							justifyContent: {xs:'space-around',sm: "space-evenly", md: "space-around"},
							flexDirection: 'row',
							alignItems: "center",
							width :"100%",
						}}
					>
						<Box sx={{background: 'black', width: '48px', height: '49px', borderRadius: '10px;', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
							<img src='/images/img_camera.svg'  style={{ width: "31px" }}/>
						</Box>
						<Box sx={{background: 'black', width: '48px', height: '49px', borderRadius: '10px;', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
							<img src='/images/img_facebook.svg'  style={{ width: "14px" }}/>
						</Box>
						<Box sx={{background: 'black', width: '48px', height: '49px', borderRadius: '10px;', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
							<img src='/images/img_twitter.svg'  style={{ width: "32px" }}/>
						</Box>
					</Box>
				</Grid>
				<Grid
					xs={12}
					md={6}
					lg={7}
				>
					<Typography
						sx={{
							fontWeight: '700',
							fontSize: '20px',
							marginBottom: '22px',
							marginLeft: '30px',
						}}
						textAlign="left"
					>
						COURSE1
					</Typography>
					<Grid container spacing={0} sx={{ flexGrow: 1, paddingLeft: '20px'}}>
						<Grid xs={12} sm={12} md={6}
							sx={{
								borderLeft: '1px solid black',
								display: 'flex',
								flexDirection: 'column',
								paddingLeft: '20.5px',
								paddingRight: '10px',
							}}
							textAlign="left"
						>
							<Typography
								sx={{
									fontWeight: '600',
									fontSize: '20px',
								}}
							>Wild Fire Safety & Prevention</Typography>
							<Typography
								sx={{
									fontWeight: '600',
									fontSize: '20px',
								}}
							>Fire Chemistry</Typography>
							<Typography
								sx={{
									fontWeight: '600',
									fontSize: '20px',
								}}
							>Traffic Safety</Typography>
							<Typography
								sx={{
									fontWeight: '600',
									fontSize: '20px',
								}}
							>Basic Home Fire Safety</Typography>
							<Typography
								sx={{
									fontWeight: '600',
									fontSize: '20px',
								}}
							>Flood Safetv</Typography>
						</Grid>
						<Grid xs={12} sm={12} md={6}
							sx={{
								borderLeft: '1px solid black',
								display: 'flex',
								flexDirection: 'column',
								textAlign: 'left',
								paddingLeft: '20.5px'
							}}
						>
							<Typography
								sx={{
									fontWeight: '600',
									fontSize: '20px',
								}}
							>Human Rights- Gender Equality</Typography>
							<Typography
								sx={{
									fontWeight: '600',
									fontSize: '20px',
								}}
							>Human Rights-Children's Rights</Typography>
							<Typography
								sx={{
									fontWeight: '600',
									fontSize: '20px',
								}}
							>Fire Safety</Typography>
							<Typography
								sx={{
									fontWeight: '600',
									fontSize: '20px',
								}}
							>Road &Traffic</Typography>
							<Typography
								sx={{
									fontWeight: '600',
									fontSize: '20px',
								}}
							>Conctriction Safet</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid xs={12} md={3} lg={3} sx={{ padding: {xs: '0px 20px',}, marginTop: {xs: '20px'} }}>
					<Typography
						sx={{
							fontWeight: '700',
							fontSize: '20px',
							marginBottom: '22px',
						}}
					>Download our Ap:</Typography>
					<Box sx={{display: {xs: 'flex', md: 'block'}, justifyContent: { xs: 'space-between'}}}>
						<Box sx={{width: '100%'}}>
							<img src='/images/apple.png' style={{ width: '100%'}} />
						</Box>
						<Box sx={{width: '100%'}}>
							<img src='/images/google.png' style={{ width: '100%'}} />
						</Box>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
}