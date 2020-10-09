$(document).ready(function() {
    const menu = [
        { title: 'LIGHTING Explorer' },
        { title: 'Office' },
        { title: 'Hotel' },
        { title: 'Home' },
        { title: 'All Products' },
        { title: 'PENDANT LIGHT' },
        { title: 'CHANDELIER' },
        { title: 'SWITCHES & SOCKETS' },
        { title: 'CEILING LAMP' },
        { title: 'WALL LAMP' }
    ]

    $('.prod-categories').slick({
        dots: false,
        arrow: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      $('.feature-carousel').slick({
        dots: false,
        arrow: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: false,
      });

      $('.feature-category-carousel').slick({
        dots: false,
        arrow: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: false,
      });
    
    function populateMenu() {
        const menuWrapper = document.getElementById('section-menus');
    
        const menuItems = menu.map((item) => {
            const el = document.createElement('a');
            el.textContent = item.title;
            el.href = '#';
            el.classList.add('text-black', 'text-uppercase')
            return el;
        })
    
        menuItems.forEach(item => {
            menuWrapper.appendChild(item);
        })
    };

    function scrollListener() {
        const scrollContainer = document.getElementsByClassName('prod-categories')[0];
        console.log(scrollContainer.clientWidth);

        const leftButton = document.getElementById('leftButton');
        leftButton.addEventListener('click', (ev) => {
            ev.preventDefault();
            $('.prod-categories').slick('slickPrev');
        });

        const rightButton = document.getElementById('rightButton');
        rightButton.addEventListener('click', (ev) => {
            ev.preventDefault();
            $('.prod-categories').slick('slickNext');
        });
    };

    populateMenu();
    scrollListener();
});