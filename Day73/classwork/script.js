//1)
// setInterval(function(){
//     let times = new Date();
//     console.log(times.toString())
// },1000)

//2)
function timing(){

    let time = new Date();
    let sec = time.getSeconds();
    let hr = time.getHours();
    let min = time.getMinutes();

    console.log("seconds is " + sec + "hour is " + hr + "minutes is" + min)
}

