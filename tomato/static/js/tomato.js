const log = console.log.bind(console)

class Modal {
    constructor() {
        // this.init()
    }

    static init() {
        var t = this.template()
        $('body').append(t)
    }

    static template() {
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
                                    <button type="button" class="btn btn-danger" ng-click="minusTomato()"><span
                                            class="glyphicon glyphicon-minus"></span></button>
                                    &nbsp;&nbsp;
                                    <button type="button" class="btn btn-primary" ng-click="addTomato()"><span
                                            class="glyphicon glyphicon-plus"></span></button>
                                </div>
                            </div>
                        </form>
                        </br>
                        <div class="form-group">
                            <span class="col-sm-4">{{totalTime}}</span>
                            <span class="col-sm-4">{{taskTime}}</span>
                            <span class="col-sm-4">{{restTime}}</span>
                        </div>
                        <div class="form-group">
                            <h5 class="col-sm-4">{{t_time}}</h5>
                            <h5 class="col-sm-4">{{w_time}}</h5>
                            <h5 class="col-sm-4">{{r_time}}</h5>
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

    static show() {
        log('show')
        $('#modal-add').modal('show')
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
            Modal.init()
            Modal.show()
        })
    }

    // add() {
    //     this.modal.show()
    // }
}
