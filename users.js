let users = [];

function showUsers() {
    console.log("Hola mundo");
    fetch("http://localhost/api-php/listusers.php")
        .then(response => resul = response.json())
        .then(data => {
            users = data
            renderUsers()
            /*console.log(users)*/
        }
        )

        .catch(error => console.log(error));
}
function renderUsers() {
    clearTableUsers();
    const table = document.getElementById("table-users")
    for (let i = 0; i < users.length; i++) {
        const row = document.createElement('tr');
        row.setAttribute('class', 'row-user');
        const colId = document.createElement('td');
        colId.innerHTML = users[i].id;
        const colName = document.createElement('td');
        colName.innerHTML = users[i].username;
        const colEmail = document.createElement('td');
        colEmail.innerHTML = users[i].email;
        const colBirthdate = document.createElement('td');
        colBirthdate.innerHTML = users[i].birthdate;
        const colSex = document.createElement('td');
        colSex.innerHTML = users[i].sex;
        
        const colUpdate = document.createElement('td');

        row.appendChild(colId);
        row.appendChild(colName);
        row.appendChild(colEmail);
        row.appendChild(colBirthdate);
        row.appendChild(colSex);
        row.appendChild(colUpdate);


        const btnUpdate = document.createElement('button');
        btnUpdate.innerHTML = 'Actualizar';
        btnUpdate.setAttribute('onclick',  `showFrmUpdate('${users[i].id}','${users[i].username}','${users[i].email}','${users[i].birthdate}','${users[i].sex}')`)
        colUpdate.appendChild(btnUpdate);

        const btnDelete = document.createElement('button');
        btnDelete.innerHTML = 'Eliminar';
        btnDelete.setAttribute('onclick', `confirmDelete('${users[i].id}','${users[i].username}','${users[i].email}','${users[i].birthdate}','${users[i].sex}')`)
        colUpdate.appendChild(btnDelete)
        
        table.appendChild(row);
    }
}
function clearTableUsers() {
    const rows = document.getElementsByClassName('row-user');
    const users = [...rows];
    users.map(user => user.remove());

}

function closeFrmUpdate() {
    const dialog = document.getElementById('frmUpdate');
    dialog.showModal();
}

function showFrmUpdate(id, username, email, birthdate, sex) {
    const dialog = document.getElementById('frmUpdate');
    const txtid = document.getElementById('id');
    txtid.value = id;
    const txtname = document.getElementById('name');
    txtname.value = username;
    const txtemail = document.getElementById('email');
    txtemail.value = email;
    const txtbirthdate = document.getElementById('birthdate');
    txtbirthdate.value = birthdate;
    const txtsex = document.getElementById('sex');
    txtsex.value = sex;
    dialog.showModal();
}


function update() {
    const id = document.getElementById('id');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const birthdate = document.getElementById('birthdate');
    const sex = document.getElementById('sex');
    const user = {
        id: id.value,
        name: name.value,
        email: email.value,
        birthdate: birthdate.value,
        sex: sex.value
    }
    fetch("http://localhost/api-php/update.php", { method: "POST", body:JSON.stringify(user) })
        .then(() => alert('Registro actualizado'))
        .catch((error) => {console.log(error);
            alert('Error: el registro no se actualizo')
        })
}

function confirmDelete(id, name, email, birthdate, sex) {
    const idToDelete = document.getElementById('idToDelete');
    idToDelete.value = id;
    const spanName = document.getElementById('spanName');
    spanName.innerHTML = name;
    const dialogDelete = document.getElementById('frmDelete');
    dialogDelete.showModal();
}
function deleteUser() {
    const id = document.getElementById('idToDelete').value;
    fetch(`http://localhost/api-php/delete.php?id=${id}`)
        .then(() => {

            alert('rergistro eliminado')
            showUsers()
        })
        .catch((error) => {
            alert('No se pudo eliminar')
            console.log(error);
        })
}