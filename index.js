
function contactReport() {
    $('#getTable').DataTable({})
}

// Get data in datatable

$.ajax({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
    dataType: "json",
    success: function (response) {
        // console.log(response);
        $("#getTable").DataTable().destroy();
        $("#getTable tbody").empty();
        $.each(response, function (indexInArray, val) {
            $('#getTable tbody').append(`<tr>
             <td><input type="checkbox" value=${val.id} name="ids"/></td>
             <td>${val.name}</td>
             <td>${val.username}</td>
             <td>${val.email}</td>
             <td><button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#userDetails" onclick="getuserdetails(${val.id})">i</button></td>
             </tr>
             `);
        });
    },
    complete: () => contactReport()
});



// Get by Id


function getuserdetails(id) {
    console.log(id, "jkshjkas");
    $.ajax({
        type: "GET",
        url: `https://jsonplaceholder.typicode.com/users/${id}`,
        dataType: "json",
        success: function (response) {
            console.log(response);
            $('#username').text(response.username)
            $('#name').text(response.name)
            $('#email').text(response.email)
            $('#phone').text(response.phone)
            $('#address').text(response.address.street + "," + response.address.city)
            $('#website').text(response.website)
            $('#company').text(response.company.bs + "," + response.company.catchPhrase + "," + response.company.name)
        }
    });
}


// Get checkboxes values

const btn = document.querySelector('#save');
btn.addEventListener('click', (event) => {
    let checkboxes = document.querySelectorAll('input[name="ids"]:checked');
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    alert(values);
    console.log("userId",values);
});


