import $ from "jquery";

document.querySelectorAll('.droped-menu').forEach(el =>{
    
    el.onclick =()=>{
        let id = Number(el.dataset.id);
        console.log(id);
        if (document.documentElement.clientWidth<=1200) {
            if ( $( `.droped-menu__list[data-id='${id}']` ).is( ":hidden" ) ) {
                $( `.droped-menu__list[data-id='${id}']` ).slideDown( "slow" );
              } else {
                $( `.droped-menu__list[data-id='${id}']` ).slideUp("slow");
              }
        } else {
            return;
        }
       
    }
})