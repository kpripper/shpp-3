function DataTable(config, data) {
  let tableHtml = `<table>
   <thead>
       <tr>
           <th>№</th>
           <th>${config.columns[0].title}</th>
           <th>${config.columns[1].title}</th>
           <th>${config.columns[2].title}</th>
       </tr>
   </thead>
   <tbody>`

   console.log(data)

   for (let i = 0; i < data.length; i++) {
    tableHtml += `<tr>
        <td>${i+1}</td>
         <td>${data[i].name}</td>
         <td>${data[i].surname}</td>
        <td>${data[i].age}</td>
     </tr>`
   }

   tableHtml += `
   </tbody>
 </table>`

  console.log(tableHtml)
  document.getElementById('usersTable').innerHTML = tableHtml
}

const config1 = {
    parent: '#usersTable',
    columns: [
      { title: 'Имя', value: 'name' },
      { title: 'Фамилия', value: 'surname' },
      { title: 'Возраст', value: 'age' },
    ],
  }

const users = [
  { id: 30050, name: 'Вася', surname: 'Петров', age: 12 },
  { id: 30051, name: 'Вася', surname: 'Васечкин', age: 15 },
]

DataTable(config1, users)

//create Tabulator on DOM element with id "example-table"
var table = new Tabulator("#example-table", {
   // height:auto, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
    data:users, //assign data to table
    layout:"fitColumns", //fit columns to width of table (optional)
    columns:[ //Define Table Columns
        {title:"Name", field:"name", width:150},
        {title:"Age", field:"age", hozAlign:"left"},
    //    {title:"Favourite Color", field:"col"},
        {title:"Surname", field:"surname", sorter:"string", hozAlign:"center"},
    ],
});

//trigger an alert message when the row is clicked
table.on("rowClick", function(e, row){ 
   alert("Row " + row.getData().id + " Clicked!!!!");
});

