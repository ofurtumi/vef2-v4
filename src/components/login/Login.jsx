import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '../form/Form';

import s from './Login.module.css'

export function Login({ link }) {
	const [error, setError] = useState(null);
	const [isSubmitted, setIsSubmitted] = useState(false);

	if (error) {
		return <p>Villa kom upp: {error}</p>;
	}

    // return <Form link={postLink} />;
    return (
        <section>
            <Form/>
        <div>
            <Link className={s.login__link} to="/">Til baka</Link>
        </div>
        </section>
    )
}


