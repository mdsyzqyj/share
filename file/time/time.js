function startTime()     
{     
    var today=new Date();//定义日期对象     
    var YY = today.getFullYear();//通过日期对象的getFullYear()方法返回年      
    var MM = today.getMonth()+1;//通过日期对象的getMonth()方法返回月      
    var DD = today.getDate();//通过日期对象的getDate()方法返回日       
    var HH=today.getHours();//通过日期对象的getHours方法返回小时     
    var MI=today.getMinutes();//通过日期对象的getMinutes方法返回分钟     
    var SS=today.getSeconds();//通过日期对象的getSeconds方法返回秒     
    // 如果分钟或小时的值小于10，则在其值前加0，比如如果时间是下午3点20分9秒的话，则显示15：20：09     
    MM=checkTime(MM);  
    DD=checkTime(DD); 
    HH=checkTime(HH);
    MI=checkTime(MI);     
    SS=checkTime(SS);      
    var WW; //用于保存星期（getDay()方法得到星期编号）  
    if(today.getDay()==0)   WW   =   "星期日 ";  
    if(today.getDay()==1)   WW   =   "星期一 "; 
    if(today.getDay()==2)   WW   =   "星期二 ";   
    if(today.getDay()==3)   WW   =   "星期三 ";   
    if(today.getDay()==4)   WW   =   "星期四 ";   
    if(today.getDay()==5)   WW   =   "星期五 ";   
    if(today.getDay()==6)   WW   =   "星期六 ";   
    document.getElementById('nowYMDSpan').innerHTML=YY+"年"+MM+"月"+DD+"日";    
    document.getElementById('nowHMSSpan').innerHTML= HH+":"+MI+":"+SS;    
    document.getElementById('nowWeekSpan').innerHTML=WW;
    setTimeout('startTime()',1000);//每一秒中重新加载startTime()方法   
}     
  
function checkTime(i)     
{     
    if (i<10)
    {  
        i="0" + i;  
    }     
      return i;  
}    