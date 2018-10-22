// var table = document.getElementById("table"); Узнать почему не работает!
/*var tr = document.getElementsByTagName("tr");
var td = null;

for (var i=0; i<tr.length; i++)
{
    td = tr[i].getElementsByTagName("td");
    	for (var n=0; n<tr.length;n++) {
        td[n].innerHTML = "<div>Hi!</div>";
    	}
}*/
string = "канал, который сделал (я) я и мой друг (я)";
console.log(string.length);
console.log(string.lastIndexOf("я"));

	/*function creTable() {
    for(i=1;i<=10;i++) {
        $('#table').append('<tr></tr>');
		 for(j=1;j<=10;j++) {
  			$('#table > tr:last').append('<td>'+i+'x'+j+'</td>');

        }
    }*/
 /* var section = {
		ID: [ID]
};
for (property in section) {
  var tr = '<tr>'; // создаем строку таблицы
  section[property].forEach(function(item) {
    tr += '<td>' + item + '</td>'; // добавляем столбцы в строку
  });
  tr += '</tr>'; // закрываем строку таблицы
  $('#table > tbody:last-child').append(tr); // добавляем полученную строку в дом
}*/
