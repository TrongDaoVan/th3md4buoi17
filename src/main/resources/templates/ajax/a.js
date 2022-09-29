// function showAll() {
//     // Lấy dữ liệu phía bankend
//     $.ajax({
//     // Loại của requet get pot push delete
//         type: "GET",
//
//         // Đường dẫn API
//         url: "/customers1",
//
//         // Xử lý lúc thành công
//         success: function (data) {
//           // Vẽ lại bảng
//             let content = "";
//             for (let i = 0; i < data.length; i++) {
//                 content += `<tr><td>${data[i].id}</td>
//         <td>${data[i].firstName}</td>
//         <td>${data[i].lastName}</td>
//         <td><a>Xóa</a></td></tr>>`;
//             }
//             document.getElementById("tbody").innerHTML = content;
//
//         }
//
//     })
//     event.preventDefault();
// }