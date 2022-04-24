var sai = [
    {
        price: "55",
        name: "CHICKEN KABAB BURGER",
        img: "https://www.mcdonaldsindia.com/images/products/new/Website-600x6001pix-Chicken-Kebab-Burger.png"
    }, {
        price: "55",
        name: "MEXICAN MCALOO TIKKI",
        img: "https://www.mcdonaldsindia.com/images/products/new/Website-600-600-pix-Mexican-McAloo-Tikki-Burger.png"
    }, {
        price: "57",
        name: "Tikk",
        img: "https://www.mcdonaldsindia.com/images/products/new/Brioche-wwb.png"
    }, {
        price: "55",
        name: "CHICKEN KABAB BURGER",
        img: "https://www.mcdonaldsindia.com/images/products/new/Website-600x6001pix-Chicken-Kebab-Burger.png"
    },
    {
        price: "55",
        name: "CHICKEN KABAB BURGER",
        img: "https://www.mcdonaldsindia.com/images/products/new/Website-600x6001pix-Chicken-Kebab-Burger.png"
    },
    {
        price: "55",
        name: "MEXICAN MCALOO TIKKI",
        img: "https://www.mcdonaldsindia.com/images/products/new/Website-600-600-pix-Mexican-McAloo-Tikki-Burger.png"
    }, {
        price: "57",
        name: "Tikk",
        img: "https://www.mcdonaldsindia.com/images/products/new/Brioche-wwb.png"
    }, {
        price: "55",
        name: "CHICKEN KABAB BURGER",
        img: "https://www.mcdonaldsindia.com/images/products/new/Website-600x6001pix-Chicken-Kebab-Burger.png"
    },
]
sai.forEach((e) => {

    div = document.createElement("div")
    div.className = 'move'
    div.innerHTML = `<img class='i' src="${e.img}" alt="">
<h3>${e.name}</h3>
<h4>Price :${e.price}</h4>
<input type="checkbox" class="order"  >`
    document.getElementById("menu").append(div)
})
var ch = document.querySelectorAll('.move')
console.log(ch)

data = []
function order() {
    sai = 0
    var fil = document.querySelectorAll('.move')
    fil.forEach((e, i) => {
        if (e.lastChild.checked) {
            var pickname = e.children
            sai = 1
            data.push(pickname[1].innerHTML)

        }


    })
    create(data).then((item) => {
        var o= Math.random()*100000
o=o.toFixed(0)
        var div = document.createElement("div")

        div.innerHTML = `<h3  class='or'>Your Order Placed!</h3>
        <h3 class='or'>Order Number :1936${o}</h3>`

        item.forEach((e, i) => {
            var it = document.createElement('h3')
            it.className = 'or'
            it.innerText = `${i + 1}  => ${e}.`
            console.log(it)
            document.getElementById("det").append(it)
        })
        bt = document.createElement("button")
        bt.innerText = "close"
        bt.id = "close"
        bt.addEventListener('click', () => {
            document.getElementById("det").remove()
        })
        document.getElementById("det").append(div, bt)
        document.getElementById("det").style.display = "block"
    }
    ).catch((err) => {
        console.log(err)
        var div = document.createElement("div")

        div.innerHTML = `<h1 class='or'>SORRY ! ${err}</h1>`
        bt = document.createElement("button")
        bt.innerText = "close"
        bt.id = "close"
        bt.addEventListener('click', () => {
        window.location.reload()
            document.getElementById("det").remove()

        })

        document.getElementById("det").append(div, bt)
        document.getElementById("det").style.display = "block"
    }
    )
}

curtime = new Date().getHours()


function create(item) {

    return new Promise((res, rej) => {
        setTimeout(() => {
            if (curtime >= 9 && curtime <= 21&&sai==1) {
                res(item)
            } else {
                rej("Working Hours  10AM To 10 PM",sai)
            }

        }, 3000)
    })


}

