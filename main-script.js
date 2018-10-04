 $(document).ready(function(){
     
     $( function() {
       $( "#job-from-1" ).datepicker({ dateFormat: 'dd/mm/yy' });
       $( "#job-to-1" ).datepicker({ dateFormat: 'dd/mm/yy' });
     });

     $("#create").click(function(){


      var table = $("#project-list");

 
      var title = $("#project-title").val();
      var supervisor=$("#project-supervisor").val();
      
      table.append('<tr><th>'+title+'</th><th>'+supervisor+'</th><th><button type="button" class="close" aria-label="Close" <span aria-hidden="true">&times;</span> </button></th></tr>');
      


     })

     


   });    
