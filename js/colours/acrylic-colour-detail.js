var detail = [
    {
        id:1,
        Image: '../images/colours/acrylic-colour/1.jpg',
        title: 'Cruiser Motorcyclet',
        productrating: 'fas fa-star',
        oldprice: '$160',
        newprice:'$175',
        heading: 'About This Item:',
        desc: 'Buy Handpainted Art Painting by "Patena Print"',
        button: 'Add to Cart',
  
  
    },
    {
        id:2,
        Image: '../images/colours/acrylic-colour/10.jpg',
        title: 'Turtle',
        productrating: 'fas fa-star',
        oldprice: '$157',
        newprice:'$147',
        heading: 'About This Item:',
        desc: 'Buy Handpainted Art Painting by "Patena Print"',
        button: 'Add to Cart',
        
  
    },
    {
      id:3,
      Image: '../images/colours/acrylic-colour/2.jpg',
      title: 'Foggy Weather',
      productrating: 'fas fa-star',
      oldprice: '$20.55',
      newprice:'$17.55',
      heading: 'About This Item:',
      desc: 'Buy Handpainted Art Painting by "Patena Print"',
      button: 'Add to Cart',
      
  
  },
  {
    id:4,
    Image: '../images/colours/acrylic-colour/12.jpg',
    title: 'Portraitt',
    productrating: 'fas fa-star',
    oldprice: '$15.6',
    newprice:'$13.6',
    heading: 'About This Item:',
    desc: 'Buy Handpainted Art Painting by "Patena Print"',
    button: 'Add to Cart',
    
  
  },
  {
  id:5,
  Image: '../images/colours/acrylic-colour/5.jpg',
  title: 'The River',
  productrating: 'fas fa-star',
  oldprice: '$55.5',
  newprice:'$50.5',
  heading: 'About This Item:',
  desc: 'Buy Handpainted Art Painting by "Patena Print"',
  button: 'Add to Cart',
  
  
  },
  {
  id:6,
  Image: '../images/colours/acrylic-colour/6.jpg',
  title: 'Hillscape',
  productrating: 'fas fa-star',
  oldprice: '$45',
  newprice:'$43',
  heading: 'About This Item:',
  desc: 'Buy Handpainted Art Painting by "Patena Print"',
  button: 'Add to Cart',
  
  
  },
  {
  id:7,
  Image: '../images/colours/acrylic-colour/7.jpg',
  title: 'Boat',
  productrating: 'fas fa-star',
  oldprice: '$35',
  newprice:'$30',
  heading: 'About This Item:',
  desc: 'Buy Handpainted Art Painting by "Patena Print"',
  button: 'Add to Cart',
  
  
  },
  {
  id:8,
  Image: '../images/colours/acrylic-colour/8.jpg',
  title: 'The Orange Housee',
  productrating: 'fas fa-star',
  oldprice: '$136',
  newprice:'$135',
  heading: 'About This Item:',
  desc: 'Buy Handpainted Art Painting by "Patena Print"',
  button: 'Add to Cart',
  
  
  },
  {
  id:9,
  Image: '../images/colours/acrylic-colour/9.jpg',
  title: 'Home',
  productrating: 'fas fa-star',
  oldprice: '$48',
  newprice:'$47',
  heading: 'About This Item:',
  desc: 'Buy Handpainted Art Painting by "Patena Print"',
  button: 'Add to Cart',
  
  
  },
  {
  id:10,
  Image: '../images/colours/acrylic-colour/3.jpg',
  title: 'Hill Scape Nature',
  productrating: 'fas fa-star',
  oldprice: '$65',
  newprice:'$60',
  heading: 'About This Item:',
  desc: 'Buy Handpainted Art Painting by "Patena Print"',
  button: 'Add to Cart',
  
  
  },
  {
  id:11,
  Image: '../images/colours/acrylic-colour/11.jpg',
  title: 'Landscape',
  productrating: 'fas fa-star',
  oldprice: '$160',
  newprice:'$150',
  heading: 'About This Item:',
  desc: 'Buy Handpainted Art Painting by "Patena Print"',
  button: 'Add to Cart',
  
  
  },
  {
  id:12,
  Image: '../images/colours/acrylic-colour/4.jpg',
  title: 'Boat',
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
    document.getElementById("acrylic-colour-detail-page").innerHTML += `
    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
    <a href="../acryliccolor.html?id=${i}">
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