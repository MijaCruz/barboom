const Clickbutton = document.querySelectorAll('.button')
const tbody = document.querySelector('.tbody')
let carrito = []

Clickbutton.forEach(btn => {
    btn.addEventListener('click', addToCarritoItem)
})

function addToCarritoItem(e) {
    const button = e.target
    const item = button.closest('.card')
    const itemTitle = item.querySelector('.card-title').textContent;
    const itemPrice = item.querySelector('.precio').textContent;
    const itemImg = document.querySelector('.card-img');
    const newItem = {
        title: itemTitle,
        precio: itemPrice,
        img: itemImg,
        cantidad: 1
    }
    addItemCarrito(newItem)
}

function addItemCarrito(newItem) {
    const InputElemnto = tbody.getElementsByClassName('input__elemento')
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].title.trim() === newItem.title.trim()) {
            carrito[i].cantidad++;
            const inputValue = InputElemnto[i]
            inputValue.value++;
            CarritoTotal()
            return null;
        }
    }
    carrito.push(newItem)
    renderCarrito()
    vaciarLocalStorage()
}

function renderCarrito() {
    tbody.innerHTML = ''
    carrito.map(item => {
        const tr = document.createElement('tr')
        tr.classList.add('ItemCarrito')
        const Content = `
    
            <td class="table__productos">
              <img src=${item.img}  alt="">
              <h6 class="title text-white" style="font-size: 15px;">${item.title}</h6>
            </td>

            <td class="table__price mt-2" style="font-size: 15px;"><p>${item.precio}</p></td>
            
            <td class="table__cantidad text-center">
              <input type="text text-center" min="1" value=${item.cantidad} class="input__elemento" readonly>
              <button class="delete btn btn-light fs-2" style="border-radius: 5px;">x</button>
            </td>`
        tr.innerHTML = Content;
        tbody.append(tr)
        tr.querySelector(".delete").addEventListener('click', removeItemCarrito)
        tr.querySelector(".input__elemento").addEventListener('change', sumaCantidad)
    })
    CarritoTotal()
}

function CarritoTotal() {
    let Total = 0;
    const itemCartTotal = document.querySelector('.itemCartTotal')
    carrito.forEach((item) => {
        const precio = Number(item.precio.replace("S/", ''))
        Total = Total + precio * item.cantidad
    })
    itemCartTotal.innerHTML = `Total: S/ ${Total}.00`
    addLocalStorage()
}
function removeItemCarrito(e) {
    const buttonDelete = e.target
    const tr = buttonDelete.closest(".ItemCarrito")
    const title = tr.querySelector('.title').textContent;
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].title.trim() === title.trim()) {
            carrito.splice(i, 1)
        }
    }
    tr.remove()
    CarritoTotal()
}
function sumaCantidad(e) {
    const sumaInput = e.target
    const tr = sumaInput.closest(".ItemCarrito")
    const title = tr.querySelector('.title').textContent;
    carrito.forEach(item => {
        if (item.title.trim() === title) {
            sumaInput.value < 1 ? (sumaInput.value = 1) : sumaInput.value;
            item.cantidad = sumaInput.value;
            CarritoTotal()
        }
    })
}
function vaciarLocalStorage() {
    localStroge.clear();
}
function buy(){
    userName = prompt("INGRESE SU NOMBRE");
    swal("GRACIAS POR TU COMPRA "+userName.toUpperCase(),`${userName}, en breve se procesara tu pedido`) ;
}