/**
 * Created by girl on 2017/5/4.
 */
/**
 * source为原文件的字符串格式
 */
module.exports=function(source){
    this.cacheable(); //nodejs中声明缓存
    console.log("--------------html template loader-----------");
    console.log(source);
    //对source进行解析
    //var exports=process(source);
    var exports='';
    return"module.exports = "+exports;
}
