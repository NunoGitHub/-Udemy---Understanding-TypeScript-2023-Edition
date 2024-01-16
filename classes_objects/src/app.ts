abstract  class Department {

  static fiscalYear=2020;
  // private name:string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, private name: string) {
    //this.name = name;
  }

  static CreateEmployee(name: string){
    return {name:name}
  }

  abstract describe(this: Department):void;

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

  describe(): void {
    console.log(`Accouting department  - ID: ${this.id}`)
  }
}

class AccountingDepartment extends Department {
  private lastReport:string;
  private  static instance:AccountingDepartment;
  get mostRecentReport(){
    if(this.lastReport)
      return this.lastReport
    else
      throw new Error('No report found')
  }

  set mostRecentReport(value:string){
    if(!value)
      throw new Error('insert new value')
    this.addReport(value);
  }

//singleton
  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport= reports[0];
  }

  //create singleton 
  static getInstance(){
    if(AccountingDepartment.instance){
      return this.instance;
    }
    return this.instance= new AccountingDepartment('d2', []);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport=text;
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string): void {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  describe(): void {
      console.log(`Accouting department  - ID: ${this.id}`)
  }
}

const employee1 = Department.CreateEmployee('Max');
console.log(employee1,Department.fiscalYear);

/*const department = new Department("id", "accounting");

department.addEmployee("max");
department.addEmployee("manu");
//department.describe();
//console.log(department)
department.printemployeeInformation();*/
/*const cc = {name:'hello',describe: department.describe}

cc.describe()*/

console.log("Extends");

const department1 = new ITDepartment("d2", ["MAX"]);
console.log(department1);
department1.describe();
//singleton
const accounting = AccountingDepartment.getInstance();
accounting.addEmployee("Menu");
accounting.addEmployee("Max");
accounting.describe();
accounting.addReport("Something went wrong");
accounting.mostRecentReport='teste'
console.log(accounting.mostRecentReport)
accounting.printReports();
accounting.printemployeeInformation();
