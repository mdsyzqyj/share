function startTime()     
{     
    var today=new Date();//�������ڶ���     
    var YY = today.getFullYear();//ͨ�����ڶ����getFullYear()����������      
    var MM = today.getMonth()+1;//ͨ�����ڶ����getMonth()����������      
    var DD = today.getDate();//ͨ�����ڶ����getDate()����������       
    var HH=today.getHours();//ͨ�����ڶ����getHours��������Сʱ     
    var MI=today.getMinutes();//ͨ�����ڶ����getMinutes�������ط���     
    var SS=today.getSeconds();//ͨ�����ڶ����getSeconds����������     
    // ������ӻ�Сʱ��ֵС��10��������ֵǰ��0���������ʱ��������3��20��9��Ļ�������ʾ15��20��09     
    MM=checkTime(MM);  
    DD=checkTime(DD); 
    HH=checkTime(HH);
    MI=checkTime(MI);     
    SS=checkTime(SS);      
    var WW; //���ڱ������ڣ�getDay()�����õ����ڱ�ţ�  
    if(today.getDay()==0)   WW   =   "������ ";  
    if(today.getDay()==1)   WW   =   "����һ "; 
    if(today.getDay()==2)   WW   =   "���ڶ� ";   
    if(today.getDay()==3)   WW   =   "������ ";   
    if(today.getDay()==4)   WW   =   "������ ";   
    if(today.getDay()==5)   WW   =   "������ ";   
    if(today.getDay()==6)   WW   =   "������ ";   
    document.getElementById('nowYMDSpan').innerHTML=YY+"��"+MM+"��"+DD+"��";    
    document.getElementById('nowHMSSpan').innerHTML= HH+":"+MI+":"+SS;    
    document.getElementById('nowWeekSpan').innerHTML=WW;
    setTimeout('startTime()',1000);//ÿһ�������¼���startTime()����   
}     
  
function checkTime(i)     
{     
    if (i<10)
    {  
        i="0" + i;  
    }     
      return i;  
}    