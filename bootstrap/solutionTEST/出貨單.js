$(function(){
    /*$('[name="submit"]').unbind('click').bind('click', function () {
        alert('123');
        $('[name="submit"]').click(); // 打開
    });*/
    /*$('<button type="button" class="btn btn-default flow-submit btn-primary" style="">審核2</button>').insertBefore($('[name="submit"]')).click(function(){
        alert('123');
        $('[name="submit"]').click(); // 打開
    });*/
    /*setTimeout(function(){
        //$('#dgMaster').datagrid('setWhere'," 客戶編號=1 ");
    },1000);*/
    //parent.$('[href="#collapse_0"]').toggleClass('min');
    //parent.$('#tab').toggleClass('max');
    //parent.$('#favoricon').toggleClass('hide');
    //parent.$('#collapseIcon').click();
})
function dfMaster_onLoad(row)
{
    //alert($('#dfMaster').find('.modal-title').html());
    //alert('123');
    //$('#dpMaster2_總計含稅').numberbox('options').format = 'N3';
    //$('#deMaster').default('options');
    $('#dpMaster2_總計含稅').numberbox('setValue','12345');
    ///取得refval的text
    //setTimeout(function(){
    //var val = $('#dfMaster_客戶編號')[0].value;
    //alert(val);
    //},500);
}
function dfMaster_onApply()
{
    //alert($('#dfMaster_倉庫 option:selected').text());
    return true;
}
function dgDetail_onShowEditor(index, field, editor)
{
    if(field == '產品編號'){
        editor.options.remoteName = '產品資料表.產品資料表';
    }
    return editor;
}
function dfMaster_客戶編號_onFocus()
{
    //alert('123');
}
function dgMaster_onLoad(data)
{	
    //$(this).datagrid('options').editForm = 'DataForm1';
    data;
}
function get_d()
{
    return '台中';
}
var index;
function dgMaster_出貨編號_formatter(value, row, index)
{
    index = $('#dgMaster').datagrid('getSelectedIndex');
    return '<a style="cursor:pointer"onclick=viewtest()>'+ value + '</ a>'
    //return value;
}
function viewtest()
{
    $('#dgMaster').datagrid('viewRow', index); // 查看 
}
function dgMaster_test_formatter(value, row, index)
{
    //var value = '<div title="'+'"><span class="glyphicon glyphicon-eye-open" style="color:blue;cursor:pointer" onclick=btn_test()></span>'+'</div>';
    return value;
}
function btn_test()
{
    alert('123');
}
function testf()
{
    $('#dfMaster').form('edit_row');
}
function dgDetail_onDelete(row,index) {
    var rowindex = index;
    var rfqSeq = row.產品編號;
    var useFlag = row.數量;
    if (useFlag == 10) {
        $.confirm("產品編號" + rfqSeq + "已被採用，<br/>確定要刪除此明細？", function () {
            let opt = $('#dgDetail').datagrid('options');
            if(opt.insertedRows.indexOf(row) >= 0){
                opt.insertedRows.splice(opt.insertedRows.indexOf(row), 1);
                $('#dgDetail').datagrid('removeRow', rowindex);
            }
            else{
                opt.deletedRows.push(row);
                $('#dgDetail').datagrid('removeRow', rowindex);
            }
        })
        return false;
    }
    return true;
}
function myPush() 
{
    var sIndex = $("#dgMaster").datagrid("getSelectedIndex"); 
    if (sIndex >= 0) {
        var row = $("#dgMaster").datagrid("getRows")[sIndex]; // 取得DataGrid目前筆資料
        var userid = '005'; // 設定推送對象(Userid)
        var message = 'ian0830出貨編號:' + row.出貨編號; // 設定訊息內容
        // var link = 'https://if.pse.is/3aafxy'; // 可設定打開外部的連結
        var link = 'bootstrap/出貨單'; // 設定打開內部的連結
        $.callMethod('出貨單','push',{userid:userid,message:message,link:link},function(result){
            $.alert(result,'info');
        });
    }
    else {
        $.alert('請選擇一筆資料','info');
    }
}
var flag = false;
function f_submit()
{
    $('#dfMaster').form('submit');
    flag = true;
}
function dfMaster_onApplied(data)
{
	if(flag){
        flag = false;
        $('#dfMaster').form('setWhere',"出貨編號 = '" + data[0].inserted[0].出貨編號 + "'");
        setTimeout(function(){
            $('#dfMaster').form('status', 'updated');
            //$('#dfMaster').form('edit_row');
        	$('#dgDetail').datagrid('load');
        },200);
    }
}
function change_rn()
{
    $(this).datagrid('options').remoteName = '出貨單.InfoCommand2';
    $(this).datagrid('load');
}