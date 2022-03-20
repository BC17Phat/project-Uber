// toàn dự án chính đặt trong main
// Nguoi tạo : uong tri phat
// Ngày : 19/03/2022

//  xem người dùng nhập loại radio button nào trả KQ về uber đó
function LayLoaiXe() {
    // thuộc tính radio co thuộc tính check loại
    var ketQua;
   
    var uberX = document.getElementById("uberX").checked;
    var uberSUV = document.getElementById("uberSUV").checked;
    var uberBlack = document.getElementById("uberBlack").checked;
    // uberX măc định true, !usberX là false
    if (uberX) {
        // chạy lệnh bên trong
        ketQua = "uberX";
     
    } else if (uberSUV) {
        ketQua = "uberSUV";
   
    } else if (uberBlack) {
        ketQua = "uberBlack";
     
    }
    // để trả kết quả  của cái hàm "sau khi chạy"
    return ketQua;
 

  
}

function waitingPrice(){

    var waitingPrice;
    if (uberX) {
        // chạy lệnh bên trong
        waitingPrice = 2000;
    } else if (uberSUV) {
        waitingPrice = 3000;
    } else if (uberBlack) {
        waitingPrice = 3500;
    }
    // để trả kết quả  của cái hàm "sau khi chạy"
    return waitingPrice;
}



// tạo 1 biến lưu trữ giá trị và lấy giá trị gán cho cái biến đó

// var laySoKM = document.getElementById('soKM').value;
// khi muốn click vào 1 nút để lấy ra được giá trị của nó pntn
// sukien = hàm bên file html nút tính tiền đặt cho nó 1 sự kiện onclick = TinhTien và qa file js định nghĩa cho hàm đó

/** hàm này không có đối số
 * Trả về : tong tien dua vao soKM nguoi dung nhap
 * alert để thử xem nó ket noi ko
 */
function TinhTien() {
    var laySoKM = +document.getElementById("soKM").value;
    var layThoiGianCho = +document.getElementById("thoiGianCho").value;
    layThoiGianCho = parseFloat(layThoiGianCho); // chuyển chuoi so thành số thực 
    // console.log(laySoKM);
    // console.log(layThoiGianCho);
    var divThanhTien = document.getElementById("divThanhTien").style.display = "block";
    var spanTien = document.getElementById("xuatTien");
    //       // Tạm Tính
    //     //parseFloat đưa 1 chuỗi số thành số thực
    //     // parseIn là biến chuỗi thành số nguyên ( ko sd TH này được vì đôi khi 5.5km)
    //     var thanhTien = parseFloat(laySoKM) * 4000 + parseFloat(layThoiGianCho)  * 2000 ;
    //    // innerHTML là viêt chuỗi text ra ngoài
    //     spanTien.innerHTML = thanhTien;
    var loaiXe = LayLoaiXe();
    var waitingPricex = waitingPrice()
    // console.log(loaiXe);
    // console.log(waitingPrice);
  

    // Tính Tiền
    //   0-1 km         20km          nkm  
    //      8k           12k           10k 
    var thanhTien = 0;
    switch (loaiXe) {
        case 'uberX':
            if (laySoKM <= 1) {
                thanhTien = laySoKM * 8000 + layThoiGianCho * waitingPricex;
            } else if (laySoKM > 1 && laySoKM <= 20) {
                // 1 && 1 --> 1
                // 1 && 0 --> 0
                // 0 && 0 --> 0
                thanhTien = 1 * 8000 + (laySoKM - 1) * 12000 + layThoiGianCho * waitingPricex;
            } else if (laySoKM > 20) {

                thanhTien = 1 * 8000 + 19 * 10000 +(laySoKM - 20)*10000+ layThoiGianCho * waitingPricex;
            }
            break;
        case 'uberSUV':
            if (laySoKM <= 1) {
                thanhTien = laySoKM * 9000 + layThoiGianCho * waitingPricex;
            } else if (laySoKM > 1 && laySoKM <= 20) {
             
                thanhTien =1*9000 +(laySoKM-1) * 14000 + layThoiGianCho * waitingPricex;
            } else if (laySoKM > 20) {

                thanhTien =1*9000 + (19*14000)+ (laySoKM-20) * 12000 + layThoiGianCho * waitingPricex;
            }
            break;
        case 'uberBlack':
            if (laySoKM <= 1) {
                thanhTien = laySoKM * 10000 + layThoiGianCho * waitingPricex;
            } else if (laySoKM > 1 && laySoKM <= 20) {
               
                thanhTien =1*10000+ (laySoKM-1) * 16000 + layThoiGianCho * waitingPricex;
            } else if (laySoKM > 20) {

                thanhTien =1*10000+(19*16000)+ (laySoKM-20) * 14000 + layThoiGianCho * waitingPricex;
            }
            break;
    }
    // nếu ở đây ko khai báo nó vẫn tự tạo minh biến thành tiền nhưng khuyến cáo nên tạo biến cho nó
    //   var thanhTien =
    //     parseFloat(laySoKM) * 4000 + parseFloat(layThoiGianCho) * 2000;
    spanTien.innerHTML = thanhTien;
}

// cần tương tác vào người dùng xem họ dùng loại Uber nào
// ứng với các đk yc mà bài toán đặt ra hàm đó đặt ở trên