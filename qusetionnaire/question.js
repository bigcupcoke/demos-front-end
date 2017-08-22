//  questionnaire 类
var enableDebugMode = function(debugMode) {
    if (debugMode) {
        var log = console.log.bind(console, '*** debug');
    } else {
        var log = function() {};
    }
}

var Que = function() {
    this.init();
}

Que.create = function() {
    var instance =  new this();
    return instance;
}

Que.prototype = {

    //  原型指向到 Que
    constructor: Que,

    add: function(type) {
        var t = this.templateByType(type);
        // log(t)
        $('main').append(t);
    },

    templateByOption: function(index, type) {
        var i = index;
        var describe = {
            0: '单选题',
            1: '多选题',
        };
        var t = `
        <div class="question" data-choice=${type}>
            <div class="que-title">
                Q
                <i>${i}</i>${describe[type]}
                <input type="text" class="" value="" placeholder="没道题目的标题">
            </div>
            <ol>
                <li class="que-option">
                    <input type="text" name="" value="" placeholder="每个选项的内容">
                    <button type="button" class="btn btn-danger">删除</button>
                </li>
                <li class="que-option">
                    <input type="text" name="" value="" placeholder="每个选项的内容">
                    <button type="button" class="btn btn-danger">删除</button>
                </li>
                <li class="que-option">
                    <input type="text" name="" value="" placeholder="每个选项的内容">
                    <button type="button" class="btn btn-danger">删除</button>
                </li>
            </ol>
            <div class="option-add">
                添加选项
            </div>
        </div>
        `
        return t;
    },

    templateByText: function(index) {
        var i = index;
        var t = `
        <div class="question">
            <div class="que-title">
                Q
                <i>${i}</i>(问答题)
                <input type="text" class="" value="" placeholder="没道题目的标题">
            </div>
            <textarea name="name" rows="8" cols="80" placeholder="问答题内容"></textarea>
        </div>
        `
        return t;
    },

    bindEvents: function() {
        var _t = this;
        log('binde')
        $('.question-tool').on('click', 'button', function() {
            log('click')
            var self = $(this);
            var type = self.data('type');
            _t.add(type);
        })
    },

    templateByType: function(type) {
        var _t = this;
        var t = type;
        var i = _t.count();
        var template = {
            "0": _t.templateByOption(i, 0),
            "1": _t.templateByOption(i, 1),
            "2": _t.templateByText(i),
        }
        return template[type];
    },

    count: function() {
        var len = $('.question').length;
        var count = -1
        if (len > 0) {
            count = len + 1;
        } else {
            count = 1;
        }
        return count;
    },

    init: function() {
        // log('init')
        this.bindEvents();
    },
}

var que = Que.create();
