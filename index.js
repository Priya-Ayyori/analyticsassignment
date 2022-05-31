
function contactReport() {
    $('#getTable').DataTable({})
  }
$.ajax({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
    dataType: "json",
    success: function (response) {
        // console.log(response);
        $("#getTable").DataTable().destroy();
        $("#getTable tbody").empty();
        $.each(response, function (indexInArray, val) { 
             $('#getTable tbody').append(` <tr>
             <td><input type="checkbox" data-id=${val.id} onclick='handleClick(this);'/></td>
             <td>${val.name}</td>
             <td>${val.username}</td>
             <td>${val.email}</td>
             <td><button class="btn btn-primary" data-toggle="modal" data-target="#userDetails">i</button></td>
         </tr>
             `);
        });
    },
    complete: () => contactReport()
});
function handleClick(cb) {
   let val= $("input[type='checkbox']").val();
    console.log(val);
    
  }