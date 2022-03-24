import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '../form/Form';

import s from './Login.module.css'

const postLink = process.env.REACT_APP_API_URL + 'users/login';

export function Login({ link }) {
	const [error, setError] = useState(null);
	const [isSubmitted, setIsSubmitted] = useState(false);

	if (error) {
		return <p>Villa kom upp: {error}</p>;
	}

    // return <Form link={postLink} />;
    return (
        <section>
            <Form link={postLink}></Form>
        {/* <form method="post" action={postLink}>
			<fieldset>
				<legend>Notendanafn</legend>
				<input type="text" id="username" name="username" />
			</fieldset>
			<fieldset>
				<legend>Lykilorð</legend>
				<input type="password" name="password" id="password" />
			</fieldset>
			<button type="submit" className="login-button">Skrá inn!</button>
		</form> */}
        <div>
            <Link className={s.login__link} to="/">Til baka</Link>
        </div>
        </section>
    )
}

const handleSubmit = (event) => {
	// Prevent page reload
	event.preventDefault();
};
