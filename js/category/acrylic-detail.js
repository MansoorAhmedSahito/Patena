var detail = [
  {
      id:1,
      Image: '../images/category/acrylic/1.jpg',
      title: 'Rhythmic Monsoon',
      productrating: 'fas fa-star',
      oldprice: '$160',
      newprice:'$175',
      heading: 'About This Item:',
      desc: 'Buy Handpainted Art Painting by "Patena Print"',
      button: 'Add to Cart',


  },
  {
      id:2,
      Image: '../images/category/acrylic/2.jpg',
      title: 'Solitude',
      productrating: 'fas fa-star',
      oldprice: '$157',
      newprice:'$147',
      heading: 'About This Item:',
      desc: 'Buy Handpainted Art Painting by "Patena Print"',
      button: 'Add to Cart',
      

  },
  {
    id:3,
    Image: '../images/category/acrylic/3.jpg',
    title: 'Blended Souls',
    productrating: 'fas fa-star',
    oldprice: '$20.55',
    newprice:'$17.55',
    heading: 'About This Item:',
    desc: 'Buy Handpainted Art Painting by "Patena Print"',
    button: 'Add to Cart',
    

},
{
  id:4,
  Image: '../images/category/acrylic/4.jpg',
  title: 'Beautiful Land',
  productrating: 'fas fa-star',
  oldprice: '$15.6',
  newprice:'$13.6',
  heading: 'About This Item:',
  desc: 'Buy Handpainted Art Painting by "Patena Print"',
  button: 'Add to Cart',
  

},
{
id:5,
Image: '../images/category/acrylic/5.jpg',
title: 'A Little Rest',
productrating: 'fas fa-star',
oldprice: '$55.5',
newprice:'$50.5',
heading: 'About This Item:',
desc: 'Buy Handpainted Art Painting by "Patena Print"',
button: 'Add to Cart',


},
{
id:6,
Image: '../images/category/acrylic/6.jpg',
title: '7 Horses running in a desert',
productrating: 'fas fa-star',
oldprice: '$45',
newprice:'$43',
heading: 'About This Item:',
desc: 'Buy Handpainted Art Painting by "Patena Print"',
button: 'Add to Cart',


},
{
id:7,
Image: '../images/category/acrylic/7.jpg',
title: 'The Serene Walk',
productrating: 'fas fa-star',
oldprice: '$35',
newprice:'$30',
heading: 'About This Item:',
desc: 'Buy Handpainted Art Painting by "Patena Print"',
button: 'Add to Cart',


},
{
id:8,
Image: '../images/category/acrylic/8.jpg',
title: 'Purple Flowers Farm',
productrating: 'fas fa-star',
oldprice: '$136',
newprice:'$135',
heading: 'About This Item:',
desc: 'Buy Handpainted Art Painting by "Patena Print"',
button: 'Add to Cart',


},
{
id:9,
Image: '../images/category/acrylic/9.jpg',
title: 'Exhilaration',
productrating: 'fas fa-star',
oldprice: '$48',
newprice:'$47',
heading: 'About This Item:',
desc: 'Buy Handpainted Art Painting by "Patena Print"',
button: 'Add to Cart',


},
{
id:10,
Image: '../images/category/acrylic/10.jpg',
title: 'Fruit Fest',
productrating: 'fas fa-star',
oldprice: '$65',
newprice:'$60',
heading: 'About This Item:',
desc: 'Buy Handpainted Art Painting by "Patena Print"',
button: 'Add to Cart',


},
{
id:11,
Image: '../images/category/acrylic/11.jpg',
title: 'Healing',
productrating: 'fas fa-star',
oldprice: '$160',
newprice:'$150',
heading: 'About This Item:',
desc: 'Buy Handpainted Art Painting by "Patena Print"',
button: 'Add to Cart',


},
{
id:12,
Image: '../images/category/acrylic/12.jpg',
title: 'Whispering Winds',
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
  document.getElementById("acrylic-detail-page").innerHTML += `
  <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
  <a href="../acrylic.html?id=${i}">
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