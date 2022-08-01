// let mahasiswa = {
//   nama: "Rizki",
//   nim: "12345",
//   email: "rizky@gmail.com",
// };

// console.log(JSON.stringify(mahasiswa));

// AJAX
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.readyState == 4 && xhr.status == 200) {
//     let mahasiswa = JSON.parse(this.responseText);
//     console.log(mahasiswa);
//   }
// };
// xhr.open("GET", "test.json", true);
// xhr.send();

// Jquery
$.getJSON("test.json", function (data) {
  console.log(data);
});
