import Handsontable from "handsontable";
import { HyperFormula } from 'hyperformula';
import { HotTable, HotColumn } from "@handsontable/react";
import { registerAllModules } from 'handsontable/registry';
import "handsontable/dist/handsontable.min.css";
import { textRenderer } from 'handsontable/renderers/textRenderer';

// register Handsontable's modules
registerAllModules();

const RowData = [
  {
    DpCode: 'ANTP001',
    DpName: 'Staggered Board',
    Source: 'Intergrated Report',
    CompanyName: 'Crompton Greaves Consumer Electricals Limited',
    Description: 'Does the company have staggered board ?',
    Response: 1123,
    Derived_Response: '=SUM(F1, 2)',
    Formula: 'SUM(F1, 2)',
    TextSnippet: 'No Way',
    PageNo: '98',
    ScreenShot: 'ScreenShot',
    AnalystComment: '',
    Error: true,
    Comment: '' 
  }, {
    DpCode: 'ANTP001',
    DpName: 'Staggered Board',
    Source: 'Intergrated Report',
    CompanyName: 'Crompton Greaves Consumer Electricals Limited',
    Description: 'Does the company have staggered board ?',
    Response: 89,
    Derived_Response: '=SUM(F1, F2, 2)',
    Formula: 'SUM(F1, F2, 2)',
    TextSnippet: 'No Way',
    PageNo: '98',
    ScreenShot: 'ScreenShot',
    AnalystComment: '',
    Error: true,
    Comment: '' 
  },{
    DpCode: 'ANTP001',
    DpName: 'Staggered Board',
    Source: 'Intergrated Report',
    CompanyName: 'Crompton Greaves Consumer Electricals Limited',
    Description: 'Does the company have staggered board ?',
    Response: 8123,
    Derived_Response: '=SUM(F2, 2)',
    Formula: 'SUM(F2, 2)',
    TextSnippet: 'No Way',
    PageNo: '98',
    ScreenShot: 'ScreenShot',
    AnalystComment: '',
    Error: true,
    Comment: '' 
  },{
    DpCode: 'ANTP001',
    DpName: 'Staggered Board',
    Source: 'Intergrated Report',
    CompanyName: 'Crompton Greaves Consumer Electricals Limited',
    Description: 'Does the company have staggered board ?',
    Response: 12002,
    Derived_Response: '=SUM(F3, 2)',
    Formula: 'SUM(F3, 2)',
    TextSnippet: 'No Way',
    PageNo: '98',
    ScreenShot: 'ScreenShot',
    AnalystComment: '',
    Error: true,
    Comment: '' 
  },{
    DpCode: 'ANTP001',
    DpName: 'Staggered Board',
    Source: 'Intergrated Report',
    CompanyName: 'Crompton Greaves Consumer Electricals Limited',
    Description: 'Does the company have staggered board ?',
    Response: 919,
    Derived_Response: '=IF(F4 > F3,"TRUE","FALSE")',
    Formula: 'IF(F4 > F3,"TRUE","FALSE")',
    TextSnippet: 'No Way',
    PageNo: '98',
    ScreenShot: 'ScreenShot',
    AnalystComment: '',
    Error: true,
    Comment: '' 
  },{
    DpCode: 'ANTP001',
    DpName: 'Staggered Board',
    Source: 'Intergrated Report',
    CompanyName: 'Crompton Greaves Consumer Electricals Limited',
    Description: 'Does the company have staggered board ?',
    Response:8000,
    Derived_Response: '=AVERAGE(F5, 2)',
    Formula: 'AVERAGE(F5, 2)',
    TextSnippet: 'No Way',
    PageNo: '98',
    ScreenShot: 'ScreenShot',
    AnalystComment: '',
    Error: true,
    Comment: '' 
  },{
    DpCode: 'ANTP001',
    DpName: 'Staggered Board',
    Source: 'Intergrated Report',
    CompanyName: 'Crompton Greaves Consumer Electricals Limited',
    Description: 'Does the company have staggered board ?',
    Response: 12329,
    Derived_Response: '=SUM(F1, F6, 2)',
    Formula: 'SUM(F1, F6, 2)',
    TextSnippet: 'No Way',
    PageNo: '98',
    ScreenShot: 'ScreenShot',
    AnalystComment: '',
    Error: true,
    Comment: '' 
  },
];

const RowData2 = RowData?.map((e) => Object?.values(e));
const ColumnData = RowData[0] ? Object.keys(RowData[0]) : [];


const dataType = [{ type:'text', renderer: function(instance, td, row, col, prop, value, cellProperties) {
  if (!RowData2[row][12]) {
    cellProperties.readOnly = true;
  } else {
    cellProperties.readOnly = false;
  }
  textRenderer.apply(this, arguments);
} }, { type:'text' }, { type:'text' }, { type:'text' }, { type:'text' }, { type:'numeric' }, { type:'text', renderer: function(instance, td, row, col, prop, value, cellProperties) {
  cellProperties.readOnly = true;
  textRenderer.apply(this, arguments);
}}, { type:'text', renderer: function(instance, td, row, col, prop, value, cellProperties) {
  cellProperties.readOnly = true;
  textRenderer.apply(this, arguments);
}}, { type:'text' }, { type:'numeric' }, { type:'text' }, { type:'text' }, { type: 'checkbox' }, { type: 'text' }]

// const onChange = (changes,  source) => {
//   for (let i = 0; i < changes?.length; i ++) {
//     const rowIndex = changes[i][0], colIndex = changes[i][1], newValue = changes[i][3];
//     RowData2[rowIndex][colIndex] = newValue;
//   };

//   
// };
const App = () => {
  return (
    <div id="hot-app">
      <HotTable
        data={RowData2}
        colHeaders={ColumnData}
        rowHeaders={RowData?.map((e, i) => `20${13 + i}-20${14 + i}`)}
        autoColumnSize
        columns={dataType}
        stretchH='all'
        rowHeaderWidth={100}
        width='auto'
        formulas={{ engine: HyperFormula }}
        // beforeChange={onChange}
        licenseKey="non-commercial-and-evaluation">
      </HotTable>
    </div>
  );
};

export default App;
