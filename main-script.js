 $(document).ready(function () {

  function test(){
var x=30;

  }

  var test2=new test()
  alert(test2.x)

   readTextFile("projects.txt");

   $(function () {
     $("#job-from-1").datepicker({
       dateFormat: 'dd/mm/yy'
     });
     $("#job-to-1").datepicker({
       dateFormat: 'dd/mm/yy'
     });
   });

   $("#create").click(function () {


     var table = $("#project-list");


     var title = $("#project-title").val();
     var supervisor = $("#project-supervisor").val();

     table.append('<tr><th>' + title + '</th><th>' + supervisor + '</th><th><button type="button" class="close" aria-label="Close" <span aria-hidden="true">&times;</span> </button></th></tr>');



   })


 });

function readTextFile(file) {
   var rawFile = new XMLHttpRequest();
   rawFile.open("GET", file, false);
   rawFile.onreadystatechange = function () {
     if (rawFile.readyState === 4) {
       if (rawFile.status === 200 || rawFile.status == 0) {
         var allText = rawFile.responseText;
         loadtable(allText);
       }
     }
   }
   rawFile.send(null);
 }

function loadtable(data) {

   var lines = data.split("\n");

   // Loop through all lines of record
   $.each(lines, function (n, urlRecord) {
     var line = urlRecord.split("-");
     var table = $("#project-list");


     var title = line[0];
     var supervisor = line[1];

     table.append('<tr><th>' + title + '</th><th>' + supervisor + '</th><th><button type="button" class="close" aria-label="Close" <span aria-hidden="true">&times;</span> </button></th></tr>');

     $('#simpleDiv').append('<div>' + urlRecord + '</div>');
   });
 }