var product1 = document.getElementById("product1")
var qty1 = document.getElementById("qty1")
var price1 = document.getElemnetById("price1")

var product2 = document.getElementById("product2")
var qty2 = document.getElementById("qty2")
var price2 = document.getElemnetById("price2")

var product3 = document.getElementById("product3")
var qty3 = document.getElementById("qty3")
var price3 = document.getElemnetById("price3")

var product4 = document.getElementById("product4")
var qty4 = document.getElementById("qty4")
var price4 = document.getElemnetById("price4")

var product5 = document.getElementById("product5")
var qty5 = document.getElementById("qty5")
var price5 = document.getElemnetById("price5")

var product6 = document.getElementById("product6")
var qty6 = document.getElementById("qty6")
var price6 = document.getElemnetById("price6")

function AddOrder () {
  carts.textContent=""
  if (parseFloat (qty1.value) >  0) {
    var order= qty1.value.toString() + 'pc/s x '+ price1.textContent + '------'+ product1.textContent + '------ Php' + (parseFloat(qty1.value)*parseFloat(price1.textContent)) + '\n'
    //carts.textContent += carts.value.toString() + "\n";
    carts.textContent += order
  }
}
  qty1.addEventListener("keyup", addOrder) ;
  
    

