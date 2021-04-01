let buttons = document.querySelectorAll(".btn-danger");


buttons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        console.log('Button clicked'+ e);
    })
})
