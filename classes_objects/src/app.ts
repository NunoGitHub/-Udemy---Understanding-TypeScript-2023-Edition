class Department {
  // private name:string;
  private employees: string[] = [];

  constructor(private readonly id: string, private name: string) {
    //this.name = name;
  }

  describe(this: Department) {
    console.log(this.name);
    console.log(`Department = ${this.name} id = ${this.id}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printemployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  //if we dont have a constructor function it uses the constructor of inherited class
  constructor(id: string, public admins: string[]) {
    super(id, "IT"); //calls the constructor of inherited class, base class
    this.admins = admins;
  }
}


class AccountingDepartment extends Department {
    constructor(id:string, private reports:string[]){
        super(id, 'Accounting')
    }

    addReport(text:string){
        this.reports.push(text);
    }

    printReports(){
        console.log(this.reports);
    }

}

const department = new Department("id", "accounting");

department.addEmployee("max");
department.addEmployee("manu");
department.describe();
//console.log(department)
department.printemployeeInformation();
/*const cc = {name:'hello',describe: department.describe}

cc.describe()*/

console.log("Extends");

const department1 = new ITDepartment("d2", ["MAX"]);
console.log(department1)
department1.describe();


const accounting= new AccountingDepartment('D2', []);
accounting.addReport('Something went wrong');
accounting.printReports()