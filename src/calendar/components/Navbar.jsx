import { useCalendarStore } from "../../hooks";

export const Navbar = () => {
  const { user, logout } = useCalendarStore();
  console.log(user);

  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
      <span className="navbar-brand">
        <i className="fas fa-calendar-alt"></i>
        &nbsp; {user?.username || ""}
      </span>
      <button className="btn btn-outline-danger" onClick={logout}>
        <i className="fas fa-sign-out-alt"></i>
        <span>Salir</span>
      </button>
    </div>
  );
};
