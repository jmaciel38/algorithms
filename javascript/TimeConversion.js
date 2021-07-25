function timeConversion(s) {
    if(typeof s != 'string') return 0;
    let hour, minutes, seconds, daylight;
    const regex = /[^0-9]/gi;
    let sToArr = s.split(':');
    let cTime = {
        hour: '00',
        minutes: '00',
        seconds: '00',
    }
    hour = parseInt(sToArr[0]);
    minutes = parseInt(sToArr[1]);
    seconds = parseInt(sToArr[2].replace(regex, ''));
    daylight = sToArr[2].substr(-2, 2);
    if(typeof hour != 'number' || typeof minutes != 'number' || typeof seconds != 'number') return 0;
    if(hour < 0 || hour > 12) return 0;
    if(minutes < 0 || minutes > 59) return 0;
    if(seconds < 0 || seconds > 59) return 0;
    cTime.minutes = sToArr[1];
    cTime.seconds = sToArr[2].replace(regex, '');
    if(daylight == 'AM' && hour == 12 && (minutes > 0 || seconds > 0)) {
        cTime.hour = '00';
    } else if(daylight == 'PM' && hour == '12' && (minutes > 0 || seconds > 0)){
        cTime.hour = sToArr[0];
    } else {
        cTime.hour = `${ hour + 12 }`;
    }
	return `${cTime.hour}:${cTime.minutes}:${cTime.seconds}`;
}

test01 = '07:05:45PM';
test02 = '12:01:00PM';
test03 = '12:01:00AM';
test04 = '13:01:00AM';
test05 = '12:-01:00AM';
test06 = '12:01:60AM';
test07 = [];
test08 = 'erro:01:60AM';
test09 = '06:40:03AM';

result01 = timeConversion(test01);
result02 = timeConversion(test02);
result03 = timeConversion(test03);
result04 = timeConversion(test04);
result05 = timeConversion(test05);
result06 = timeConversion(test06);
result07 = timeConversion(test07);
result08 = timeConversion(test08);
result09 = timeConversion(test09);

console.log({
    result01,
    result02,
    result03,
    result04,
    result05,
    result06,
    result07,
    result08,
    result09,
});