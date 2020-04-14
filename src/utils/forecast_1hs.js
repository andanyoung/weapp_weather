var forecast_1hs = function(ct_hour, value) {
    let desc = (parseInt(ct_hour) + parseInt(value)) % 24 + ":00"
if(desc.length < 5){
    desc ="0" + desc 
}
return desc;
}

module.exports = forecast_1hs;