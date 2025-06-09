let time = 144;
if (time >= 0 && time < 15){
    console.log(`Первая четверть`)
}
else if( time >=15 && time < 30){
    console.log(`Вторая четверть`)
}
else if (time >=30 && time < 45){
    console.log(`Третья четверть`)
}
else if (time >=45 && time < 60 ){
    console.log(`Четвертая четверть`)
}
else {
    console.log(`error`)
}
