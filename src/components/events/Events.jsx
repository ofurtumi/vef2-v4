import React, { useEffect, useState } from 'react';
import ReactDOM from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import s from './Events.module.css';
import { CommentList } from '../comment-list/CommentList';
import { FormButton } from '../form-button/FormButton';

const apiUrl = process.env.REACT_APP_API_URL;

export const Events = ({
	id,
	onDelete,
	allEventsUrl,
	single = false,
	limit = -1,
	isLog,
	updLog,
	isNam,
}) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [eventsItem, setEventsItem] = useState(null);
  const [userComments, setUserComments] = useState([]);

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			setError(null);

			let json;

			const url = new URL(id, apiUrl);
			// console.log('id --> ', id)
			// console.log('apiUrl --> ', apiUrl)
			// console.log('url --> ', url)

			try {
				const result = await fetch(url);
				// console.log('result --> ', result)

				if (result.status === 404) {
					return;
				}

				if (!result.ok) {
					throw new Error('result not ok');
				}

				json = await result.json();
				// console.log('json --> ', json)
			} catch (e) {
				console.warn('unable to fetch events', e);
				setError('Gat ekki sótt viðburð.');
				return;
			} finally {
				setLoading(false);
			}

			setEventsItem(json);
		}
		fetchData();
	}, [id]);

	if (error) {
		return <p>Villa kom upp: {error}</p>;
	}

	if (loading) {
		return <p>Sæki gögn...</p>;
	}

	return (
		<section className={s.events}>
			<h2 className={s.events__title}>{eventsItem && eventsItem.name}</h2>
			<p className={s.events__list}>
				{/* {console.log('items --> ', items)} */}
				{eventsItem && eventsItem.description}
				{/* {items.registrations} */}
			</p>

			{!allEventsUrl && (
				<div className={s.events__title}>
					<h3>Skráningar:</h3>
				</div>
			)}

			{!allEventsUrl && eventsItem && (
				<CommentList
					comments={eventsItem && eventsItem.registrations}
				></CommentList>
			)}

			{!allEventsUrl && isLog && (
				<form
					onSubmit={(event) => {
						event.preventDefault();
            console.log('skráning --> ', event.target.comment_text.value)
            console.log('notendanafn --> ', isNam)
						// <CommentList comments={[{comment:event.target.comment_text.value,name:isNam,username:isNam}]}/>
						// document.getElementById('comment_text').setValue('');
					}}
				>
          <h2 className={s.events__title}>Gat ekki fyrir mitt litla líf birt nýjar skráningar</h2>
          <h3 className={s.events__title}>er of veikur fyrir þetta shit þær eru í console log</h3>
					<input type="text" id="comment_text" name="comment_text" />
					<FormButton text="Birta skráningu" />
				</form>
			)}

			<div className={s.events__links}>
				{allEventsUrl && (
					<Link className={s.events__link} to={allEventsUrl}>
						Skoða nánar
					</Link>
				)}

				{!allEventsUrl && (
					<Link className={s.events__link} to="/">
						Til baka
					</Link>
				)}
			</div>
		</section>
	);
};

Events.propTypes = {
	id: PropTypes.number.isRequired,
	allEventsUrl: PropTypes.string,
	limit: PropTypes.number,
};
