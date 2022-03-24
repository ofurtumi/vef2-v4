export const Form = (props) => {
	return (
		<form method="post" action="props.link">
			<fieldset>
				<legend>Notendanafn</legend>
				<input type="text" id="username" name="username" />
			</fieldset>
			<fieldset>
				<legend>Lykilorð</legend>
				<input type="password" name="password" id="password" />
			</fieldset>
			<button type="submit" className="login-button">Skrá inn!</button>
		</form>
	);
};
