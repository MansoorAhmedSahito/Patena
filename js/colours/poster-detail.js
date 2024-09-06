var detail = [
    {
        id:1,
        Image: '../images/colours/poster/1.jpg',
        title: 'Rail Station',
        productrating: 'fas fa-star',
        oldprice: '$160',
        newprice:'$175',
        heading: 'About This Item:',
        desc: 'Buy Handpainted Art Painting by "Patena Print"',
        button: 'Add to Cart',
  
  
    },
    {
        id:2,
        Image: '../images/colours/poster/2.jpg',
        title: 'Green Land With Calm Environment',
        productrating: 'fas fa-star',
        oldprice: '$157',
        newprice:'$147',
        heading: 'About This Item:',
        desc: 'Buy Handpainted Art Painting by "Patena Print"',
        button: 'Add to Cart',
        
  
    },
    {
      id:3,
      Image: '../images/colours/poster/3.jpg',
      title: 'Sunset Nature Painting',
      productrating: 'fas fa-star',
      oldprice: '$20.55',
      newprice:'$17.55',
      heading: 'About This Item:',
      desc: 'Buy Handpainted Art Painting by "Patena Print"',
      button: 'Add to Cart',
      
  
  },
  {
    id:4,
    Image: '../images/colours/poster/4.jpg',
    title: 'Starry Night At Dark Forest',
    productrating: 'fas fa-star',
    oldprice: '$15.6',
    newprice:'$13.6',
    heading: 'About This Item:',
    desc: 'Buy Handpainted Art Painting by "Patena Print"',
    button: 'Add to Cart',
    
  
  },
  {
  id:5,
  Image: '../images/colours/poster/5.jpg',
  title: 'Still Life - Hearth',
  productrating: 'fas fa-star',
  oldprice: '$55.5',
  newprice:'$50.5',
  heading: 'About This Item:',
  desc: 'Buy Handpainted Art Painting by "Patena Print"',
  button: 'Add to Cart',
  
  
  },
  {
  id:6,
  Image: '../images/colours/poster/6.jpg',
  title: 'Varanasi Ghat',
  productrating: 'fas fa-star',
  oldprice: '$45',
  newprice:'$43',
  heading: 'About This Item:',
  desc: 'Buy Handpainted Art Painting by "Patena Print"',
  button: 'Add to Cart',
  
  
  },
  {
  id:7,
  Image: '../images/colours/poster/7.jpg',
  title: 'Sunset View',
  productrating: 'fas fa-star',
  oldprice: '$35',
  newprice:'$30',
  heading: 'About This Item:',
  desc: 'Buy Handpainted Art Painting by "Patena Print"',
  button: 'Add to Cart',
  
  
  },
  {
  id:8,
  Image: '../images/colours/poster/8.jpg',
  title: '>The Tulip Windmill',
  productrating: 'fas fa-star',
  oldprice: '$136',
  newprice:'$135',
  heading: 'About This Item:',
  desc: 'Buy Handpainted Art Painting by "Patena Print"',
  button: 'Add to Cart',
  
  
  },
  {
  id:9,
  Image: '../images/colours/poster/9.jpg',
  title: 'Snowy Lake',
  productrating: 'fas fa-star',
  oldprice: '$48',
  newprice:'$47',
  heading: 'About This Item:',
  desc: 'Buy Handpainted Art Painting by "Patena Print"',
  button: 'Add to Cart',
  
  
  },
  {
  id:10,
  Image: '../images/colours/poster/10.jpg',
  title: 'The Lantern Illuminating The Whole World',
  productrating: 'fas fa-star',
  oldprice: '$65',
  newprice:'$60',
  heading: 'About This Item:',
  desc: 'Buy Handpainted Art Painting by "Patena Print"',
  button: 'Add to Cart',
  
  
  },
  {
  id:11,
  Image: '../images/colours/poster/11.jpg',
  title: 'Sailing In Storm',
  productrating: 'fas fa-star',
  oldprice: '$160',
  newprice:'$150',
  heading: 'About This Item:',
  desc: 'Buy Handpainted Art Painting by "Patena Print"',
  button: 'Add to Cart',
  
  
  },
  {
  id:12,
  Image: '../images/colours/poster/12.jpg',
  title: '>Mountain Landscape',
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
    document.getElementById("poster-detail-page").innerHTML += `
    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
    <a href="../poster.html?id=${i}">
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