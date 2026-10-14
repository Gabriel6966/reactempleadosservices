import axios from "axios";
import Global from "../Global";

export default class ServiceEmpleados{
    

    getEmpleados=()=>{
        let url = Global.urlApiEmpleados;
        let request = "api/Empleados";
        return axios.get(url + request).then((response)=>{
            console.log("leyendo empleados");
            return response.data;
        }).catch((err)=>{
            console.log("error leyendo empleados", err);
            throw err;
        });
    }
}