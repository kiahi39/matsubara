


var menu = new Vue({
    el: '#menu',
    data: {
        activenum: 0
    },
    methods: {
        menuclick: function(click_menu_num) {
            this.activenum = (this.activenum==click_menu_num) ? 0 : click_menu_num;
            /** 
            if(activenum == click_menu_num){
                activenum = 0;
            } else {
                activenum = click_menu_num;
            }
            */
        }
    }
})