using { EmpSrv as srv } from './external/EmpSrv';


service EmployeeService {

    entity Employees as projection on srv.EmployeeSet;

}