class TickTac {
    constructor(info={}) {
        const expires = info.expires || '2017/07/09, 00:00:00'
        this.expires = Date.parse(expires)
        this.delay = info.delay || 1000
        this.downId = 0
        this.container = info.container || null
        this.start()
    }

    static zFill(time) {
        let result
        let num = parseInt(time, 10)
        if (num < 10) {
            result = '0' + num
        } else {
            result = num
        }
        return result
    }

    static create(info={}) {
        const instance = new this(info)
        return instance
    }

    formattedTime() {
        const cls = this.constructor
        const now = Date.now()
        const remainingTime = (this.expires - now) / 1000
        // log('remainingTime', remainingTime)
        let seconds = remainingTime % 60
        seconds = cls.zFill(seconds)

        let minutes = (remainingTime / 60) % 60
        minutes = cls.zFill(minutes)

        let hours = (remainingTime / 3600) % 24
        hours = cls.zFill(hours)

        let days = (remainingTime / 86400) % 30
        days = cls.zFill(days)

        const t = `${days}天  ${hours} : ${minutes} : ${seconds}`
        return t
    }

    countDown() {
        const _this = this
        const remainingTime = this.formattedTime()
        if (this.container !== null) {
            this.container.innerText = remainingTime
        }
        // log('remainingTime', remainingTime)
        this.downId = setTimeout(() => {
            _this.countDown()
        }, this.delay)
    }

    start() {
        this.countDown()
    }

    stop() {
        clearTimeout(this.downId)
    }
}
