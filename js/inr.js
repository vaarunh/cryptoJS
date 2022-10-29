var btc = document.getElementById("bitcoin");

var ltc = document.getElementById("litecoin");

var eth = document.getElementById("ethereum");

var sol = document.getElementById("solana");

var ada = document.getElementById("cardano");

var uni = document.getElementById("uniswap");

var xrp = document.getElementById("ripple");

var btc_change = document.getElementById("bitcoin_change");

var ltc_change = document.getElementById("litecoin_change");

var eth_change = document.getElementById("ethereum_change");

var sol_change = document.getElementById("solana_change");

var ada_change = document.getElementById("cardano_change");

var uni_change = document.getElementById("uniswap_change");

var xrp_change = document.getElementById("ripple_change");

var liveprice = {

"async": true,

"scroosDomain": true,

"url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Csolana%2Ccardano%2Cbinance%20coin%2Cuniswap%2Cshiba%20inu%2Cripple&vs_currencies=inr%2Cusd&include_24hr_change=true",

"method": "GET",

"headers": {}

}

$.ajax(liveprice).done(function (response){

    btc.innerHTML = response.bitcoin.inr;
    btc_change.innerHTML = response.bitcoin.inr_24h_change;

    ltc.innerHTML = response.litecoin.inr;
    ltc_change.innerHTML = response.litecoin.inr_24h_change;

    eth.innerHTML = response.ethereum.inr;
    eth_change.innerHTML = response.ethereum.inr_24h_change;

    sol.innerHTML = response.solana.inr;
    sol_change.innerHTML = response.solana.inr_24h_change;

    ada.innerHTML = response.cardano.inr;
    ada_change.innerHTML = response.cardano.inr_24h_change;

    uni.innerHTML = response.uniswap.inr;
    uni_change.innerHTML = response.uniswap.inr_24h_change;

    xrp.innerHTML = response.ripple.inr;
    xrp_change.innerHTML = response.ripple.inr_24h_change;

});