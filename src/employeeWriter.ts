import { CSVWriter } from "./csv";

interface Employee {
  id: number;
  name: string;
  role: string;
  salary: number;
}

const employeeWriter = new CSVWriter<Employee>([
  "id",
  "name",
  "role",
  "salary",
]);

employeeWriter.addRows([
  { id: 1, name: "John", role: "Manager", salary: 50000 },
  { id: 2, name: "Jane", role: "Developer", salary: 30000 },
]);

// employeeWriter.save("./data/employees.csv");

employeeWriter.addRows([
  { id: 3, name: "Bob", role: "Designer", salary: 40000 },
  { id: 4, name: "Alice", role: "Sales", salary: 25000 },
  { id: 5, name: "Mike", role: "Accountant", salary: 35000 },
]);
employeeWriter.save("./data/employees.csv");
