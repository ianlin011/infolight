$(function(){
    //$('#dfMaster').dataform('options');
    //var Param = $.getEncryptParameters();  //取得流程的MENU參數
    //alert(Param.value);
    $('#dfMaster_建檔日期').datebox('options').format = "mm-dd-yyyy";
    $('#dfMaster_建檔日期').data('datetimepicker').setFormat( 'mm-dd-yyyy');
    $('#t1').html('aaa');
})
function dgMaster_onBeforeLoad(param)
{
    //$('#dfMaster').form('options').isShowFlowIcon = false;
    //param.wherestr = "";
}
function exportWord_test()
{
    $(this).datagrid('exportWord', {wordName: '員工資料表1.docx' });
}
function exportWord_test2()
{
    $(this).datagrid('exportWord', {wordName: '員工資料表2.docx' });
}
function fo_test(value){
    return $('#dfMaster_聯絡電話_H_').val();
}
function dfMaster_聯絡電話_H__onBlur(value)
{
    $('#dfMaster_通訊地址').val($('#dfMaster_聯絡電話_H_').val());
}
function dfMaster_聯絡電話_H__onBlur()
{
}
function dfMaster_onLoad(row)
{
    $('#dfMaster_相片').fileupload('options');
    if($('#dfMaster_員工編號').val() == '1') 
    {
        $('#dfMaster_相片').fileupload('options').folder = 'Files/test';
    }
    else 
    {
        $('#dfMaster_相片').fileupload('options').folder = 'Files/test2';
    }
}
function dfMaster_到職日期_onSelect(date)
{
    //$('#dfMaster_建檔日期').datebox('options').format = 'mm/dd/yyyy';
}
function dfMaster_建檔日期_onSelect(date)
{
    //$('#dfMaster_建檔日期').datebox('options').format = 'yyyy-mm-dd';
}
function reloadtodo()
{
    $.fn.flow.reloadGrid(['#dgTodo', '#dgHistory']);
}
//取自動編號
function dosql()
{
    $.callMethod('員工資料表','dosql',{},function(result){
        alert(result);
    });
}
function dfMaster_相片_onBeforeUpload(param, fileName)
{
    alert('123');
    if($('#dfMaster_員工編號').val() == '1') 
    {
        param.folder = 'Files/test';
    }
    else 
    {
        param.folder = 'Files/test2';
    }
}
function dfMaster_姓名_onBlur()
{
}
function dfMaster_身分證號_onBlur()
{
    var control = $('#dfMaster_身分證號');//要檢核的欄位
    var value = control.getValue();
    var label = control.closest('div.form-editor').prev('div').children('label');
    if (label.length) {
        var options = $.parseOptions(label[0]);
        var message = '';
        if (!message) {
            if ((value == undefined || value == null || value == '') && options.required) {
                message = $.fn.locale.validateNull;
            } else {
                message = $.validate(options.validType, value, options.field, $('#dfMaster'));
            }
        }
        if (message) {
            $.alert(message,'danger');
            //錯誤訊息
        }
    } 
}
function dgMaster_btn_test_formatter(value, row, index)
{
    return '<button type="button" onclick="btn_test()">按鈕</button>';
}
function btn_test()
{
    setTimeout(function(){
        var rows = $('#dgMaster').datagrid('getRows'); 
        var index = $('#dgMaster').datagrid('getSelectedIndex');
        var row = rows[index];
        alert(row.員工編號);
    },100);
}
function send_mail()
{
    $.callMethod('員工資料表','send_mail',{},function(result){ 
        $.alert(' 執行成功!','info');
    });
}
function dgMaster_rowStyler(index, row)
{
    $('#dgMaster').find('thead>tr>th').find('[type="checkbox"]')[0].setAttribute("disabled", "disabled");
    if(row.身分證號 == 'A153614039') 
    {
        setTimeout (function (){
            $('#dgMaster').find('tbody>tr>td').find('[type="checkbox"]')[index*2].setAttribute("disabled", "disabled");
            $('#dgMaster').find('tbody>tr>td').find('[type="checkbox"]')[index*2+1].setAttribute("disabled", "disabled");
        },100);
    }
}
function dgMaster_員工編號_formatter(value, row, index)
{
    //if(row.身分證號 == 'A123456789') $('#dgMaster').find('tbody>tr>td').find('[type="checkbox"]')[(index)*2].disabled = true; // 將性質別設為Readonly 
    return value;
}
function dgMaster_onLoad(data)
{
}
