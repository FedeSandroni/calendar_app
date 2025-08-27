import { Navigate, Route, Routes } from "react-router-dom";
import { useCalendarStore } from "../hooks";
import { LoginPage } from "../auth/pages/LoginPage";
import { CalendarPage } from "../calendar";

export const AppRouter = () => {
  const { user } = useCalendarStore();

  return (
    <Routes>
      {!!user ? (
        <Route path="/*" element={<CalendarPage />} />
      ) : (
        <Route path="/auth/*" element={<LoginPage />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
