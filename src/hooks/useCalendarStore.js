import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewEvent,
  onDeleteEvent,
  onSetActiveEvent,
  onUpdateEvent,
  onUpdateUser,
  onLogout,
} from "../store";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent, user } = useSelector( 
    (state) => state.calendar
  );

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    if (calendarEvent._id) {
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      dispatch(
        onAddNewEvent({
          ...calendarEvent,
          _id: new Date().getTime(),
          // no hace falta meter user acá porque el slice ya lo agrega
        })
      );
    }
  };

  const startDeletingEvent = () => {
    dispatch(onDeleteEvent());
  };

  const setUser = ({ username }) => {
    dispatch(
      onUpdateUser({
        _id: new Date().getTime(), // simulado hasta tener backend
        username,
      })
    );
  };

  const logout = () => {
    dispatch(onLogout());
  };

  return {
    //* Propiedades
    activeEvent,
    events,
    hasEventSelected: !!activeEvent,
    user,

    //* Métodos
    startDeletingEvent,
    setActiveEvent,
    startSavingEvent,
    setUser,
    logout,
  };
};
