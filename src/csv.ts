// csv writer project

import { appendFileSync } from "fs";

interface Payment {
  id: number;
  amount: number;
  to: string;
  notes: string;
}

type PaymentColomns = ("id" | "amount" | "to" | "notes")[];

class CSVWriter {
  constructor(private columns: PaymentColomns) {
    this.csv = this.columns.join(",") + "\n";
  }

  private csv: string;

  save(fileName: string): void {
    appendFileSync(fileName, this.csv);
    this.csv = "\n";
    console.log("saved to", fileName);
  }

  addRows(values: Payment[]): void {
    let rows = values.map((v) => this.formattRow(v));

    this.csv += rows.join("\n");
    console.log(this.csv);
  }

  private formattRow(p: Payment): string {
    return this.columns.map((col) => p[col]).join(",");
  }
}

const writer = new CSVWriter(["id", "amount", "to", "notes"]);

writer.addRows([
  { id: 1, amount: 50, to: "bahar", notes: "web dev work" },
  { id: 2, amount: 100, to: "peach", notes: "birthday present" },
]);

writer.save("./data/payments.csv");
