function loadmore() {
  var a = document.getElementById("div1");
  a.style.display = "block";
  var b = document.getElementById('btn')
  b.style.display = 'none '

}

function validateform() {
  var name = document.getElementById("floatingInput").value;
  var password = document.getElementById("floatingPassword").value;

  if (name == null || name == "") {
    alert("Name can't be blank");
    return false;
  } else if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  }
}

// function cart1() {
//   window.location.assign("mobile.html");
//   var a = document.getElementById('product1')
//   var b = document.getElementById('cart-product-1')
//   console.log(a)
//   b.src = a.src
//   b.innerHTML = a.innerHTML
// }


function cart1()
{
  window.location.assign("mobile.html");
  var a = document.getElementById('c1-img1')
  var b = document.getElementById('c1-p1')
  var c = document.getElementById('c1-p2')
  var d = document.getElementById('c1-p3')

  var e = document.getElementById('c1-img2')
  var f = document.getElementById('c1-product1')
  var g = document.getElementById('c1-product2')
  var h = document.getElementById('c1-product3')

  e.src = a.src
  f.innerHTML = b.innerHTML
  g.innerHTML = c.innerHTML
  h.innerHTML = d.innerHTML  
}


// function cart2() {
//   window.location.assign("mobile.html");  
//   var c = document.getElementById('product2')
//   var d = document.getElementById('cart-product-1')
//   d.innerHTML = c.innerHTML
// }



