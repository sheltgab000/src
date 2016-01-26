/**
 * Created by sheltgab000 on 11/30/2015.
 */
function createHeaderRow(headers){
    var row = createTableRow();
    for(i = 0; i < headers.length; i++){
        var header = document.createElement("th");
        header.appendChild(document.createTextNode(headers[i]));
        header.style.border = "1px solid black";
        header.style.borderCollapse = "collapse";
        header.id= "header" + header[i];
        row.appendChild(header);
    }
    return row;
}

function createTableRow(){
    var row = document.createElement("tr");
    return row;
}

function createTableData(innerData, textBool){
    var data = document.createElement("td");
    if(textBool){
        data.appendChild(document.createTextNode(innerData));
    }
    else{
        data.appendChild(innerData);
    }

    return data;
}

function clearChildNodes(id){
    var parent = document.getElementById(id);
    while(parent.hasChildNodes()){
        parent.removeChild(parent.firstChild);
    }
}