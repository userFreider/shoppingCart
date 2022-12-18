let shop = document.getElementById('shop');

let shopItemData = [{
    id: 'dfgh',
    name: 'ropa casual verano',
    price: 18990,
    desc: 'polera casual',
    img: 'images/img2.jpg'
},
{
    id: 'dfgh',
    name: 'jordan polera white',
    price: 17990,
    desc: 'polera casual',
    img: 'images/img4.jpg'
},
{
    id: 'dfgh',
    name: 'ropa casual verano',
    price: 19990,
    desc: 'polera casual',
    img: 'images/img1.jpg'
},
{
    id: 'dfgh',
    name: 'ropa casual verano',
    price: 13990,
    desc: 'polera casual',
    img: 'images/img3.jpg'
},
{
    id: 'dfgh',
    name: 'jordan polera white',
    price: 21990,
    desc: 'polera casual',
    img: 'images/img5.jpg'
},
{
    id: 'dfgh',
    name: 'jordan polera white',
    price: 44990,
    desc: 'polera casual',
    img: 'images/img7.jpg'
},
{
    id: 'dfgh',
    name: 'Silla Negra/Natural',
    price: 14990,
    desc: 'Para que tu decisión sea la más certera',
    img: '/images/img14.jpg'
},
{
    id: 'dfgh',
    name: 'Consola Nintendo Switch',
    price: 419990,
    desc: 'modelo portátil para llevar',
    img: '/images/img13.jpg'
},
{
    id: 'dfgh',
    name: 'Polera Manga Corta',
    price: 12990,
    desc: 'Polera Mujer Manga Corta Estampada',
    img: '/images/img11.jpg'
},
{
    id: 'dfgh',
    name: 'Smartphone Motorola',
    price: 44990,
    desc: 'Sistema Operativo: Android',
    img: '/images/img9.jpeg'
},
{
    id: 'dfgh',
    name: 'Monitor Gamer 32 Qhd',
    price: 44990,
    desc: 'monitor LG QHD ultra dinamico',
    img: '/images/img10.jpg'
},
{
    id: 'dfgh',
    name: 'Sony playstation 4',
    price: 44990,
    desc: ' consola PlayStation',
    img: '/images/img8.jpg'
},
];

let generateShop = () => {
    return (shop.innerHTML = shopItemData.map((x) => {
        return `
        <div class="col-md-4 col-lg-3  col-sm-6">
                    <div class="card  mb-5">
                        <img src="${x.img}" alt="producto" class="card-img-top">
                        <div class="card-body">
                            <h5 class="title text-center">${x.name}</h5>
                            <p class="text-center">${x.desc}</p>
                            <div class="start text-center">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-regular fa-star-half-stroke fa-star" "></i>
                                <i class="fa-regular fa-star"></i>
                            </div>
    
                            <div class="price-quantity d-flex justify-content-around mt-4">
                                <span class="text-center d-block">$${x.price}</span>
                                <div class="buttons g-5 d-flex flex-row align-items-center">
                                    <i class="fa-solid fa-plus"></i>
                                    <div class="quantity">0</div>
                                    <i class="fa-solid fa-minus"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        `
    }))
}

generateShop();

