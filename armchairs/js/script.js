document.addEventListener("DOMContentLoaded", function () {
    const triggerModal = document.querySelectorAll(".trigger-modal"),
        callForm = document.querySelector(".modal__call"),
        closeForm = document.querySelector(".modal__close");

    // modal
    triggerModal.forEach(trigger => trigger.addEventListener("click", (e) => {
        e.preventDefault();
        callForm.style.display = "block";
        document.body.style.overflow = "hidden";
    }));

    closeForm.addEventListener("click", function () {
        callForm.style.display = "none";
        document.body.style.overflow = "";
    });


    //inputmask
    let selector = document.querySelectorAll('input[type="tel"]');
    let im = new Inputmask("+7 (999) 999-99-99");
    im.mask(selector);

    //validate forms
    let validateForms = function (selector, rules) {
        new window.JustValidate(selector, {
            rules: rules,
            messages: {
                name: {
                    minLength: "My custom message about only minLength rule"
                },
                tel: "Заполните поле"
            },
        });
    };
    validateForms(".modal__form", { tel: { required: true } });
    validateForms(".promo__form", { tel: { required: true } });
    validateForms(".request__form", { tel: { required: true } });
});