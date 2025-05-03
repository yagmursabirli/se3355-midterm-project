
function showSidebar(){ // sidebarı açmak için
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'}

function hideSidebar(){ //sidebarı kapatır
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}  

function toggleSubmenu(event, id) {
    event.preventDefault();
    const submenu = document.getElementById(id);
    submenu.style.display = submenu.style.display === 'flex' ? 'none' : 'flex';
}




fetch('https://run.mocky.io/v3/7711accc-d96f-4832-bee4-73de461b76c6') //8li kart
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('quickLinksContainer');

    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'quick-card';
      card.innerHTML = `
        <a href="${item.link}" target="_blank">
          <img src="${item.image}" alt="${item.title}">
        </a>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Mock API'den veri çekilemedi:", error);
  });


  let currentIndex = 0;
  let sliderData = [];
  //slider
  function showSlide(index) {
    const slides = document.querySelectorAll('.slider-item');
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
  }
  
  function startSlider() {
    setInterval(() => {
      currentIndex = (currentIndex + 1) % sliderData.length;
      showSlide(currentIndex);
    }, 7000); // 7 snde bir değiştirmek için 
  }
  // right arrow
  function nextSlide() {
    currentIndex = (currentIndex + 1) % sliderData.length;
    showSlide(currentIndex);
  }
  //left arrow
  function prevSlide() {
    currentIndex = (currentIndex - 1 + sliderData.length) % sliderData.length;
    showSlide(currentIndex);
  }
  //electronic
  fetch('https://run.mocky.io/v3/b1972a06-957e-4015-ac19-97cf6f3d8eb9')//slider
    .then(res => res.json())
    .then(data => {
      sliderData = data;
      const container = document.getElementById('singleSlider');
      data.forEach((item, i) => {
        const slide = document.createElement('div');
        slide.className = 'slider-item';
        if (i === 0) slide.classList.add('active'); 
        slide.innerHTML = `
        <div class="slider-content">
          <a href="${item.link}" target="_blank">
            <img src="${item.image}" alt="${item.title}">
            </a>
            <div class="slider-title">${item.title}</div>
          </div>
        `;
        container.appendChild(slide);
      });
      startSlider();
    })
    .catch(err => console.error("Slider API hatası:", err));
  

    let dealIndex = 0;
    let electronicDeals = [];
    
    function showDeal(index) {
      const container = document.getElementById('electronicDeals');
      const item = electronicDeals[index];
      container.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.price}</p>
      `;
    }
    
    function startDealSlider() {
      setInterval(() => {
        dealIndex = (dealIndex + 1) % electronicDeals.length;
        showDeal(dealIndex);
      }, 3000);
    }
    // electronic deals
    fetch('https://run.mocky.io/v3/da03d599-9593-48e0-bcf7-1d79c5ce3e14')
      .then(res => res.json())
      .then(data => {
        electronicDeals = data;
        showDeal(dealIndex);
        startDealSlider();
      })
      .catch(err => console.error("Elektronik fırsatlar API hatası:", err));
    


      // sana özel ürünler kısmı
      fetch('https://run.mocky.io/v3/3c9c478b-b2f3-4068-8ce9-809e5f03f6b7')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('recommendationsContainer');
    
    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'recommendation-card';

      //ürünler için yıldız
      const stars = '★'.repeat(item.rating) + '☆'.repeat(5 - item.rating);

      card.innerHTML = `
        <span class="favorite-btn" onclick="this.classList.toggle('active')">❤</span>
        <img src="${item.image}" alt="${item.name}">
        <h4>${item.name}</h4>
        <div class="price">${item.price}</div>
        <div class="star-rating">${stars}</div>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => console.error("Öneriler API hatası:", err));
