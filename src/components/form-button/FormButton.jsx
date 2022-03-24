import s from './FormButton.module.css';

export const FormButton = (props) => {
	return (
		<button type="submit" className={s.login__button}>
			{props.text}
		</button>
	);
};
