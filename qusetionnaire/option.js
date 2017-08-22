//  option 类
var Option = function() {
    this.init();
}

Option.create = function() {
    var instance =  new this();
    return instance;
}

Option.prototype = {

    //  原型指向到 Option
    constructor: Option,

    add: function(ol) {
        var t = this.template();
        // log(t)
        ol.append(t);
    },


    template: function() {
        var t = `
            <li class="que-option">
                <input type="text" name="" value="" placeholder="每个选项的内容">
                <button type="button" class="btn btn-danger">删除</button>
            </li>
        `
        return t;
    },

    bindEvents: function() {
        var _t = this;
        log('bindEvents ok');
        $('.body').on('click', '.option-add', function() {
            log('click option')
            var self = $(this);
            var ol = self.closest('ol');
            _t.add(ol);
        })
    },

    init: function() {
        // log('init')
        this.bindEvents();
    },
}

var Option = Option.create();
