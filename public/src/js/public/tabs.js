import $ from "jquery";
document.querySelectorAll(".tabs").forEach(tabs =>{
    tabs.querySelectorAll(".tabs__btn").forEach(btn=>{
        btn.onclick = () =>{
            let id = btn.dataset.tabId;
            tabs.querySelectorAll(".tabs__content").forEach(content=>{
                content.classList.remove("tabs__content_active");
                if (content.dataset.tabId == id) {
                    console.log(1);
                    content.classList.add("tabs__content_active");
                } 
            })
        }
    })
});