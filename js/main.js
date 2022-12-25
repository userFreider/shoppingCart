let shop = document.getElementById("shop");

let shopItemData = [
    {
        id: "dfghtn",
        name: "ropa  verano",
        price: 18990,
        desc: "polera algodón",
        img: "images/img2.jpg"
    },
    {
        id: "dfghkb",
        name: "Polera Tribe",
        price: 17990,
        desc: " poliéster de algodón",
        img: "images/img4.jpg"
    },
    {
        id: "dfghmytg",
        name: "ropa casual verano",
        price: 19990,
        desc: "polera casual",
        img: "images/img1.jpg"
    },
    {
        id: "dfghdcf",
        name: "ropa casual verano",
        price: 13990,
        desc: "polera casual",
        img: "images/img3.jpg"
    },
    {
        id: "dfghyuo",
        name: "Set de Accesorios ",
        price: 21990,
        desc: "Increíble set belleza",
        img: "images/img5.jpg"
    },
    {
        id: "dfghdft",
        name: "Audífonos Earbuds",
        price: 7990,
        desc: "Compatible con Android",
        img: "images/img7.jpg"
    },
    {
        id: "dfghop",
        name: "Silla Negra/Natural",
        price: 14990,
        desc: "Para que tu decisión sea la más certera",
        img: "/images/img14.jpg"
    },
    {
        id: "dfghml",
        name: "Consola Nintendo Switch",
        price: 419990,
        desc: "modelo portátil para llevar",
        img: "/images/img13.jpg"
    },
    {
        id: "dfghbvs",
        name: "Polera Manga Corta",
        price: 12990,
        desc: "Polera Mujer Manga Corta Estampada",
        img: "/images/img11.jpg"
    },
    {
        id: "dfghvty",
        name: "Smartphone Motorola",
        price: 44990,
        desc: "Sistema Operativo: Android",
        img: "/images/img9.jpeg"
    },
    {
        id: "dfghcf",
        name: "Monitor Gamer 32 Qhd",
        price: 44990,
        desc: "monitor LG QHD ultra dinamico",
        img: "/images/img10.jpg"
    },
    {
        id: "dfghte",
        name: "Sony playstation 4",
        price: 44990,
        desc: " consola PlayStation",
        img: "/images/img8.jpg"
    }
];

// listado de compra por cada producto que se almacenara
let listaDeProduct = JSON.parse(localStorage.getItem("data" )) || []

let generateShop = () => {
    return (shop.innerHTML = shopItemData.map((x) => {
        // id productos
        let { id, name, price, desc, img } = x;
        let search = listaDeProduct.find((x) => x.id === id) || []
        return `

        <div class="col-md-4 col-lg-3  col-sm-6 id=product-id ${id}">
                    <div class="card  mb-5">
                        <img src="${img}" alt="producto" class="card-img-top">
                        <div class="card-body">
                            <h5 class="title text-center">${name}</h5>
                            <p class="text-center">${desc}</p>
                            <div class="start text-center">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-regular fa-star-half-stroke fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </div>
    
                            <div class="price-quantity d-flex justify-content-around mt-4">
                                <span class="text-center d-block">$${price}</span>
                                <div class="buttons g-5 d-flex flex-row align-items-center">
                                    <i  onclick="increment(${id})" class="fa-solid fa-plus"></i>
                                    <div id=${id} class="quantity">${search.item === undefined ? 0: search.item}</div>
                                    <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        `;
    }));
};





generateShop();

// funciones para el valor incrementar y decrementar

let increment = (id) => {
    let selectedItem = id;
    let search = listaDeProduct.find((x) => x.id === selectedItem.id);
    if (search === undefined) {
        listaDeProduct.push({
            id: selectedItem.id,
            item: 1
        });
    } else {
        search.item += 1;
    }

    
    localStorage.setItem("data", JSON.stringify(listaDeProduct));
    listaDeProduct = listaDeProduct.filter((x) => x.item !== 0);
    console.log(listaDeProduct);
    update(selectedItem.id);
};
let decrement = (id) => {
    let selectedItem = id;
    let search = listaDeProduct.find((x) => x.id === selectedItem.id);


    if(search === undefined) return;
    else if (search.item === 0) return; //detengo el proceso para no obtener -1 en el decremento
    else {
        search.item -= 1;
    }

    update(selectedItem.id);//

    //console.log(listaDeProduct);
    listaDeProduct = listaDeProduct.filter((x) => x.item !== 0);
    localStorage.setItem('data', JSON.stringify(listaDeProduct));

};


let update = (id) => {
    let search = listaDeProduct.find((x) => x.id === id);
    console.log(search.item);
    document.getElementById(id).innerHTML = search.item;

    calcular();
};



//calcular
function calcular(){
    let carIcon = document.getElementById('cartAmount');
    carIcon.innerHTML = listaDeProduct.map((x)=> x.item ).reduce((x,y)=> x + y, 0);

}

calcular();