var detail = [
    {
        id:1,
        Image: '../images/painting/religious/7.jpg',
        title: 'Mosque Reflections',
        productrating: 'fas fa-star',
        oldprice: '$160',
        newprice:'$175',
        heading: 'About This Item:',
        desc: 'Buy Handpainted Art Painting by "Patena Print"',
        button: 'Add to Cart',
  
  
    },
    {
        id:2,
        Image: '../images/painting/religious/2.jpg',
        title: 'Mosque Reflections(2)',
        productrating: 'fas fa-star',
        oldprice: '$157',
        newprice:'$147',
        heading: 'About This Item:',
        desc: 'Buy Handpainted Art Painting by "Patena Print"',
        button: 'Add to Cart',
        
  
    },
    {
      id:3,
      Image: '../images/painting/religious/8.jpg',
      title: 'Beautiful Mosque',
      productrating: 'fas fa-star',
      oldprice: '$20.55',
      newprice:'$17.55',
      heading: 'About This Item:',
      desc: 'Buy Handpainted Art Painting by "Patena Print"',
      button: 'Add to Cart',
      
  
  },
  {
    id:4,
    Image: '../images/painting/religious/4.jpg',
    title: 'Mosque Silhouettes',
    productrating: 'fas fa-star',
    oldprice: '$15.6',
    newprice:'$13.6',
    heading: 'About This Item:',
    desc: 'Buy Handpainted Art Painting by "Patena Print"',
    button: 'Add to Cart',
    
  
  },
  {
  id:5,
  Image: '../images/painting/religious/5.jpg',
  title: 'Prayerful Illumination',
  productrating: 'fas fa-star',
  oldprice: '$55.5',
  newprice:'$50.5',
  heading: 'About This Item:',
  desc: 'Buy Handpainted Art Painting by "Patena Print"',
  button: 'Add to Cart',
  
  
  },
  {
  id:6,
  Image: '../images/painting/religious/6.jpg',
  title: 'Whispers of Faith',
  productrating: 'fas fa-star',
  oldprice: '$45',
  newprice:'$43',
  heading: 'About This Item:',
  desc: 'Buy Handpainted Art Painting by "Patena Print"',
  button: 'Add to Cart',
  
  
  },
  {
  id:7,
  Image: '../images/painting/religious/1.jpg',
  title: 'Moonlit Mosque',
  productrating: 'fas fa-star',
  oldprice: '$35',
  newprice:'$30',
  heading: 'About This Item:',
  desc: 'Buy Handpainted Art Painting by "Patena Print"',
  button: 'Add to Cart',
  
  
  },
  {
  id:8,
  Image: '../images/painting/religious/3.jpg',
  title: 'Infinite Tranquility',
  productrating: 'fas fa-star',
  oldprice: '$136',
  newprice:'$135',
  heading: 'About This Item:',
  desc: 'Buy Handpainted Art Painting by "Patena Print"',
  button: 'Add to Cart',
  
  
  },
  {
  id:9,
  Image: '../images/painting/religious/9.jpg',
  title: 'Mosque Dome Dreams',
  productrating: 'fas fa-star',
  oldprice: '$48',
  newprice:'$47',
  heading: 'About This Item:',
  desc: 'Buy Handpainted Art Painting by "Patena Print"',
  button: 'Add to Cart',
  
  
  },
  {
  id:10,
  Image: '../images/painting/religious/10.jpg',
  title: 'Mosque in the Morning Light',
  productrating: 'fas fa-star',
  oldprice: '$65',
  newprice:'$60',
  heading: 'About This Item:',
  desc: 'Buy Handpainted Art Painting by "Patena Print"',
  button: 'Add to Cart',
  
  
  },
  {
  id:11,
  Image: '../images/painting/religious/11.jpg',
  title: 'Mosque Courtyard',
  productrating: 'fas fa-star',
  oldprice: '$160',
  newprice:'$150',
  heading: 'About This Item:',
  desc: 'Buy Handpainted Art Painting by "Patena Print"',
  button: 'Add to Cart',
  
  
  },
  {
  id:12,
  Image: '../images/painting/religious/12.jpg',
  title: 'Mosque Minarets at Dusk',
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
    document.getElementById("religious-detail-page").innerHTML += `
    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
    <a href="../religious.html?id=${i}">
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