$("form").submit(function (e) {
    e.preventDefault();
    var user = $("input[user='name']").val();
    var password = $("input[password='password']").val();
   
    
  $(".data-table tbody").append("<tr nameHere='" + name + "' passwordHere='" + password + "'  >  <td>" + name + "</td><td>" + password  + "</td><td> <button class='btn btn-info btn-edit ms-2 mt-2'>Edit</button><button class='btn btn-danger btn-delete ms-2 mt-2'>Delete</button></td></tr>");


    $("input[name='name']").val('');
    $("input[password='password']").val('');
    
    
    

$("body").on("click", ".btn-delete", function () {
    $(this).parents("tr").remove();
});

$("body").on("click", ".btn-edit", function () {
    var name = $(this).parents("tr").attr('nameHere');
    var password = $(this).parents("tr").attr('passwordHere');
    
 



    $(this).parents("tr").find("td:eq(0)").html('<input name="edit_name" class="form-control" value="' + name + '">');
    
    $(this).parents("tr").find("td:eq(2)").html('<input pass="edit_password" class="form-control" value="' + password + '">');
    
   


    $(this).parents("tr").find("td:eq(2)").prepend("<button class='btn btn-info btn-update ms-2 mt-2'>Update</button><button class='btn btn-warning btn-cancel ms-2 mt-2'>Cancel</button>")
    $(this).hide();
});

$("body").on("click", ".btn-cancel", function () {
    var name = $(this).parents("tr").attr('nameHere');
    var password = $(this).parents("tr").attr('passwordHere');
   
   

    $(this).parents("tr").find("td:eq(0)").text(name);
    $(this).parents("tr").find("td:eq(1)").text(password);
    
   
    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-update").remove();
    $(this).parents("tr").find(".btn-cancel").remove();
});

$("body").on("click", ".btn-update", function () {
    var name = $(this).parents("tr").find("input[name='edit_name']").val();
    
    var password = $(this).parents("tr").find("input[name='edit_password']").val();
    
   
   
    $(this).parents("tr").find("td:eq(0)").text(name);
    
    $(this).parents("tr").find("td:eq(1)").text(password);
    
    
   


    $(this).parents("tr").attr('nameHere', name);
    
    $(this).parents("tr").attr('passwordHere', password);
    
    
    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-cancel").remove();
    $(this).parents("tr").find(".btn-update").remove();
    });
});