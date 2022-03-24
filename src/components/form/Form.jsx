import s from './Form.module.css'

export const Form = (props) => {
	return (
		<form onSubmit={handleSubmit}>
			<fieldset>
				<legend>Notendanafn</legend>
				<input type="text" id="username" name="username" />
			</fieldset>
			<fieldset>
				<legend>Lykilorð</legend>
				<input type="password" name="password" id="password" />
			</fieldset>
            <div className={s.login__buttons}>
			    <button type="submit" className={s.login__button}>Skrá inn!</button>
			    <button type="submit" className={s.login__button}>Nýskráning!</button>
            </div>
		</form>
	);
};

const handleSubmit = (event) => {
	// Prevent page reload
	event.preventDefault();
    console.log('event --> ', event)
};