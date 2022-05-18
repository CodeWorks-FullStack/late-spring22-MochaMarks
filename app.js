const menu = [
  {
    id: 1,
    name: 'Drip Coffee',
    price: 3,
    img: '/img/drip.jpg'
  },
  {
    id: 2,
    name: 'Cappuccino',
    price: 4.75,
    img: '/img/cappuccino.jpg'
  },
  {
    id: 3,
    name: 'Cold Brew',
    price: 3.75,
    img: '/img/coldbrew.jpg'
  },
  {
    id: 4,
    name: 'Boba',
    price: 6,
    img: '/img/boba.jpg'
  },
  {
    id: 5,
    name: 'Lighting Juice',
    price: 8.50,
    img: '/img/energydrink.jpg'
  },
  {
    id: 6,
    name: 'Blended Beach',
    price: 5.75,
    img: '/img/freeze.jpg'
  },
  {
    id: 7,
    name: 'Latte',
    price: 3,
    img: '/img/latte.jpg'
  },
  {
    id: 8,
    name: 'PSL',
    price: 12.75,
    img: '/img/psl.jpg'
  },
  {
    id: 9,
    name: 'Taste-Tea',
    price: 11.75,
    img: '/img/greentea.jpg'
  },
  {
    id: 10,
    name: 'Keto Muffins',
    price: 22.15,
    img: '/img/muffin.jpg'
  },
  {
    id: 11,
    name: 'Avocado Toast',
    price: 15,
    img: '/img/avocadotoast.jpg'
  },
  {
    id: 12,
    name: 'Gold Scone',
    price: 3.75,
    img: '/img/scone.jpg'
  },




]


const order = []

function drawMenu() {
  // create a card for every item in the string `template`
  let template = ''
  // for (let i = 0; i < menu.length; i++) {
  //   const item = menu[i]
  menu.forEach(item => {
    template += `
    <div class="col-md-4 p-2">
    <div class="bg-dark text-light shadow rounded coffee-card action" onclick="addToCart(${item.id})">
    <img class="w-100 object-cover rounded-top" height="200px" src="${item.img}" alt="coffee">
    <div class="d-flex justify-content-between p-3">
    <h4>${item.name}</h4>
    <h4><em>$${item.price.toFixed(2)}</em></h4>
    </div>
    </div>
    </div>
    `
  })


  document.getElementById('menu-items').innerHTML = template
}

function drawOrder() {
  let template = ''
  // make the template
  let total = 0
  order.forEach(item => {
    total += item.price
    template += `
    <li class="d-flex justify-content-between border-bottom border-secondary">
      <p class="m-1">${item.name}</p>
      <p class="m-1">$${item.price.toFixed(2)}</p>
    </li>
    `
  })
  // NOTE if the value 'template' here is false(y) then the statement after the || (or) gets set
  // this can be used to set default values in the case one was not provided
  template = template || '<p><em>No items in cart</em></p>'

  document.getElementById('total').innerText = total.toFixed(2)
  document.getElementById('order-items').innerHTML = template
  document.getElementById('total-order-items').innerText = order.length.toString()
}


function addToCart(id) {
  // for (let i = 0; i < menu.length; i++) {
  //   const item = menu[i]
  //   if (item.id == id) {
  //     found = item
  //     break
  //   }
  // }
  let found = menu.find(item => item.id == id)
  if (found) {
    console.log(found)
    order.push(found)
    drawOrder()
  }
  document.getElementById('checkout-button').disabled = false
}


function checkout() {
  order.length = 0
  drawOrder()
  document.getElementById('checkout-button').disabled = true
  setTimeout(() => {
    // close the off canvas
    bootstrap.Offcanvas.getOrCreateInstance(document.getElementById('order')).hide()
  }, 1000)
}





// startup
drawMenu()
drawOrder()