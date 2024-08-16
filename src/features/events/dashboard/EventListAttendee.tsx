import { List, Image } from "semantic-ui-react";
import { Attendee } from "../../../app/types/event";

export default function EventListAttendee({
  attendee,
}: {
  attendee: Attendee;
}) {
  return (
    <List.Item>
      <Image size="mini" circular src={attendee.photoURL} />
    </List.Item>
  );
}