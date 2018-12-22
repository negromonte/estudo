var selectedRow = null

function onFormSubmit() {
	if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
	// body...
}

function readFormData(){
	var formData = {};
	formData["nomeCompleto"] = document.getElementById("nomeCompleto").value;
	formData["Email"] = document.getElementById("Email").value;
	formData["Senha"] = document.getElementById("Senha").value;
	formData["dataNascimento"] = document.getElementById("dataNascimento").value;
	formData["Cargo"] = document.getElementById("Cargo").value;
	formData["Apelido"] = document.getElementById("Apelido").value;
	return formData;

}
function insertNewRecord(data){
	var table = document.getElementById("employeeList").getElementByTagName('tbody')[0];	
	var newRow = table.insertRow(table.length);
	cell1 = newRow.insertCell(0);
	cell1.innerHTML = data.nomeCompleto;
	cell2 = newRow.insertCell(1);
	cell2.innerHTML = data.Email;
	cell3 = newRow.insertCell(2);
	cell3.innerHTML = data.Senha;
	cell4 = newRow.insertCell(3);
	cell4.innerHTML = data.dataNascimento;
	cell5 = newRow.insertCell(4);
	cell5.innerHTML = data.Cargo;
	cell6 = newRow.insertCell(5);
	cell6.innerHTML = data.Apelido;
	cell6 = newRow.insertCell(6);
	cell6.innerHTML = `<a onClick="onEdit(this)">Edite</a>
	                   <a onClick="onDelete(this)">Delete</a>`; 


}
function resetForm(){
	document.getElementById("nomeCompleto").value = "";
	document.getElementById("email").value = "";
	document.getElementById("senha").value = "";
	document.getElementById("dataNascimento").value = "";
	document.getElementById("cargo").value = "";
	document.getElementById("apelido").value = "";
}
function onEdit(td){
	selectedRow = td.parentElement.parentElement;
	document.getElementById("nomeCompleto").value = selectedRow.cells[0].innerHTML;
	document.getElementById("email").value = selectedRow.cells[1].innerHTML;
	document.getElementById("senha").value = selectedRow.cells[2].innerHTML;
	document.getElementById("dataNascimento").value = selectedRow.cells[3].innerHTML;
	document.getElementById("cargo").value = selectedRow.cells[4].innerHTML;
	document.getElementById("apelido").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData){
	selectedRow.cells[0].innerHTML = formData.nomeCompleto;
	selectedRow.cells[0].innerHTML = formData.email;
	selectedRow.cells[0].innerHTML = formData.senha;
	selectedRow.cells[0].innerHTML = formData.dataNascimento;
	selectedRow.cells[0].innerHTML = formData.cargo;
	selectedRow.cells[0].innerHTML = formData.apelido;
}
function onDelete(td) {
	if(confirm('Você tem certeza que deseja deletar ?')){
		row = td.parentElement.parentElement;
		document.getElementById("employeeList").deleteRow(row.rowIndex);
		resetForm();
	}
}
function validate(){
	isValid = true;
	if (document.getElementById("nomeCompleto").value == "") {
		isValid = false;
		document.getElementById("nomeCompletoValidationError").classList.remove("hide");
	} else {
		isValid = true;
		if (!document.getElementById("nomeCompletoValidationError").classList.contains("hide")) 
			document.getElementById("nomeCompletoValidationError").classList.add("hide");
	}
	return isValid;
}