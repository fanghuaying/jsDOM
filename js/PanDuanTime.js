/**
 * Created by Administrator on 2018/2/2 0002.
 */
// $(function(){

//     var mydata = new Date();
//     var year = mydata.getFullYear().toString();
//     var month = (mydata.getMonth()+1).toString();
//     var date = mydata.getDate().toString(); 
//     var now = year + change(month) + change(date)

//     // 调用节假日接口
//     $.ajax({
//         type: 'GET',
//         url: 'http://api.goseek.cn/Tools/holiday',
//         data:{
//             data: now
//         },
//         success: dataSeccFunction,
//         error: dataErrFunction
//     });
//     function dataSeccFunction(res){
//         if(code == '1000'){
//             if (res.data == 0) {
//                 console.log("今天为工作日")
//                 // console.log('正在执行')
//                 var time_range = function(beginTime, endTime) {
//                     var strb = beginTime.split(":");
//                     if (strb.length != 2) {
//                         return false;
//                     }

//                     var stre = endTime.split(":");
//                     if (stre.length != 2) {
//                         return false;
//                     }

//                     var b = new Date();
//                     var e = new Date();
//                     var n = new Date();

//                     b.setHours(strb[0]);
//                     b.setMinutes(strb[1]);
//                     e.setHours(stre[0]);
//                     e.setMinutes(stre[1]);

//                     if (n.getTime() - b.getTime() > 0 && n.getTime() - e.getTime() < 0) {
//                         return;
//                     } else {
//                         $("#mem_wdA").attr('disabled',true);
//                         $('#mem_wdA').attr("title","此时间段不能提现");
//                         $('.btn-pri').css({'background-color':'#ededed'});
//                     }
//                 }
//             }else if (res.data == 1) {
//                 $('#stepBtn2').attr('disabled',true)
//                 $('#stepBtn2').attr("title","非开放时间");
//             }else if (res.data == 2) {
//                 $('#stepBtn2').attr('disabled',true)
//                 $('#stepBtn2').attr("title","非开放时间");
//             }
//         }
//         else{
//             alert(res.code)
//         }

//     }
//     function dataErrFunction(res){
//         alert('错误',res)
//     }
//     function change(s) {
//         return s < 10 ? '0' + s: s;
//     }

//     time_range("09:00", "17:00");
// })






function  time_range(beginTime, endTime) {
    var strb = beginTime.split(":");
    if (strb.length != 2) {
        return false;
    }

    var stre = endTime.split(":");
    if (stre.length != 2) {
        return false;
    }

    var b = new Date();
    var e = new Date();
    var n = new Date();

    b.setHours(strb[0]);
    b.setMinutes(strb[1]);
    e.setHours(stre[0]);
    e.setMinutes(stre[1]);

    if (n.getTime() - b.getTime() > 0 && n.getTime() - e.getTime() < 0) {
        console.log('在时间内')
        return;
    } else {
        // $("#mem_wdA").attr('disabled',true);
        // $('#mem_wdA').attr("title","此时间段不能提现");
        // $('.btn-pri').css({'background-color':'#ededed'});
        console.log('在时间内')
    }
}
function isWork(data) {
    // 节假日
    var holidays = ["2018-01-01","2018-02-15","2018-02-16","2018-02-17","2018-02-18","2018-02-19","2018-02-20","2018-02-21","2018-04-05",
                    "2018-04-06","2018-04-07","2018-04-29","2018-04-30","2018-05-01","2018-06-16","2018-06-17","2018-06-18","2018-09-22",
                    "2018-09-23","2018-09-24","2018-10-01","2018-10-02","2018-10-03","2018-10-04","2018-10-05","2018-10-06","2018-10-07"];
    // 调休日
    var rests = ["2018-02-11","2018-02-24","2018-04-08","2018-04-28","2018-09-29","2018-09-30"];
    var data_value = !data ? new Date() : new Date(data);
    var year = data_value.getFullYear();
    var month = data_value.getMonth()+1;
    var day = data_value.getDate();
    var rest_value = year + '-' + change(month) + '-' + change(day)
    var rest_day = data_value.getDay();
    var is_holidays = holidays.indexOf(rest_value);
    var is_rests = rests.indexOf(rest_value);
    
    if(rest_day === 0 || rest_day === 6 || (is_holidays !== -1) || (is_rests !== -1)){
        console.log('星期日或休息日')
    }else{
        console.log('工作日')
    }
}
 function change(s) {
    return s < 10 ? '0' + s: s;
}
time_range("09:00", "17:00");
isWork("2018-02-15")