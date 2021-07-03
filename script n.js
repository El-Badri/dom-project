let hearts = document.getElementsByClassName('fa-heart')
//console.log(hearts)
for (const heart of hearts) {
    heart.addEventListener('click', function () {
        heart.classList.toggle('boga')
    })
}


let adds = document.getElementsByClassName("plus")
//console.log(adds[0].previousElementSibling.value)
for (const add of adds) {
    add.addEventListener('click', function () {
     
        var quantitytag=add.previousElementSibling
    
        quantity=quantitytag.value
        // console.log(quantity)
        quantity++
        quantitytag.value=quantity
       
        let pricetag=add.parentElement.parentElement.querySelector(".prino")
        let price=Number(pricetag.innerHTML)
        // console.log(price)
        let furytag = document.getElementById('total')
       var total=Number(furytag.innerHTML)
       total=price* quantity+total
       furytag.innerHTML=total
    })
}

let reduces = document.getElementsByClassName("moins")
for (const reduce of reduces) {
    reduce.addEventListener('click', function () {
        var quantitytag=reduce.nextElementSibling
        quantity=quantitytag.value
        if (reduce.nextElementSibling.value>0)
        quantity--
        quantitytag.value=quantity
       
        let pricetag=reduce.parentElement.parentElement.querySelector(".prino")
        console.log(pricetag)

        let price=Number(pricetag.innerHTML)
        // console.log(price)
        let furytag = document.getElementById('total')
       var total=Number(furytag.innerHTML)
       total=price* quantity-total
       furytag.innerHTML=total
      
    })
}

let remove = document.getElementById('delete')
// console.log(remove)
    remove.addEventListener('click',function () {
        


    })