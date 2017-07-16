/**
 * Created by LiYuanqing on 2016/11/16.
 */
    //成功弱提示
var successmsg={};
successmsg.ealert=function(msg){
    $('body').append('<div class="alert alert-success alert-dismissable" id="myAlert" style="position: fixed;top: 0;width: 100%"> <button aria-hidden="true" data-dismiss="alert" class="close" type="button" style="right: 0">×</button>'+msg+' </div>');
    setTimeout(function () {
        $("#myAlert").remove();
    }, 2000);
};
//失败弱提示
var errormsg={};
errormsg.ealert=function(msg){
    $('body').append('<div class="alert alert-danger alert-dismissable" id="myAlert" style="position: fixed;top: 0;width: 100%"> <button  data-dismiss="alert" class="close" type="button" style="right: 0">×</button>'+msg+' </div>');
    setTimeout(function () {
        $("#myAlert").remove();
    }, 2000);
};

//关闭按钮
$(".close").click(function(){
    $("#myAlert").remove();
})
