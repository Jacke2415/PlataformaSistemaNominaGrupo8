import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
//import { AddBox, ArrowDownward, Edit, Event, Remove, DeleteIcon} from "@material-ui/icons";
//import { AddBox, ArrowDownward, Edit, Event, Remove, DeleteIcon} from "./TableIcons";
import tableIcons from "./TableIcons";
//import { Avatar, Container, Grid, Table, Tooltip } from "@material-ui/core";
import axios from "axios";

const columns = [
  { title: "Nombre", field: "nombre" },
  { title: "Apellido", field: "apellido" },
  { title: "Identificación", field: "cedula", type: "numeric" },
  /* {title:'No. Contrato', field:'contrato'}, */
  { title: "Tipo de Contrato", field: "tipo_contrato" },
  { title: "Salario", field: "salario", type: "numeric" },

  /*  {title : "Nombre", field:'nombre', render:(row)=><Grid container alignItems="center">
         <Grid item sm={3}>
             <Avatar>{row.nombre[0]}</Avatar>
         </Grid>
         <Grid item>
             {row.nombre}
         </Grid>
         </Grid>},        
     {title:'Apellido', field:'apellido'  },
     {title:'Identificación',field:'cedula',type:"numeric"},
     
     {title:'Tipo de Contrato', field:'tipo_contrato'},
     {title:'Salario', field:'salario', type:"numeric"} */
];

const baseUrl = "http://localhost:5000/users";

/* {nombre:'Luis', apellido:'Mercado' , identificacion:1111111, contrato:"2021-0001", tipocontrato:'fijo', salario:20000},
{nombre:'Luis', apellido:'Eduardo' , identificacion:1111111, contrato:"2021-0001", tipocontrato:'fijo', salario:200000} */

export const TablaFuncionarioCopia = () => {
  const [data, setData] = useState([]);
  const peticionGet = async () => {
    await axios.get(baseUrl).then((response) => {
      setData(response.data);
    });
  };

  const handleEliminar = async (identificacion) => {
    try {
      const user = await axios.post("http://localhost:5000/users/userID", {
        parametros: {
          cedula: identificacion,
        },
      });
      console.log("USER CONSULTADO: ", user.data[0]._id);
      const urlbase = "http://localhost:5000/users/" + user.data[0]._id;
      const resdelete = await axios.delete(urlbase);
      window.location.reload(false);
    } catch (error) {}
  };

  useEffect(() => {
    peticionGet();
  }, []);

  const handleCheckboxClick = (rowData) => {
    rowData.tableData.checked = true;
  };
  return (
    <>
      <div>
        <br />
        <div class="container-md">
          <MaterialTable
            title="Listado de Funcionarios"
            columns={columns}
            data={data}
            icons={tableIcons}
            actions={[
              {
                icon: tableIcons.Edit,
                tooltip: "Editar Funcionario",
                onClick: (event, rowData) =>
                  alert(
                    "Editar al Funcionario: " +
                      rowData.nombre +
                      " " +
                      rowData.apellido
                  ),
              },
              {
                icon: tableIcons.Delete,
                tooltip: "Eliminar Funcionario",
                onClick: (event, rowData) => {
                  if (
                    window.confirm(
                      "Esta seguro de eliminar este funcionario: " +
                        rowData.nombre +
                        " " +
                        rowData.apellido
                    )
                  ) {
                    handleEliminar(rowData.cedula);
                  }
                },
              },
            ]}
            options={{
              /* selection: true, */
              headerStyle: {
                backgroundColor: "#0d6fff",
                color: "#FFF",
              },
              exportButton: true,
            }}
            localization={{
              header: {
                actions: "Acciones",
              },
            }}
          />
        </div>
      </div>
    </>
  );
};
