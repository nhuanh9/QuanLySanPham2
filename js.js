let data = "";
let products = ['Sony Xperia', 'Samsung Galaxy',
    'Nokia 6', 'Xiaomi Redmi Note 4',
    'Apple iPhone 6S', 'Xiaomi Mi 5s Plus',
    'Apple iPhone 8 Plus'];

function show() {
    document.getElementById("amoutProduct").innerText = products.length + " products";
    for (let i = 0; i <products.length; i++) {
        data += "<tr>";
        data += "<td style='width: 500px;'>" + products[i] + "</td>";
        data += "<td><input type='button' value='Edit' onclick='edit(" + i + ")'></td>";
        data += "<td><input type='button' value='Delete' onclick='del(" + i + ")'></td>";
        data += "</tr>";
    }
    document.getElementById("showProduct").innerHTML = data;
}
function edit(i) {
    let editForm = '<div class="container"><p>Edit</p>';
    let oldPro = products[i];
    editForm += '<input type="text" id="editName" value="'+oldPro+'">';
    editForm += "<input type='button' value='Comfirm' onclick='confirmEdit(" + i + ")'>";
    editForm += '</div>';
    document.getElementById("Edit").innerHTML = editForm;
}
function confirmEdit(i) {
    products[i] = document.getElementById("editName").value;
    data = "";
    show();
    document.getElementById("Edit").innerHTML = "";
}
function addNewProduct() {
    let newData = document.getElementById("newProduct").value ;
    products.push(newData);
    data = "";
    show();
}
function del(i) {
    products.splice(i,1);
    data = "";
    show();
}
