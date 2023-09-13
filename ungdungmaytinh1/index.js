function cong() {
    let a = +document.getElementById("giatri2").value;
    let b = +document.getElementById("giatri1").value;
    let c = a + b ;
    document.getElementById("ketqua").innerHTML = c;
}
function tru(){
let a = +document.getElementById("giatri1").value;
let b = +document.getElementById("giatri2").value;
let c = a - b ;
document.getElementById("ketqua").innerHTML = c;
}
function nhan(){
    let a = +document.getElementById("giatri1").value;
    let b = +document.getElementById("giatri2").value;
    let c = a * b ;
    document.getElementById("ketqua").innerHTML = c;
}
function chia(){
    let a = +document.getElementById("giatri1").value;
    let b = +document.getElementById("giatri2").value;
    let c = a / b ;
    document.getElementById("ketqua").innerHTML = c;
}