import { NextFunction } from 'connect'
import { employeeDefSchema,EmployeeRequest } from '../models/employee.model'
import {ErrorHandler, LogicError, LogicErrorEnum,} from '../errors/employee.errors';


const {Employee} = require('../Database/models');

export async function GetAllEmployeesFromDB() : Promise<any>
{

    const all_emps = await Employee.findAll({attributes : ['uuid','name','salary','department']})
    return all_emps;
}

export async function AddNewEmployeeIntoDB(emp_req:EmployeeRequest) : Promise<any>
{
        //insert 
        const emp = await Employee.create(emp_req);
        return emp; 
}

export async function GetEmployeeByIDFromDB(uuid:string) : Promise<any>
{

        const employee = await Employee.findOne({where :{uuid}})
        
        if(employee === null)
            throw new LogicError(LogicErrorEnum.NotFound);

        return employee;
}

export async function UpdateEmployeeByIDFromDB(uuid:string, new_params:EmployeeRequest) : Promise<any>
{

    const emp = await Employee.findOne({where :{uuid}});

    if (emp === null)
        throw new LogicError(LogicErrorEnum.NotFound);

    if (emp.name == new_params.name &&
        emp.salary == new_params.salary &&
        emp.department == new_params.department 
    )
        throw new LogicError(LogicErrorEnum.NoChange);


    emp.name = new_params.name;
    emp.salary = new_params.salary;
    emp.department = new_params.department;

    console.log(emp);

    await emp.save();
    return emp;

}

export async function DeleteEmployeeByIDFromDB(uuid:string)
{
        const emp = await Employee.findOne({where:{uuid}});

        if (emp === null)
            throw new LogicError(LogicErrorEnum.NotFound);
        
        await emp.destroy();

        return emp;
}