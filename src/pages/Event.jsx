import { useParams } from 'react-router-dom';
import { Events } from '../components/events/Events';

export const EventsPage = (props) => {
	let { id } = useParams();

	return (
		<Events
			id={Number(id)}
			single={true}
			isLog={props.isLog}
			updLog={props.updLog}
			isNam={props.isNam}
		/>
	);
};
