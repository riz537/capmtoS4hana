using { EmpSrv as srv } from './external/EmpSrv';


service EmployeeService {
@odata.draft.enabled
    entity Employees as projection on srv.EmployeeSet;

}