import rawData from "./data.json";
import Paginator from "./components/Paginator";
import ExcelJS from "exceljs";

const exportExcelFile = () => {
  const workbook = new ExcelJS.Workbook();
  const ws = workbook.addWorksheet("GPXcript", { properties: { tabColor: { argb: "FFC0000" } } });

  ws.addTable({
    name: "MyTable",
    ref: "A1",
    headerRow: true,
    totalsRow: true,
    style: {
      theme: "TableStyleLight9",
      showRowStripes: true,
    },
    columns: headerify(rawData), //[ ...{name: 'Date'}...],
    rows: rawData.map((e) => Object.values(e)), //[ ...  [Hillary,	Hampton] ...]
  });

  function headerify(d) {
    let columns = Object.keys(d[0]).map((e) => {
      return { name: e };
    });
    columns.at(-1).totalsRowFunction = "count"; //optional
    columns.at(-2).totalsRowFunction = "average"; //optional
    return columns;
  }

  workbook.xlsx.writeBuffer().then(function (data) {
    const blob = new Blob([data], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "GPXcript.xlsx";
    anchor.click();
    window.URL.revokeObjectURL(url);
  });
};

function App() {
  return (
    <>
      <Paginator data={rawData} singlePageLines={8} />
      <button className="btn btn-primary" onClick={exportExcelFile}>
        Get .xlsx
      </button>
    </>
  );
}

export default App;
