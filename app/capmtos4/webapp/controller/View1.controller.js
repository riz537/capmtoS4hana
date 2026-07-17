sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "sap/ui/model/Filter",
     "sap/m/MessageBox"
], (Controller, Filter, MessageBox) => {
    "use strict";

    return Controller.extend("com.demo.capmtos4.controller.View1", {
        onInit() {
            this.oModel = this.getOwnerComponent().getModel();
        },
        onSearch: function () {
            let value = this.byId("SF").getValue();
            let aFilters = [];
            if (value !== "") {
                aFilters.push(new Filter("Name", "Contains", value));
            }
            this.byId("EmpTab").getBinding("items").filter(aFilters);

        },
        onPressEdit: function () {
            let oBindingContext = this.byId("EmpTab").getSelectedItem().getBindingContext();
            this.openDialog().open();
            this.dialog.setBindingContext(oBindingContext);
        },
        openDialog: function () {
            if (!this.dialog) {
                this.dialog = sap.ui.xmlfragment(this.getView().getId(), "com.demo.capmtos4.view.CreateEmp", this);
                this.getView().addDependent(this.dialog);
            }
            return this.dialog;
        },
        onPressCreate: function () {
            let oListBinding = this.byId("EmpTab").getBinding("items");
            let oBindingContext = oListBinding.create();
            oBindingContext.created().then(function () {
                MessageBox.success("Created successfully");
            }.bind(this), function () {
                MessageBox.error("Some error occured");
                this.oModel.resetChanges("EmpGrp");
                this.dialog.close();
            }.bind(this));
           
            this.oBindingContext = oBindingContext;
            this.openDialog().open();
            this.dialog.setBindingContext(oBindingContext);
        },
        onPresDelete: function () {
            let oBindingContext = this.byId("EmpTab").getSelectedItem().getBindingContext();
            oBindingContext.delete("EmpGrp");
            this.oModel.submitBatch("EmpGrp").then(function () {
                MessageBox.success("Deleted successfully");
                
            }.bind(this), function () {
                MessageBox.error("Some error occured");
                this.oModel.resetChanges("EmpGrp");
                this.dialog.close();
            }.bind(this));
        },
        onPressSave: function () {
            this.oModel.submitBatch("EmpGrp").then(function () {
                //MessageBox.success("Saved successfully");
                this.dialog.close();
            }.bind(this), function () {
                MessageBox.error("Some error occured");
                this.oModel.resetChanges();
                this.dialog.close();
            }.bind(this));
        },
        onPressCancel: function () {
            this.oModel.resetChanges("EmpGrp");
            //this.oBindingContext.delete("$auto");
            this.dialog.close();
        },
    });
});