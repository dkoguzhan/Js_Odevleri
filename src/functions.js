// function addToCard(quantity,productName="Elma") {
//     console.log("Sepete Eklendi : Ürün :"
//      + productName +"adet : " + quantity
    
//     )
// }


// // addToCard("Elma")
// addToCard(10)
// // addToCard("Masa")
// // addToCard("Karpuz")
// // addToCard("Yumurta")


// let sayHello = ()=>{
//     console.log("Hello World!")
// }

// sayHello()

// let sayHello2 = function() {
//     console.log("Hello World2")
// }
// sayHello2()

// function addToCart2(productName,quantity,unitPrice) {
    
// }

// addToCart2("Elma",6,12)
// addToCart2("Armut",2,13)
// addToCart2("Limon",3,15)

// let product1 = {productName: "Elma",quantity:10,unitPrice:5}

// function addToCart3(product) {
//     console.log(product.productName)
//     console.log(product.quantity)
//     console.log(product.unitPrice)
// }

// addToCart3(product1)
// let product2 = {productName: "Elma",quantity:10,unitPrice:5}
// let product3 = {productName: "Elma",quantity:10,unitPrice:5}
// product2 = product3
// product2.productName = "karpuz"
// console.log(product3.productName)
// //Karpuz yazar


// let sayi1 = 10
// let sayi2 = 20 
// sayi1 = sayi2
// sayi2 = 100
// console.log(sayi1)



// let product2 = {productName: "karpuz",quantity:2,unitPrice:10}
// let product3 = {productName: "armut",quantity:3,unitPrice:5}

// function addToCart4(x) {
// //  x.forEach(element => {
// //     console.log(element.productName)
// //  });
// console.log(products)
// }

// let products = [
//     {productName: "karpuz",quantity:2,unitPrice:10},
//     {productName: "armut",quantity:3,unitPrice:5}
// ]
// addToCart4(products)


// function add(...numbers) {


// }

// add(20,30)
// add(20,30,50)
// add(20,30,50,60)

// console.log(Math.max(30,10,500,120,600))

// let asd = 15

// let [icAnadolu,marmara,karadeniz,[icAnadolusehirleri,marmaraSehirleri,karadenizSehirleri]] = [
//     {name : "İç Anadolu", population : "20M"},
//     {name : "Marmara", population : "30M"},
//     {name : "Karadeniz", population : "20M"},
//     [
//         ["Ankara","Konya"],
//         ["İstanbul","Bursa"],
//         ["Sinop","Trabzon"] 
//     ]
// ]

// console.log(icAnadolusehirleri)
// console.log(marmaraSehirleri)
// console.log(karadenizSehirleri)

// let newPName, NewUPrice, newQuantity
// ({productName:newPName,unitPrice:NewUPrice,quantity:newQuantity} ={productName : "elma ",unitPrice:15,quantity:12} )

// console.log(newPName)

function findPrime(...numbers){
    let primeNumbers = []
    let asalMi = true;

numbers.forEach(number => {
    for (let index = 2; index < number; index++) {
        if (number % index == 0){
            asalMi = false; // asal değilse false değer veriyoruz
        }
    }

    if (asalMi) {
        primeNumbers.push(number) // asal ise diziye numarayı kaydediyoruz
    }

    asalMi= true // bi sonraki element için bool değerimizi sıfırlıyoruz
    });

    //kodları ekrana yazdırdığımız kısım
    primeNumbers.forEach(element => {
        console.log(element)
    });
}



findPrime(3,5,9,12,13,15,17,20)

findPrime(3,5,9,12,13,15,17,20)
