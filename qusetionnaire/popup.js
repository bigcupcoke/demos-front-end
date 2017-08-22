var Popup = function() {};

Popup.save = function() {
    swal("保存成功!", "你已成功!", "success")
}

Popup.revert = function() {
    swal({
        title: "确定还原吗？",
        text: "一旦还原你将失去所以已填写的数据！",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "确定删除！",
        cancelButtonText: "取消删除！",
        closeOnConfirm: false,
        closeOnCancel: false
    },
    function(isConfirm) {
        if (isConfirm) {
            swal("删除！", "你的虚拟文件已经被删除。",
                "success");
        } else {
            swal("取消！", "你的虚拟文件是安全的:)",
                "error");
        }
    });
}
