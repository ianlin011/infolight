exports.dosql = function(param, callback){
    var clientInfo = this.clientInfo;
    var id=param.id;
    var sql = "select 名稱 from 客戶資料表 where 客戶編號 = '"+id+"'"; //SQL條件句
    //this.queryRaw(clientInfo, clientInfo.database, sql, {}, function(err,result){
    //     callback(err,'123test');
         //callback(err,result);
    //});
    callback(null,'123test');
}
