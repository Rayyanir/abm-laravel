$(document).ready(function() {
    $('#correcto').hide();
    
    $(".delete").click( function(e) {
        e.preventDefault();
       
        let parent = $(this).attr('id');

        const miTr = $(this);

        $.ajax({
            type: "DELETE",
            url: `user/${parent}`,
            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            success: function(response) {
                miTr.parents("tr").remove();
                $('#correcto').show();

                setTimeout(function() {
                    $("#correcto").fadeOut(1500);
                },3000);

            }
        });
         
    }); 


    $(".edit").click(function(e){
        e.preventDefault();

        let parent = $(this).attr('id');

        $.ajax({
            type: "GET",
            url: `user/${parent}/edit`,
            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            success: function(response) {	
                
                console.log(response)

                $("#id_user").val(response.id)

                $("#name").val(response.name)

                $("#email").val(response.email)

                $("#editUser").show();

                $('#editUser').modal('show')

            }
        });
    })
    
    $("#update").on('click',function(e){
        e.preventDefault();

             let id =   $("#id_user").val();

             let name = $("#name").val();

             let email = $("#email").val();

             let password = $("#password").val();

        $.ajax({
            type: "PUT",
            url: `user/${id}`,
            data:{id:id,name:name,email:email,password:password},
            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            success: function(response) {	
                
                $('#editUser').modal('hide')

                $('#correcto').show();

                setTimeout(function() {
                    $("#correcto").fadeOut(1500);
                },3000);

                $("#reload").load('user #reload',function(){
                    $(".delete").click( function(e) {
                        e.preventDefault();
                       
                        let parent = $(this).attr('id');
                
                        const miTr = $(this);
                
                        $.ajax({
                            type: "DELETE",
                            url: `user/${parent}`,
                            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                            success: function(response) {
                                miTr.parents("tr").remove();
                                $('#correcto').show();
                
                                setTimeout(function() {
                                    $("#correcto").fadeOut(1500);
                                },3000);
                
                            }
                        });
                         
                    }); 
                
                
                    $(".edit").click(function(e){
                        e.preventDefault();
                
                        let parent = $(this).attr('id');
                
                        $.ajax({
                            type: "GET",
                            url: `user/${parent}/edit`,
                            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                            success: function(response) {	
                                
                
                                $("#id_user").val(response.id)
                
                                $("#name").val(response.name)
                
                                $("#email").val(response.email)
                
                                $("#editUser").show();
                
                                $('#editUser').modal('show')
                
                            }
                        });
                    })
                });
            }
        });
    })

                   
}); 