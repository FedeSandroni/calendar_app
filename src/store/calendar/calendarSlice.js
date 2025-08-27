import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const tempEvent = {
  _id: new Date().getTime(),
  title: "Turno medico",
  notes: "Ir al oculista",
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: "#fafafa",
  user: null,
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    events: [tempEvent],
    activeEvent: null,
    user: null,
  },
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
    onAddNewEvent: (state, { payload }) => {
      const newEvent = {
        ...payload,
        user: state.user,
      };
      state.events.push(newEvent);
      state.activeEvent = null;
    },
    onUpdateEvent: (state, { payload }) => {
      state.events = state.events.map((event) =>
        event._id === payload._id ? payload : event
      );
    },
    onDeleteEvent: (state) => {
      if (state.activeEvent) {
        state.events = state.events.filter(
          (event) => event._id !== state.activeEvent._id
        );
        state.activeEvent = null;
      }
    },
    onUpdateUser: (state, { payload }) => {
      state.user = {
        _id: payload._id,
        username: payload.username,
      };
    },
    onLogout: (state) => {
      state.user = null;
      state.activeEvent = null;
    },
  },
});

export const {
  onSetActiveEvent,
  onAddNewEvent,
  onUpdateEvent,
  onDeleteEvent,
  onUpdateUser,
  onLogout,
} = calendarSlice.actions;

export default calendarSlice.reducer;
