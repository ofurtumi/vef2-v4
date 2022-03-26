import React, { useState } from 'react';
import s from './CommentList.module.css';

export const CommentList = (props) => {
	console.log('props.comments --> ', props.comments)
	return (
		<ul id="comments" className={s.comment__list}>
			{props.comments.map((reg) => {
				return (
					<li key={reg.id} className={s.eventsList__comment}>
						<div>
							<p>
								{reg.name}{' '}
								<span className="comment__username">
									@{reg.username}
								</span>
							</p>

							<p>{reg.comment}</p>
						</div>
					</li>
				);
			})}
		</ul>
	);
};
