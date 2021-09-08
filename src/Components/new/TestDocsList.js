import DocumentList from "./DocumentList";

const dataTest = [
  {
    id: 1,
    name: "in_invoice",
    date: "9/12/2021",
    tag: "Pending",
    amount: 563,
    VAT: 121,
    description: "Dokument potrebny na spracovanie",
  },
  {
    id: 1,
    name: "receipt",
    date: "9/12/2021",
    tag: "Pending",
    amount: 563,
    VAT: 121,
    description: "Dokument potrebny na spracovanie",
  },
  {
    id: 2,
    name: "receipt",
    date: "9/12/2021",
    tag: "Pending",
    amount: 563,
    VAT: 121,
    description: "Dokument potrebny na spracovanie",
  },
  {
    id: 3,
    name: "in_invoice",
    date: "9/12/2021",
    tag: "Pending",
    amount: 563,
    VAT: 121,
    description: "Dokument potrebny na spracovanie",
  },
  {
    id: 4,
    name: "out_invoice",
    date: "9/12/2021",
    tag: "Pending",
    amount: 563,
    VAT: 121,
    description: "Dokument potrebny na spracovanie",
  },
  {
    id: 5,
    name: "out_invoice",
    date: "9/12/2021",
    tag: "Pending",
    amount: 563,
    VAT: 121,
    description: "Dokument potrebny na spracovanie",
  },
  {
    id: 6,
    name: "out_invoice",
    date: "9/12/2021",
    tag: "Pending",
    amount: 563,
    VAT: 121,
    description: "Dokument potrebny na spracovanie",
  },
  {
    id: 7,
    name: "out_invoice",
    date: "9/12/2021",
    tag: "Pending",
    amount: 563,
    VAT: 121,
    description: "Dokument potrebny na spracovanie",
  },
];

const TestDocsList = () => {
  return <DocumentList dataArray={dataTest} />;
};

export default TestDocsList;
