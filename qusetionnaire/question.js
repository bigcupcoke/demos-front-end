

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
        var _t = this;
        $('.question-tool').on('click', 'button', function() {
            log('click add')
            var s = $(this);
            var type = s.data('type');
            var t = _t.templateByType(type);
            $('main').append(t);
        })
    },

    remove: function() {
        var _t = this;
        $('body').on('click', '.que-remove', function() {
            log('click remove')
            var s = $(this);
            var que = s.closest('.question');
            var index = que.index();
            var count = index + 1;
            que.remove();
            _t.changeCount(index);
            // log(count, 'index removed')
        })
    },

    changeCount: function(start) {
        var queAll = $('.question');
        var s = start;
        var qs = $(queAll.slice(s));
        // log(qs, 'qs')
        for (var i = 0; i < qs.length; i++) {
            var e = $(qs[i]);
            // log(e, 'e in for');
            var iTag = e.find('i');
            var count = Number(iTag.text());
            // log(i, 'i now remove')
            iTag.text(count - 1);
        }
    },

    templateByOption: function(index, type) {
        var i = index;
        var describe = {
            0: '单选题',
            1: '多选题',
        };
        var t = `
        <div class="question" data-type=${type}>
            <div class="que-title">
                Q
                <i>${i}</i>${describe[type]}
                <input type="text" class="que-describe" value="" placeholder="没道题目的标题">
                <button class="btn btn-danger que-remove">删除该题</button>
            </div>
            <ol>
                <li class="que-option">
                    <input type="text" name="" value="" placeholder="每个选项的内容">
                    <button type="button" class="btn btn-danger option-remove">删除</button>
                </li>
                <li class="que-option">
                    <input type="text" class="option-content" value="" placeholder="每个选项的内容">
                    <button type="button" class="btn btn-danger option-remove">删除</button>
                </li>
                <li class="que-option">
                    <input type="text" name="" value="" placeholder="每个选项的内容">
                    <button type="button" class="btn btn-danger option-remove">删除</button>
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
                <button class="btn btn-danger que-remove">删除该题</button>
            </div>
            <textarea name="name" rows="8" cols="80" placeholder="问答题内容"></textarea>
        </div>
        `
        return t;
    },

    bindEvents: function() {
        this.add();
        this.remove();
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

    save: function() {
        //  id 是 string 形式
        var id = $('.questionnaire-title').data('data-questionnaireId');
        var title = $('.questionnaire-title').text();
        var ques = $('.question');
        var qsInfo = [

        ]
        var o = {

        }

    },

    infoAll: function() {
        var title = $('.questionnaire-title').text();
        var id = $('.questionnaire-title').data('questionnaireId');
        var quesInfo = this.infoFromQues(id);
        return {
            title: title,
            id: id,
            question: quesInfo
        };
    },

    infoFromQues: function(questionnaireId) {
        var _t = this;
        var qs = $('.question');
        var qId = questionnaireId;
        var r = [];
        for (var i = 0; i < all.length; i++) {
            var e = $(all[i]);
            var type = e.data('type');
            var id = qId + e.find('i').text();
            var describe = e.find('que-describe').text();
            var optionsInfo =_t.infoFromOptions(id, e);
            var o = {
                id: id,
                subject: describe,
                isChoice: type,
                choice: optionsInfo,
            }
            r.push(o);
        }
        return r;
    },

    infoFromOptions: function(queId, que) {
        var p = que;
        var pid = queId;
        var options = p.find('que-option');
        var r = [];
        for (var i = 0; i < options.length; i++) {
            var e = $(options[i]);
            var oId = i + 1;
            var id = pid + oId;
            var content = e.find('input').text();
            var o = {
                id: id,
                options: content,
            }
            r.push(o);
        }
        return r;
    },
}

var que = Que.create();

$('.btn-radio').click();
$('.btn-radio').click();
$('.btn-radio').click();
$('.btn-radio').click();

//  问卷由个title
