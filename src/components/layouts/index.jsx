/* eslint-disable no-dupe-keys */
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import { Box, CssBaseline } from '@mui/material';
import Appbar from './appbar'
import Footer from './footer'
import Routes from './routes'

let theme = createTheme({
	typography: {
		fontFamily: ['Poppins',
	].join(','),
	}
});
theme = responsiveFontSizes(theme);

export default function Layout(props) {
	const { children } = props;
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline maxWidth='xl' sx={{maxWidthXl: '1416px'}} />
				<Box sx={{
					bgcolor: '#eee',
					justifyContent: 'center',
					'& p': {fontFamily: 'Poppins'},
					'& button' : {fontFamily: 'Poppins'},
				}}>
					<Box sx={{
						maxWidth: '1440px',
						minWidth: '350px',
						bgcolor: '#fff',
						margin: 'auto',
						justifyContent: 'center',
						overflow: 'hidden'
					}}>
						<Box
							sx={{
								maxWidth: '1284px',
								padding: '78px 0',
								margin: {xs:' 0 20px', sm: '0 40px', md:'0 78px'},
								justifyContent: 'center',
							}}
						>
							<Routes />
							<Appbar />
							{children}
							<Footer />
						</Box>
					</Box>
				</Box>
		</ThemeProvider>
	)
}