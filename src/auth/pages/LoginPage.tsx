import { useState } from "react";
import { useCalendarStore } from "../../hooks";
import "./LoginPage.css";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

export const LoginPage = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  const { setUser } = useCalendarStore();

  const onChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (formValues.username.trim().length === 0) {
      Swal.fire("Usuario", "El usuario es obligatorio", "error");
      return;
    }
    if (formValues.password.trim().length === 0) {
      Swal.fire("Contraseña", "La contraseña es obligatoria", "error");
      return;
    }
    setUser({ username: formValues.username });
  };

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3 className="h4 text-center fw-bold mb-2">
            Completa las credenciales para continuar
          </h3>
          <p className="text-center text-muted small mb-3">
            Como es un Dummy podes poner cualquier credencial no se valida
          </p>
          <form onSubmit={onSubmit} className="pt-2">
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Usuario"
                name="username"
                value={formValues.username}
                onChange={onChange}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="password"
                value={formValues.password}
                onChange={onChange}
              />
            </div>
            <div className="form-group mb-2 pt-1">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
