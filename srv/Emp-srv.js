
const cds = require('@sap/cds')
module.exports = class EmployeeService extends cds.ApplicationService {
    async init() {
        const { Employees } = cds.entities("EmployeeService");
        const empSrv = await cds.connect.to('EmpSrv');

        //read
        // this.on('*', Employees, async req => {
        //     console.log("=================================");
        //     console.log("CAP Event:", req.event);
        //     console.log("CAP Data:", req.data);
        //     console.log("CAP Query:", req.query);
        //     console.log("=================================");
        //     return empSrv.run(req.query);
        // });
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

        // code to send the data to onpremise S4 after the data is created in the cloud HANA DB
        this.after('CREATE', 'Employees', async (data, req) => {
            console.log("Data after creation:", data);
            try {
                //const result = await empSrv.run(INSERT.into('EmployeeSet').entries(data));
                // we can also use the below code to send the data to on-premise S4 using the send method using POST
               const result = await empSrv.send({
                    method: 'POST',
                    path: '/EmployeeSet',
                    data: data
                });
                console.log("Data sent to on-premise S4 successfully:", result);
            } catch (error) {
                console.error("Error sending data to on-premise S4:", error);
            }
        });
        // code to send the data to onpremise S4 after the data is updated in the cloud HANA DB
        this.after('UPDATE', 'Employees', async (data, req) => {
            console.log("Data after update:", data);
            try {
                //const result = await empSrv.run(UPDATE('EmployeeSet').set(data).where({ Empid: data.Empid }));
                // we can also use the below code to send the data to on-premise S4 using the send method using PUT
                const result = await empSrv.send({
                    method: 'PUT',
                    path: `/EmployeeSet(Empid='${data.Empid}')`,
                    data: data
                });
                console.log("Data sent to on-premise S4 successfully:", result);
            } catch (error) {
                console.error("Error sending data to on-premise S4:", error);
            }
        });
        // code to send the data to onpremise S4 after the data is deleted in the cloud HANA DB
        this.after('DELETE', 'Employees', async (data, req) => {
            console.log("Data after deletion:", req.data.Empid);
            try {
                //const result = await empSrv.run(DELETE.from('EmployeeSet').where({ Empid: req.data.Empid }));
                // we can also use the below code to send the data to on-premise S4 using the send method using DELETE
                const result = await empSrv.send({
                    method: 'DELETE',
                    path: `/EmployeeSet(Empid='${req.data.Empid}')`
                });
                console.log("Data sent to on-premise S4 successfully:", result);
            } catch (error) {
                console.error("Error sending data to on-premise S4:", error);
            }
        });

        return super.init();
    }
}