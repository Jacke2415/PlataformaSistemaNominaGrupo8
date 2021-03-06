import Formulario from "../components/User/UserNomina/Formulario";
import NavbarNomina from "../components/Nav_Bar/NavbarNomina";
import Background from "../components/Login/Background";
export default function CrearEmpleado() {
  return (
    <>
      <Background />
      <div className="container-lg">
        <div className="row">
          <div className="col">
            <NavbarNomina />
          </div>
          <div className="col-10">
            <Formulario />
          </div>
        </div>
      </div>
    </>
  );
}
