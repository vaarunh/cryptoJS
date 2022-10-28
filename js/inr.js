var btc = document.getElementById("bitcoin");

var ltc = document.getElementById("litecoin");

var eth = document.getElementById("ethereum");

var doge = document.getElementById("dogecoin");

var btc_change = document.getElementById("bitcoin_change");
var liveprice = {

"async": true,

"scroosDomain": true,

"url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin&vs_currencies=inr&include_24hr_change=true",

"method": "GET",

"headers": {}

}

$.ajax(liveprice).done(function (response){

    btc.innerHTML = response.bitcoin.inr;
    btc_change.innerHTML = response.bitcoin.inr_24h_change;

    ltc.innerHTML = response.litecoin.inr;

    eth.innerHTML = response.ethereum.inr;

    doge.innerHTML = response.dogecoin.inr;

});