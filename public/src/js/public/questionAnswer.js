document.querySelectorAll(".questionAnswer").forEach(elements => {
    elements.querySelectorAll(".questionAnswer__question-btn").forEach(btn => {
        btn.onclick = () => {
            let id = Number(btn.dataset.idAcardeon);
            btn.classList.toggle("questionAnswer__question-btn_active");
            if ($(`.questionAnswer__question-answer.acardeon[data-id-acardeon='${id}']`).is(":hidden")) {
                $(`.questionAnswer__question-answer.acardeon[data-id-acardeon='${id}']`).slideDown("slow");
            } else {
                $(`.questionAnswer__question-answer.acardeon[data-id-acardeon='${id}']`).slideUp("slow");
            }
        }
    })
})