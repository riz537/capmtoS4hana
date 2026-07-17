
const cds = require('@sap/cds')
module.exports = class EmployeeService extends cds.ApplicationService {
    async init() {
        const { Employees } = cds.entities("EmployeeService");
        const empSrv = await cds.connect.to('EmpSrv');

        //read
        this.on('*', Employees, async req => {
            console.log("=================================");
            console.log("CAP Event:", req.event);
            console.log("CAP Data:", req.data);
            console.log("CAP Query:", req.query);
            console.log("=================================");
            return empSrv.run(req.query);
        });
        // // CREATE
        // this.on('CREATE', Employees, async (req) => {
        //     return empSrv.run(req.query);
        // });
        // // UPDATE
        // this.on('UPDATE', Employees, async (req) => {
        //     return empSrv.run(req.query);
        // });
        // // DELETE
        // this.on('DELETE', Employees, async (req) => {
        //     return empSrv.run(req.query);
        // });
        return super.init();
    }
}