class Component {
    constructor() {
        // handlers 存放相应的事件处理函数
        this.handlers = {}
    }

    on(type, handler) {
        var event = this.handlers[type]
        if (event === undefined || event === null) {
            event = []
        }
        event.push(handler)
        //  方便链式调用
        return this
    }

    fire(...args) {
        // rest  是 参数
        var [type, ...handleArgs] = args
        var handlers = this.handlers[type]
        if (Array.isArray(handlers)) {
            handlers.forEach(func => func.apply(this, handleArgs))
        }
        return this
    }
}
