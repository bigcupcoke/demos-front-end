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

    add: function() {
        var _t = this;
        $('body').on('click', '.option-add', function() {
            log('click option')
            var self = $(this);
            var ol = self.siblings('ol');
            // log(ol, 'ol')
            var counts = ol.find('.que-option').length;
            if (counts >= 10) {
                alert('最多只能设置10个选项');
            } else {
                var t = _t.template();
                // log(t)
                ol.append(t);
            }
        })
    },

    remove: function(btn) {
        log('click option')
        $('body').on('click', '.option-remove', function() {
            log('click option')
            var self = $(this);
            var option = self.closest('.que-option');
            option.remove();
        })
    },

    template: function() {
        var t = `
            <li class="que-option">
                <input type="text" name="" value="" placeholder="每个选项的内容">
                <button type="button" class="btn btn-danger option-remove">删除</button>
            </li>
        `
        return t;
    },

    bindEvents: function() {
        this.add();
        this.remove();
    },

    init: function() {
        log('init')
        this.bindEvents();
    },
}

var Option = Option.create();
