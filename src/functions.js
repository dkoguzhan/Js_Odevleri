
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
