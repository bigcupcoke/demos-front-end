class Router extends Component {
    constructor() {
        super()
        this.url = location.href
        this.history = window.history
        this.bindEvents()
        this.renderPage(this.url)
    }

    bindEvents() {
        window.addEventListener('hashchange', (e) => {
            log('event', e)
            var satet = e.newURL.split('#')[1]
            this.history.pushState(hashStr, null, e.newURL)
            this.renderPage(e.newURL)
        })
    }

    renderPage(url) {
        var hashStr = url.split('#')[1] || 'Company'
        var p = new Page({
            slct: '#main',
            title: hashStr,
        })
        this.changePage(p)
    }

    changePage(newPage) {
        if(this.currentPage !== undefined) {
            log('destroy')
            this.currentPage.destroy()
        }
        log('debug newpage', newPage)
        this.currentPage = newPage
        newPage.renderHtml()
    }

}
