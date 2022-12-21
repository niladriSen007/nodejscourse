const currentDateTime = document.querySelector("#date-time");
let weatheCondition = document.querySelector("#weathecondition");
const temparatureStatus = "clouds";
const getCurrentDay = () =>{
    let currentTime = new Date();
    const weekDayArray = new Array(7);
    weekDayArray[0]="Sun";
    weekDayArray[1]="Mon";
    weekDayArray[2]="Tue";
    weekDayArray[3]="Wed";
    weekDayArray[4]="Thu";
    weekDayArray[5]="Fri";
    weekDayArray[6]="Sat";


    // const MonthArray = new Array(11);
    // MonthArray[0]="January";
    // MonthArray[1]="February";
    // MonthArray[2]="March";
    // MonthArray[3]="April";
    // MonthArray[4]="May";
    // MonthArray[5]="June";
    // MonthArray[6]="July";
    // MonthArray[7]="August";
    // MonthArray[8]="September";
    // MonthArray[9]="October";
    // MonthArray[10]="November";
    // MonthArray[11]="December";

    // console.log(weekDayArray[currentTime.getDay()]);
    // console.log(MonthArray[currentTime.getMonth()])
    // console.log(currentTime.getDate());
    // let hours = currentTime.getHours();
    // let minutes = currentTime.getMinutes();
    // let seconds = currentTime.getSeconds();
    // console.log(`${hours}:${minutes}:${seconds}`)

    // currentDateTime.textContent = `${weekDayArray[currentTime.getDay()]} | ${MonthArray[currentTime.getMonth()]} | ${hours}:${minutes}:${seconds}`
    let day = weekDayArray[currentTime.getDay()];
    return day;
}

const getCurrentTime = () =>{

    const MonthArray = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"];

    const date = new Date();
    let month = date.getMonth() ;
    let today = date.getDate();
    // let year = date.getFullYear();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    
    let period = "AM";
    if(hours<=11 && minutes<=59)
        period = "AM";
    else
    {
        period="PM";
        hours = hours-12;
    }
    if(minutes<10)
    {
        minutes = "0"+minutes;
    }

    // console.log(MonthArray[month]+"/"+today+"/"+period);
    let timeFrame = `${MonthArray[month]} | ${today} | ${hours}:${minutes} ${period}`;
    return timeFrame;
}
currentDateTime.innerHTML = getCurrentDay()+" | "+getCurrentTime();