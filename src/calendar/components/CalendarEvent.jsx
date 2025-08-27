export const CalendarEvent = ({ event }) => {
  const { title, notes } = event;

  return (
    <div>
      <strong>{title}</strong>
      <span> - {notes || ""}</span>
    </div>
  );
};
