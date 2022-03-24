import { useParams } from "react-router-dom";
import { Events } from "../components/events/Events";

export function EventsPage() {
  let { id } = useParams();

  return (
    <Events id={Number(id)} single={true} />
  );
}