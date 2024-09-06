var detail = [
    {
        id:1,
        Image: '../images/painting/flower/1.webp',
        title: 'The Rain Lilies',
        productrating: 'fas fa-star',
        oldprice: '$160',
        newprice:'$175',
        heading: 'About This Item:',
        desc: 'Buy Handpainted Art Painting by "Patena Print"',
        button: 'Add to Cart',
  
  
    },
    {
        id:2,
        Image: '../images/painting/flower/2.jpg',
        title: 'Flowers Painting Acrylic',
        productrating: 'fas fa-star',
        oldprice: '$157',
        newprice:'$147',
        heading: 'About This Item:',
        desc: 'Buy Handpainted Art Painting by "Patena Print"',
        button: 'Add to Cart',
        
  
    },
    {
      id:3,
      Image: '../images/painting/flower/13.jpg',
      title: 'Floral Abstract Painting',
      productrating: 'fas fa-star',
      oldprice: '$20.55',
      newprice:'$17.55',
      heading: 'About This Item:',
      desc: 'Buy Handpainted Art Painting by "Patena Print"',
      button: 'Add to Cart',
      
  
  },
  {
    id:4,
    Image: '../images/painting/flower/4.jpg',
    title: 'Flower Vase',
    productrating: 'fas fa-star',
    oldprice: '$15.6',
    newprice:'$13.6',
    heading: 'About This Item:',
    desc: 'Buy Handpainted Art Painting by "Patena Print"',
    button: 'Add to Cart',
    
  
  },
  {
  id:5,
  Image: '../images/painting/flower/9.jpg',
  title: 'Elements Of A Lotus',
  productrating: 'fas fa-star',
  oldprice: '$55.5',
  newprice:'$50.5',
  heading: 'About This Item:',
  desc: 'Buy Handpainted Art Painting by "Patena Print"',
  button: 'Add to Cart',
  
  
  },
  {
  id:6,
  Image: '../images/painting/flower/6.jpg',
  title: 'Flower',
  productrating: 'fas fa-star',
  oldprice: '$45',
  newprice:'$43',
  heading: 'About This Item:',
  desc: 'Buy Handpainted Art Painting by "Patena Print"',
  button: 'Add to Cart',
  
  
  },
  {
  id:7,
  Image: '../images/painting/flower/7.jpg',
  title: 'Beautiful Lotus',
  productrating: 'fas fa-star',
  oldprice: '$35',
  newprice:'$30',
  heading: 'About This Item:',
  desc: 'Buy Handpainted Art Painting by "Patena Print"',
  button: 'Add to Cart',
  
  
  },
  {
  id:8,
  Image: '../images/painting/flower/8.jpg',
  title: 'Peony Roses',
  productrating: 'fas fa-star',
  oldprice: '$136',
  newprice:'$135',
  heading: 'About This Item:',
  desc: 'Buy Handpainted Art Painting by "Patena Print"',
  button: 'Add to Cart',
  
  
  },
  {
  id:9,
  Image: '../images/painting/flower/3.jpg',
  title: 'Spring- Blooming Flowers',
  productrating: 'fas fa-star',
  oldprice: '$48',
  newprice:'$47',
  heading: 'About This Item:',
  desc: 'Buy Handpainted Art Painting by "Patena Print"',
  button: 'Add to Cart',
  
  
  },
  {
  id:10,
  Image: '../images/painting/flower/10.jpg',
  title: 'Periwinkle Flowers',
  productrating: 'fas fa-star',
  oldprice: '$65',
  newprice:'$60',
  heading: 'About This Item:',
  desc: 'Buy Handpainted Art Painting by "Patena Print"',
  button: 'Add to Cart',
  
  
  },
  {
  id:11,
  Image: '../images/painting/flower/14.jpg',
  title: 'Tulips In Love',
  productrating: 'fas fa-star',
  oldprice: '$160',
  newprice:'$150',
  heading: 'About This Item:',
  desc: 'Buy Handpainted Art Painting by "Patena Print"',
  button: 'Add to Cart',
  
  
  },
  {
  id:12,
  Image: '../images/painting/flower/12.jpg',
  title: 'Flowers Painting',
  productrating: 'fas fa-star',
  oldprice: '$80',
  newprice:'$80',
  heading: 'About This Item:',
  desc: 'Buy Handpainted Art Painting by "Patena Print"',
  button: 'Add to Cart',
  
  },
  ]
  for(i = 0 ;i <= detail.length; i++)
  {
    document.getElementById("flower-detail-page").innerHTML += `
    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
    <a href="../flower.html?id=${i}">
      <div class="card">
      <img class="card-img-top" src="${detail[i].Image}" alt="">
        <div class="card-body">
          <h2 class="card-title1 text-center">${detail[i].title}</h2>
          <p>${detail[i].desc}</p>
          <h5 class="text-center">${detail[i].newprice}</h5>
            <div class="star text-center">
              <i class="fa fa-star checked"></i>
              <i class="fa fa-star checked"></i>
              <i class="fa fa-star checked"></i>
              <i class="fa fa-star checked"></i>
              <i class="fa fa-star checked"></i>
            </div>
          <div class="btn1">
          </div>
        </div>
        </div>
      </a>
    </div>
    `;
  }