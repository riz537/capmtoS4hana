using EmployeeService as service from '../../srv/Emp-srv';

annotate service.Employees with @(
    UI.CreateHidden: false,
    UI.UpdateHidden: false,
    UI.DeleteHidden: false
);
annotate service.Employees with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'Empid',
                Value : Empid,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Fixedsalary',
                Value : Fixedsalary,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Name',
                Value : Name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Desig',
                Value : Desig,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Email',
                Value : Email,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Status',
                Value : Status,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Salary',
                Value : Salary,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Rating',
                Value : Rating,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'Empid',
            Value : Empid,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Fixedsalary',
            Value : Fixedsalary,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Name',
            Value : Name,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Desig',
            Value : Desig,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Email',
            Value : Email,
        },
    ],
);

