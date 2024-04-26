import { CSVWriter } from "./csv";

interface Payment {
  id: number;
  amount: number;
  to: string;
  notes: string;
}

const paymentWriter = new CSVWriter<Payment>(["id", "amount", "to", "notes"]);

paymentWriter.addRows([
  { id: 1, amount: 50, to: "bahar", notes: "web dev work" },
  { id: 2, amount: 100, to: "peach", notes: "birthday present" },
]);

paymentWriter.save("./data/payments.csv");
