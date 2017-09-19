class Page extends Component {
    constructor({slct, title}) {
        super()
        this.title = title || 'Company'
        this.slct = slct || '#main'
        this.warp = $(slct)
    }

    destroy() {
        this.warp.empty()
    }

    renderHtml(){
        var t = `
            <div class="header">
                <h1>${this.title}</h1>
                <h2>单页应用</h2>
            </div>

            <div class="content">

                <div class="pure-g">
                    <div class="pure-u-1-4">
                        <img class="pure-img-responsive" src="img/${this.title}.jpg" alt="Peyto Lake">
                    </div>
                </div>

                <h2 class="content-subhead">${pageDate[this.title]}</h2>
            </div>

        `
        this.warp.append(t)
    }

}
