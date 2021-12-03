import MaterialTable from "material-table";
//import { AddBox, ArrowDownward, Remove } from "@material-ui/icons";
import tableIcons from "./TableIcons";

const columns=[
    {title : "Estado", field:'estado'    },
    {title:'Mes Liquidado', field:'mes'  },
    {title:'Tipo Liquidación',field:'tipo'},
    {title:'Fecha Inicio', field:'inicio'},
    {title:'Fecha Final', field:'final'},
    {title:'Total Nomina', field:'total', type:"numeric"}
];
const data=[
{estado:'Pagada', mes:'Enero' , tipo:'Mensual', inicio:"01-01-2021", final:'31-01-2021', total:2000000},
{estado:'Pagada', mes:'Febrero' , tipo:'Mensual', inicio:"01-02-2021", final:'28-02-2021', total:1800000},
{estado:'Pagada', mes:'Marzo' , tipo:'Mensual', inicio:"01-03-2021", final:'31-03-2021', total:2000000},
{estado:'Pagada', mes:'Abril' , tipo:'Mensual', inicio:"01-04-2021", final:'30-04-2021', total:1900000},
];

export const TablaNominas = () => {
  return(
  <div>
    <div class="container-md">
       <MaterialTable title="Listado de Nominas"
      columns={columns}
      data={data}
      icons={tableIcons} 
      actions={[
        {
            icon : tableIcons.Edit,
            tooltip : 'Editar Funcionario',
            onClick : (event, rowData)=>alert('Editar al Funcionario: '+rowData.nombre+" "+rowData.apellido)
        },
        {
            icon : tableIcons.Delete,
            tooltip : 'Eliminar Funcionario',
            onClick : (event, rowData)=>window.confirm('Esta seguro de eliminar este funcionario: '+rowData.nombre+" "+rowData.apellido)
        }
        
      ]}

        options={{
            actionsColumnIndex: -1,
            headerStyle: {
                backgroundColor: '#01579b',
                color: '#FFF',
                },
                //selection: true

            
            

        }}
        localization={{
            header:{
                actions: 'Acciones'
            }
        }}
      />

        </div>
      </div>
  )
  };
