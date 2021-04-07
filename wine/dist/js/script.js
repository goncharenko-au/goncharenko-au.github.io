document.addEventListener("DOMContentLoaded", () => {

    // burger 
    const burgerBtn = document.querySelector('.header__top-burger'),
        headerNav = document.querySelector('.header__nav');


    burgerBtn.addEventListener('click', () => {
        if (burgerBtn.classList.contains('active_burger')) {
            burgerBtn.classList.remove('active_burger');
            headerNav.style.display = 'none';
            headerNav.classList.remove('animate__animated', 'animate__zoomIn');
        } else {
            burgerBtn.classList.add('active_burger');
            headerNav.style.display = 'block';
            headerNav.classList.add('animate__animated', 'animate__zoomIn');
        }
    });


    // Slider in new-wines
    new Swiper(".new-wines__slider", {
        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: {
                loop: true,
                autoplay: {
                    delay: 100
                }
            }
        }
    });

    // active buttons in new-wines
    const learnBtn = document.querySelector('.new-wines__learn-btn'),
        viewBtn = document.querySelector('.new-wines__view-btn');

    viewBtn.addEventListener('mouseover', () => {
        viewBtn.classList.add('active');
        learnBtn.classList.remove('active');
    });

    viewBtn.addEventListener('mouseout', () => {
        viewBtn.classList.remove('active');
        learnBtn.classList.add('active');
    });


    // tabs
    const tabs = document.querySelectorAll('.future-products__type'),
        tabsContent = document.querySelectorAll('.future-products__catalog'),
        tabsParent = document.querySelector('.future-products__types');


    function hideTabsContent() {
        tabsContent.forEach(item => {
            item.style.display = "none";
        });
        tabs.forEach(item => {
            item.classList.remove('future-products__catalog_active');
            item.style.cssText = `color: #fff; border-bottom: none`;
        });
    }

    function showTabsContent(i = 0) {
        tabsContent[i].style.display = 'flex';
        tabs[i].classList.add('future-products__catalog_active');
        tabs[i].style.cssText = `color: #e2b024; border-bottom-color: #e2b024; z-index: 2`;

    }
    hideTabsContent();
    showTabsContent();

    tabsParent.addEventListener('click', () => {
        if (event.target && event.target.classList.contains('future-products__type')) {

            tabs.forEach((item, index) => {
                if (event.target == item) {
                    hideTabsContent();
                    showTabsContent(index);
                }
            });
        }
    });

    // Slider in reviews
    new Swiper(".reviews__slider", {
        // Navigation arrows
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    });

    // Slider in offers
    new Swiper(".offers__slider", {
        // Navigation arrows
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        slidesPerView: 3,
        spaceBetween: 25,
        breakpoints: {
            767: {
                slidesPerView: 3,
            },
            570: {
                spaceBetween: 15
            },
            425: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                // spaceBetween: 0

            }

        }

    });


    // Slider in events
    new Swiper(".events__slider", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        // spaceBetween: 200,
        breakpoints: {
            1070: {
                spaceBetween: 201
            },
            // 991: {
            //     spaceBetween: 120
            // },
            768: {
                spaceBetween: 121
            },
            424: {
                spaceBetween: 31
            },
            320: {
                spaceBetween: 21,
                // loop: true,
                autoplay: {
                    delay: 100
                },

            }
        }
    });

    // form's validate 

    const form = document.querySelector('.contacts__form'),
        username = document.querySelector('.contacts__name'),
        email = document.querySelector('.contacts__email'),
        phone = document.querySelector('.contacts__phone'),
        message = document.querySelector('.contacts__message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        checkInputs();
    });

    function checkInputs() {
        const usernameValue = username.value.trim(),
            emailValue = email.value.trim(),
            phoneValue = phone.value.trim(),
            messageValue = message.value;

        if (usernameValue === '') {
            setErrorFor(username, 'Сannot be blank');
            // error.style.visibility = 'visible';
            // username.style.borderColor = '#e2b024';
        } else {
            setSuccessFor(username);
            // error.style.visibility = 'hidden';
            // username.style.borderColor = '#fff';
        }

        if (emailValue === '' && !emailValue.includes('@')) {
            setErrorFor(email, 'Сannot be blank');
        } else {
            setSuccessFor(email);
        }

        if (phoneValue === '') {
            setErrorFor(phone, 'Сannot be blank');
        } else {
            setSuccessFor(phone);
        }

        if (messageValue === '') {
            setErrorFor(message, 'Сannot be blank');
        } else {
            setSuccessFor(message);
        }
    }

    // form.classList.add('modal');

    function setErrorFor(input, message) {
        const error = document.querySelector('.contacts__error');
        error.style.visibility = 'visible';
        input.style.borderColor = '#e2b024';
        error.innerText = message;
    }

    function setSuccessFor(input) {
        const error = document.querySelector('.contacts__error');
        error.style.visibility = 'hidden';
        input.style.borderColor = '#fff';
    }

});

