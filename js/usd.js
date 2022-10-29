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

"url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Csolana%2Ccardano%2Cbinance%20coin%2Cuniswap%2Cshiba%20inu%2Cripple&vs_currencies=usd&include_24hr_change=true",

"method": "GET",

"headers": {}

}

$.ajax(liveprice).done(function (response){

    btc.innerHTML = response.bitcoin.usd;
    btc_change.innerHTML = response.bitcoin.usd_24h_change;

    ltc.innerHTML = response.litecoin.usd;
    ltc_change.innerHTML = response.litecoin.usd_24h_change;

    eth.innerHTML = response.ethereum.usd;
    eth_change.innerHTML = response.ethereum.usd_24h_change;

    sol.innerHTML = response.solana.usd;
    sol_change.innerHTML = response.solana.usd_24h_change;

    ada.innerHTML = response.cardano.usd;
    ada_change.innerHTML = response.cardano.usd_24h_change;

    uni.innerHTML = response.uniswap.usd;
    uni_change.innerHTML = response.uniswap.usd_24h_change;

    xrp.innerHTML = response.ripple.usd;
    xrp_change.innerHTML = response.ripple.usd_24h_change;

});