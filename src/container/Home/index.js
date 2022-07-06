import { HyperFormula } from 'hyperformula';
import { HotTable } from "@handsontable/react";
import { registerAllModules } from 'handsontable/registry';
import config from '../../config';
import { redefineRowHeaders, redefineColHeaders, redefineCellValues } from '../../Helper/Table';
import "handsontable/dist/handsontable.min.css";
import { useEffect, useState } from 'react';

// register Handsontable's modules
registerAllModules();

const Home = () => {
  const [colData, setColData] = useState([]);
  const [rowData, setRowData] = useState([]);
  const [cellData, setCellData] = useState([]);
  const [configData, setConfigData] = useState({});

  const { columnHeaders, rowHeaders, cellValues, rows, columns, title } = configData;

  useEffect(() => {
    setConfigData(config);
  }, []);

  useEffect(() => {
    setColData(redefineColHeaders(columnHeaders, columns));
    setRowData(redefineRowHeaders(rowHeaders, rows));
    setCellData(redefineCellValues(cellValues, rows, columns, rowHeaders, columnHeaders));
  }, [configData])

  const onClickSave = () => {
    console.log(cellData);
  };

  console.log(configData)

  const onUpload = (e) => {
   const file = e?.target?.files[0];
   console.log(file);
   if (file?.type === 'application/json') {
    const reader =  new FileReader();
    reader.onload = function(event) {
      // The file's text will be printed here
      console.log(event.target.result);
      setConfigData(JSON.parse(event.target.result));

    };
    reader.readAsText(file);
   } else {
    alert('This is not a config file, try again !');
   }
  }

  return (
    <div id="hot-app">
      <div style={{ margin: '5px 5px'}}>Upload File</div>
      <input style={{ margin: '5px 5px'}} type="file" max={1} onChange={onUpload}></input>
      <div style={{ margin: '20px 0px', textAlign: 'center'}}>{title}</div>
      <HotTable
        data={cellData}
        // maxRows={rows}
        // maxCols={columns}
        title={title}
        colHeaders={colData?.headers}
        rowHeaders={rowData}
        columns={cellData?.length === colData?.config?.length ? colData?.config : null}
        stretchH='all'
        autoColumnSize
        rowHeaderWidth={100}
        width='auto'
        // formulas={{ engine: HyperFormula }}
        // beforeChange={onChange}
        licenseKey="non-commercial-and-evaluation">
      </HotTable>
      {false && <button onClick={onClickSave}>Save</button>}
    </div>
  );
};

export default Home;
