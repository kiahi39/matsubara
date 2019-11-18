


var menu = new Vue({
    el: '#menu',
    data: {
        activenum: 0
    },
    methods: {
        menuclick: function(click_menu_num) {
            this.activenum = (this.activenum==click_menu_num) ? 0 : click_menu_num;
        }
    }
})

window.addEventListener("mousewheel", e => {
    if (e.deltaX === 0) {
        e.stopPropagation()
        e.preventDefault()
        // noinspection JSSuspiciousNameCombination
        window.scrollBy(e.deltaY, 0)
    }
})