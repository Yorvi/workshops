let ul = document.querySelector("ul") //product


// container class
class Merchandise {
  constructor() {
    this.all = []
  }
  add(product) {
    this.all.push(product)
  }
}

// individual class
class Product {
  constructor(title, img, price) {
    this.title = title
    this.img = img
    this.price = price
  }
}

// retrieve data from json
axios.get("https://www.redbullshopus.com/products.json")
.then((response) => {
  let data = response.data.products


  let merch = new Merchandise()

  data.forEach((item) => {

    let li = document.createElement("li")
    let img = document.createElement("img")
    let p = document.createElement("p")
    let h1 = document.createElement("h1")

    let product = new Product(
      item.title,
      item.images[0].src,
      item.variants[0].price
    )

    img.src = product.img

    merch.add(product)

    li.innerHTML = item.title
    p.innerHTML = "$ " + item.variants[0].price

    ul.appendChild(li)
    li.appendChild(h1)
    li.appendChild(img)
    li.appendChild(p) 

  })
  
}).catch((error) => {
  alert(error)
})
//   let imageData = response.data.products.images.src
//   let priceData = response.data.products.variants.price