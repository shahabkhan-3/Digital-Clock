function TimeUpdate(){
    let waqt = new Date();
    let hour = waqt.getHours();
    let minute = waqt.getMinutes();
    let second = waqt.getSeconds();
    hour = hour <10 ?"0" + hour : hour;
    minute = minute <10 ?"0" + minute : minute;
    second = second <10 ?"0" + second : second;

    document.querySelector('.time').innerText=hour + ":" + minute + ':' + second;

}
setInterval(TimeUpdate, 1000);

TimeUpdate();
