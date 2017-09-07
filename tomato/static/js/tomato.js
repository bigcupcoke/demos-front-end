const log = console.log.bind(console)

class Modal {
    constructor() {
        this.init()
    }

    static new() {
        const instance = new this()
        config.modal = instance
        return instance
    }

    init() {
        var t = this.template()
        $('body').append(t)
        this.bindEvents()
    }

    template() {
        var t = `
        <div class="modal fade center" id="modal-add" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
             data-backdrop="true"
             aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title">新建番茄钟</h4>
                    </div>
                    <div class="modal-body">
                        <form class="form-horizontal" role="form">
                            <div class="form-group">
                                <label for="title" class="col-sm-3 control-label"> 任务名称 </label>
                                <div class="col-sm-9">
                                    <input class="form-control" id="title" maxlength="40" placeholder=任务名称
                                           ng-model="title2" type="text" autocomplete=off>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="title" class="col-sm-3 control-label">预估番茄数:</label>

                                <div class="col-sm-3 text-left estimate-count" style="line-height: 35px;">
                                    3个
                                </div>
                                <div class="col-sm-6 text-right" style="line-height: 35px;">
                                    <button type="button" class="btn btn-danger btn-tomato-count-decrease"><span
                                            class="glyphicon glyphicon-minus"></span></button>
                                    &nbsp;&nbsp;
                                    <button type="button" class="btn btn-primary btn-tomato-count-increase"><span
                                            class="glyphicon glyphicon-plus"></span></button>
                                </div>
                            </div>
                        </form>
                        </br>
                        <div class="form-group">
                            <span class="col-sm-4">总共时间</span>
                            <span class="col-sm-4">任务时间</span>
                            <span class="col-sm-4">休息时间</span>
                        </div>
                        <div class="form-group">
                            <h5 class="col-sm-4 task-time">{{t_time}}</h5>
                            <h5 class="col-sm-4 work-time">{{w_time}}</h5>
                            <h5 class="col-sm-4 rest-time">{{r_time}}</h5>
                        </div>
                        </br>
                    </div>
                    <div class="modal-footer">
                        <span class="label label-info">{{tips}}</span>
                        <button type="button" class="btn btn-default" data-dismiss="modal" ng-click="modalCancel()">
                            {{cancel}}
                        </button>
                        <button type="button" class="btn btn-primary" ng-click="modalAccept()">{{accept}}</button>
                    </div>
                </div>
            </div>
        </div>
        `
        return t
    }

    show() {
        log('show')
        $('#modal-add').modal('show')
    }

    bindEvents() {
        var _t = this
        _t.bindEventBtn()
        _t.bindEventUpDown()
        // _t.foucsOnInput()
    }

    bindEventBtn() {
        $('body').on('click', '.btn-tomato-count-increase', () => {
            this.increase()
        })

        $('body').on('click', '.btn-tomato-count-decrease', () => {
            this.decrease()
        })
    }

    bindEventAccept() {
        $('body'.on('click'), '.button-accept', () => {})
    }

    increase() {
        this.changeCount(1)
    }

    decrease() {
        this.changeCount(-1)
    }

    changeCount(offest) {
        config.tomato.count += offest
        $('.estimate-count').text(`${config.tomato.count} 个`)
        let items = Object.keys(config.tomato.perMins)
        items.forEach((e) => this.changeTimeText(e))
    }

    changeTimeText(item) {
        // log('item', item)
        const t = config.tomato
        const mAll = t.perMins[item] * t.count
        const hour = Math.floor(mAll / 60)
        const min = mAll - hour * 60
        // log(mAll, hour, min)
        let r =  `${hour}小时${min}分钟`
        $(`.${item}-time`).text(r)
    }

    foucsOnInput() {
        $('.form-control').foucs()
    }

    bindEventUpDown() {
        const _t = this
        $('body').on('keydown', '.form-control', function(e) {
            let key = e.key

            const o = {
                'ArrowUp': _t.increase,
                'ArrowDown': _t.decrease,
            }
            // log('key', key, o[key])
            o[key].call(_t)
        })
    }
}

class Tomato {
    constructor() {
        this.bindEvents()
    }

    static new() {
        return new this()
    }

    init() {

    }

    bindEvents() {
        log('bind')
        $('body').on('click', '#tomato-add', () => {
            log('click')
            let m = Modal.new()
            m.show()
            // Modal.show()
        })
    }
}

class Todo {
    constructor(form={}) {
        this.title = from.title || '未命名'
        this.count = from.count || 0
        this.status = 'paused'
        this.interuppet = 0
        this.init()
    }

    static new() {

    }

    init() {

    }

    template() {

    }
}
