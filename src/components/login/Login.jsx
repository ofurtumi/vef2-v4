import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { FormButton } from '../form-button/FormButton';

import s from './Login.module.css';

export const Login = ( props ) => {
    const [error, setError] = useState(null);
	const [redirect, setRedirect] = useState(false);

    // console.log('props --> ', props)

	if (error) {
		return <p>Villa kom upp: {error}</p>;
	}

	// return <Form link={postLink} />;
	return (
		<section>
			<form onSubmit={(event) => {
                event.preventDefault()
                props.updLog(true)
				props.updNam(event.target.username.value)
				setRedirect(true)
            }}>
				<fieldset>
					<legend>Notendanafn</legend>
					<input type="text" id="username" name="username" required/>
				</fieldset>
				<fieldset>
					<legend>Lykilorð</legend>
					<input type="password" name="password" id="password" required/>
				</fieldset>
				<div className={s.login__buttons}>
					<FormButton text='Skrá inn!'/>
					<FormButton text='Nýskráning'/>
				</div>
			</form>
			<div>
				{ redirect ? (<Navigate push to="/"/>) : null }
				<Link className={s.login__link} to="/">
					Til baka
				</Link>
			</div>
		</section>
	);
}