export const redefineRowHeaders = (rowHeaders = [], rows) => {
    const rHeaders = rows ? rowHeaders?.slice(0, rows) : [ ...rowHeaders ];
    const nRHeaders = [];
    if (rHeaders && rHeaders?.length > 0) {
        for (let i = 0; i < rHeaders?.length; i += 1) {
            switch (typeof(rHeaders[i])) {
                case 'object':
                    if (!Array?.isArray(rHeaders[i])) {
                        nRHeaders.push(rHeaders[i]?.name || '');
                    } else {
                        nRHeaders.push('');
                    }                          
                    break;
            
                default:
                    nRHeaders.push(rHeaders[i] || '');
                    break;
            }
        }
    }
    return nRHeaders;
};

export const redefineColHeaders = (colHeaders = [], cols) => {
    const dataTypes = ['text', 'numeric', 'dropdown'];
    const cHeaders = cols ? colHeaders?.slice(0, cols) : [ ...colHeaders ];
    const nCHeaders = [];
    const nCConfigs = [];
    if (cHeaders && cHeaders?.length > 0) {
        for (let i = 0; i < cHeaders?.length; i += 1) {
            switch (typeof(cHeaders[i])) {
                case 'object':
                    if (!Array?.isArray(cHeaders[i])) {
                        nCHeaders.push(cHeaders[i]?.name || '');
                        nCConfigs.push(dataTypes?.includes(cHeaders[i]?.dataType) ? { type: cHeaders[i]?.dataType } : { type: 'text' });
                    } else {
                        nCHeaders.push('');
                        nCConfigs.push({ type: 'text' });
                    }                          
                    break;
            
                default:
                    nCHeaders.push(cHeaders[i] || '');
                    nCConfigs.push({ type: 'text' });
                    break;
            }
        }
    }
    return { headers: nCHeaders, config: nCConfigs };
};

export const redefineCellValues = (cellValues = [], rows, cols, rowHeaders, colHeaders) => {

    let rCellValues = [ ...cellValues ];

    if ((rows && rows < cellValues?.length) || rowHeaders?.length < cellValues?.length) {
        rCellValues = rCellValues?.slice(0, rows || rowHeaders?.length);
    }

    if ((rows && rows > cellValues?.length) || (rowHeaders && rowHeaders?.length > cellValues?.length)) {
        for (let i = cellValues?.length; i < (rows ?? rowHeaders?.length); i++) {
            rCellValues[i] = [];
        };
    }


    // (cols && cols > cellValues[0]?.length) || (colHeaders && colHeaders?.length > cellValues[0]?.length)
    if ((cols && cols < cellValues[0]?.length) || colHeaders?.length < cellValues?.length) {
        rCellValues = rCellValues?.map((eR) => eR?.slice(0, cols || colHeaders?.length));
    } else {
        rCellValues = rCellValues?.map((eR, r) => Array.from(Array(cols || colHeaders?.length || cellValues[0]?.length).keys())?.map((eC, c) => eR[c] ?? ""));
    }


    return rCellValues?.length > 0 ? [...rCellValues] : null;
};