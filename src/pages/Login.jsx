import { Login } from '../components/login/Login';

export const LoginPage = (props) => {
	console.log('props.logginOut --> ', props.logginOut)
	if (props.logginOut) {
		props.updLog(false)
		props.updNam('')
	}
	
	document.title = 'Innskráning'
	return (
		<Login
			isLog={props.isLog}
			updLog={props.updLog}
			updNam={props.updNam}
		/>
	);
};
