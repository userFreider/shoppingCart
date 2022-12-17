let shop = document.getElementById('shop');

let shopItemData = [{
    id: 'dfgh',
    name: 'ropa casual verano',
    price: 19990,
    desc: 'polera casual',
    img: 'images/img2.jpg'
},
{
    id: 'dfgh',
    name: 'jordan polera white',
    price: 44990,
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
    price: 19990,
    desc: 'polera casual',
    img: 'images/img3.jpg'
},
{
    id: 'dfgh',
    name: 'jordan polera white',
    price: 44990,
    desc: 'polera casual',
    img: 'images/img4.jpg'
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

