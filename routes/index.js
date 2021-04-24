__path = process.cwd()

var express = require('express');
var db = require(__path + '/database/db');
try {
var zahirr = db.get("zahirr");
} catch (e) {
	console.log('')
}

var creatorList = ['AGUZ','KING AGUZ','AGUZ2011'];
var creator = creatorList[Math.floor(Math.random() * creatorList.length)];


var ytdl = require('ytdl-core');
var ytpl = require('ytpl');
var secure = require('ssl-express-www');
var cors = require('cors');
var scrapeYt = require("scrape-yt");
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var TikTokScraper = require('tiktok-scraper');
var router  = express.Router();

var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js')
var options = require(__path + '/lib/options.js');
var {
	Vokal,
	Base,
	Searchnabi,
    Gempa
} = require('./../lib');
var cookie = "HSID=A7EDzLn3kae2B1Njb;SSID=AheuwUjMojTWvA5GN;APISID=cgfXh13rQbb4zbLP/AlvlPJ2xBJBsykmS_;SAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;__Secure-3PAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;VISITOR_INFO1_LIVE=RgZLnZtCoPU;LOGIN_INFO=AFmmF2swRQIhAOXIXsKVou2azuz-kTsCKpbM9szRExAMUD-OwHYiuB6eAiAyPm4Ag3O9rbma7umBK-AG1zoGqyJinh4ia03csp5Nkw:QUQ3MjNmeXJ0UHFRS3dzaTNGRmlWR2FfMDRxa2NRYTFiN3lfTEdOVTc4QUlwbUI4S2dlVngxSG10N3ZqcHZwTHBKano5SkN2dDlPSkhRMUtReE42TkhYeUVWS3kyUE1jY2I1QzA1MDZBaktwd1llWU9lOWE4NWhoZV92aDkxeE9vMTNlcG1uMU9rYjhOaDZWdno2ZzN3TXl5TVNhSjNBRnJaMExrQXpoa2xzRVUteFNWZDI5S0Fn;PREF=app=desktop&f4=4000000&al=id;SID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1njBpLTOpxSfN-EaYCRSiDg.;YSC=HCowA1fmvzo;__Secure-3PSID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1dajgWzlBh9TgKapGOwuXfA.;SIDCC=AJi4QfFK0ri9fSfMjMQ4tOJNp6vOb9emETXB_nf2S05mvr2jBlmeEvlSsQSzPMuJl_V0wcbL1r8;__Secure-3PSIDCC=AJi4QfGeWHx-c4uTpU1rXCciO1p0s2fJWU07KrkZhWyD1Tqi8LyR-kHuBwHY9mViVYu1fRh2PA";

loghandler = {
    notparam: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter apikey',
        Apikey: 'aguz2011'
    },
    notkey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter key'
    },
    noturl: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter url'
    },
    notkata: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter kata'
    },
    nottext: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text'
    },
    nottext2: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text2'
    },
    notnabi: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter nabi'
    },
    nottext3: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text3'
    },
    nottheme: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter theme'
    },
    notusername: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter username'
    },
    notvalue: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter value'
    },
    notheme: {
    	status: false,
        creator: `${creator}`,
        code: 406,
        message: 'theme tidak tersedia silahkan masukkan texmaker/list atau baca documentasi'
     },
    invalidKey: { 

<!DOCTYPE html>
<html lang="en"><head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="REST API">
    <meta name="keywords" content="REST API">
    <meta name="author" content="ItsmeikyXSec404">
    <!-- Title -->
    <title>404 - Not Found</title>
    <!--  Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,700" rel="stylesheet">
    <!-- Font awesome -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <!-- main Style -->
    <style>
      body{font-family:'Poppins', sans-serif;background-color:#f8f9fb}a,a:hover,a:visited{text-decoration:none}.btn{line-height:38px;display:inline-block;padding:0 22px;font-size:16px;font-weight:700;margin-right:10px;text-transform:uppercase;-webkit-transition:all 0.5s ease-in-out;-moz-transition:all 0.5s ease-in-out;-ms-transition:all 0.5s ease-in-out;-o-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out;color:#fefefe;background-color:#824dce}.btn:hover{color:#fefefe;background-color:#e91e63}.btn i{line-height:24px;margin-right:5px;font-size:16px}.fa-heart{color:#e53935}.error-page{padding-top:15vh;text-align:center;display:block;margin:0 auto auto}.no-found{margin-top:15px;color:#313131;font-size:48px;font-weight:700;line-height:24px}.error-text{color:#313131;font-size:16px;font-weight:400;line-height:24px;width:50%;margin:30px auto}.uf-copyright{font-size:16px}.copyright{color:#c7c7c7;font-weight:300;line-height:24px;bottom:0;text-align:center;display:block;width:100%;margin-top:60px;margin-bottom:50px}.error{color:#777;font-size:120px;font-weight:700;line-height:0}#astronaut-error{width:167px;height:272px}@media (max-width: 992px){.copyright{margin:30px auto 0;bottom:inherit;padding:0 15px 30px;position:relative;width:80%;display:block}.error-text{width:100%}.no-found{line-height:56px}}@media (max-width: 650px){.error{font-size:180px}}@media (max-width: 480px){.no-found{line-height:50px;font-size:46px;margin-top:20px}.error-text{margin:20px auto}.error{font-size:100px}}@media screen and (max-width: 375px){.error-page{padding-top:20vh}}
    </style>
</head>

<body>
    <!-- Start Error Page -->
    <div class="error-page">
        <!-- Start container  -->
        <div class="container">
            <!-- Start row  -->
            <div class="row">
                <div class="col-md-12">
                    <svg id="astronaut-error"><desc></desc><defs></defs><g transform="matrix(1,0,0,1,0,0)">
<g id="planet">
<style type="text/css">
	.st0{fill:#CE814D;stroke:#231F20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st1{fill:#715EFC;stroke:#231F20;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st2{fill:#FF630D;stroke:#231F20;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st3{opacity:0.3;fill:#231F20;enable-background:new    ;}
	.st4{fill:#3E55FF;stroke:#231F20;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st5{fill:#F99755;stroke:#231F20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st6{fill:#A06137;stroke:#231F20;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st7{fill:none;stroke:#231F20;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st8{fill:#F425C3;stroke:#231F20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st9{fill:#CC0099;stroke:#231F20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st10{fill:#D2E3EB;stroke:#231F20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st11{opacity:0.5;fill:#231F20;enable-background:new    ;}
	.st12{fill:#E5B417;stroke:#231F20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st13{fill:#9B23F9;stroke:#231F20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st14{fill:none;stroke:#231F20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st15{fill:#6B40F2;stroke:#231F20;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st16{fill:#FF33CC;stroke:#231F20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st17{fill:#E4EEF3;stroke:#231F20;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st18{fill:#EDF4F7;stroke:#231F20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st19{fill:#9B23F9;stroke:#231F20;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st20{fill:#CBD1D3;}
	.st21{fill:#AAAAAA;}
	.st22{font-family:'Poppins';}
	.st23{font-size:7px;}
</style>
<path class="st0" d="M150.7,184.7c0,0,0,9.5,2.1,14.2c-0.3,5.1-2.6,9-7.8,11.4c-4.2-1.7-13.8,3.8-18.1,5.4"></path>
<path class="st0" d="M93.9,93.4c0,0,9.1-2.6,13-6c5-1.1,9.4,0,13.2,4.2c-0.5,4.5,7.5,12.1,10.2,15.8"></path>
<path class="st1" d="M32.2,226.3c-1.3,2.2-2.2,4.9-2.2,4.9s-1.8,3.1,0.7,4.3c1.2,0.6,4,0.5,4,0.5l-3.3,15c0,0-2.2,8.9,1.3,11
	c0,0,2.2,1.7,7.9,1.7c5.5,0,10.9-5,12.3-6.2c3.1-2.6,8.7-8.8,12.9-15.7c2.1-3.3,0.2-5.1-2.9-7.5c-2.6-2-5.5-2.8-8.4-4.2
	c1-2.2,6.9-7.3,6.9-7.3s-14.9-7.1-19.5-10.1c1.7,6.4-2.5,14-2.5,14l-3.6-1.8C35.8,225,33.7,223.9,32.2,226.3z M49.4,241.5
	c4.2,2.5-0.1,4-3.4,5.9c-4.1,2.4-2.7-1.4-2.7-1.4C44.3,242.7,45.3,239.1,49.4,241.5z"></path>
<path class="st2" d="M101.9,239.9c0.8,1.9,3.6,6.6,3.6,6.6s0.8,1.7,3.1,0.5c1-0.5,1.6-0.8,1.6-0.8s0.9-0.4,1.2,0.4
	c1.7,4.5,5.5,11.1,5.5,11.1s2.8,5.2,7.2,6c0,0,2.9,0.7,8.4-3.9c2.3-2.2,3.8-7.8,4.1-9.6c0.6-3.2,4-16.4,2.3-23.9
	c-0.3-2.7-2.3-4.3-9-2c-3,1-8.3,3.8-8.3,3.8s-0.3,0.6-1.5-1.7c-1.1-2,0.9-5.4,0.9-5.4s-3.6-0.4-5.1,0.2c-1.6,0.7-9.6,4.8-9.6,4.8
	s-3,0.9-2.3,2.6c0.7,1.7,3.5,7.1,3.5,7.1s-4.2-0.7-5.3,1.5C101.7,238,101.4,238.8,101.9,239.9z M124.6,238.3c3.3-1.4,3.7,2,3,6.8
	c-1.1,7.3-6.6-3.2-6.6-3.2C119.8,239.7,122,239.4,124.6,238.3z"></path>
<path class="st3" d="M31.6,227.6c0,0,15.7,11.9,32.8,16.6c1.1-2.9,8.8-6.9-9.4-13.7c0.2-1.1,1.9-2.9,1.9-2.9s-11.6-4.5-14.6-7.9
	c-0.4,1.4-2.9,7.2-2.9,7.2S33.6,221.9,31.6,227.6z"></path>
<path class="st4" d="M66.7,256.5c2.1,5.9,7.8,13.3,17.9,13.5c5.8,0.1,10.2-3.9,10.2-3.9s7.5-5.8,8.7-18.3c1.6-15.7-4.6-18.3-7.9-20
	c-6-3.2-21.3-5.1-28.2,3.3C62.3,237.3,64.7,250.9,66.7,256.5z M84.1,241.7c5.5,0,5.7,3.5,4.9,7.8c-0.9,4.4-3.5,5.5-3.5,5.5
	c-4.4,1.9-5.7-7.5-5.7-7.5S78.4,241.7,84.1,241.7z"></path>
<path class="st5" d="M122.9,224c0,0-19.2,11.1-42.4,9.2c-39.2-3.2-65.9-33.3-69-62.9c-2.9-27.8,2.2-41.1,16.7-58.8
	c27.1-32.7,75.9-27.5,98.9-14.5c12.9,7.3,31.8,25.9,33,58.6C162,204.2,122.9,224,122.9,224z"></path>
<path class="st0" d="M15.2,177.2c0,0-4.5-6.4-9.1-8.9c-5.1-4.6-5.7-16.8-1-21.2c4.4-1.1,7.9-5,10.4-8.9"></path>
<ellipse class="st6" cx="6.8" cy="157.3" rx="3.2" ry="8.4"></ellipse>
<path class="st6" d="M120.5,175.1c0,6.3-5,11.3-11.2,11.3c-6.2,0-11.2-5.1-11.2-11.3c0-6.3,5-11.3,11.2-11.3
	C115.5,163.8,120.5,168.9,120.5,175.1z"></path>
<ellipse transform="matrix(0.7533 -0.6577 0.6577 0.7533 -118.0513 72.6573)" class="st6" cx="37.8" cy="193.7" rx="5.2" ry="7"></ellipse>
<ellipse transform="matrix(0.8221 -0.5693 0.5693 0.8221 -63.1767 48.6914)" class="st6" cx="46.3" cy="125.4" rx="7" ry="5.2"></ellipse>
<ellipse transform="matrix(0.9674 -0.2534 0.2534 0.9674 -52.2684 32.4579)" class="st6" cx="99.9" cy="219.1" rx="7" ry="5.2"></ellipse>
<ellipse transform="matrix(0.5406 -0.8413 0.8413 0.5406 -40.5123 155.0416)" class="st6" cx="121.7" cy="114.6" rx="6.9" ry="9.3"></ellipse>
<ellipse transform="matrix(0.7109 -0.7033 0.7033 0.7109 -54.565 125.9534)" class="st6" cx="125.9" cy="129.3" rx="3.1" ry="3.6"></ellipse>
<ellipse transform="matrix(0.3645 -0.9312 0.9312 0.3645 -109.7318 123.76)" class="st6" cx="35.8" cy="142.3" rx="2" ry="1.8"></ellipse>
<path class="st0" d="M153.9,132.1c0,0,2.1,4.4,5.5,5.5c5.7,2.1,7.3,13.4,3.3,17.5c-2.8,1.4-3.9,4.7-4.4,7.1"></path>
<ellipse transform="matrix(0.9813 -0.1925 0.1925 0.9813 -25.1201 33.6264)" class="st6" cx="160.5" cy="146.1" rx="2.4" ry="5.9"></ellipse>
<path class="st0" d="M38.8,105c0,0,2-4.7,2.3-8.3c2.7-4.3,6.9-6.4,14.1-6.7c2,2.5,5.5,3.6,8.6,4.2"></path>
<ellipse transform="matrix(0.9144 -0.4049 0.4049 0.9144 -34.1657 27.9042)" class="st6" cx="48.9" cy="94.7" rx="5.9" ry="1.6"></ellipse>
<path class="st7" d="M117.8,161.3c0,0,6.2,3.6,7.5,10.8c1.5,8.1-2.6,12.6-6.5,15.3"></path>
<path class="st7" d="M94.8,181.4c0,0,1.8,7.7,11.8,8.6"></path>
<path class="st7" d="M105.9,160.6c0,0-12.7,1.7-11.9,14.5"></path>
<path class="st7" d="M30.7,185.7c0,0,4.5-4.7,10.2-1"></path>
<path class="st7" d="M31.8,200.6c0,0,4.1,4.1,9.6,3.4s6.9-4.7,6.7-7.7"></path>
<path class="st7" d="M28.1,189.2c0,0-1.8,3.6,1.8,9.2"></path>
<path class="st7" d="M120,130.1c0,0,0.2,4.1,4.4,5.1"></path>
<path class="st7" d="M131.3,126c0,0,2.1,2.2,1.8,4.7c-0.2,1.5-1.3,2.8-2.5,3.4"></path>
<path class="st7" d="M38.4,132.1c0,0,1.5,3.2,6.9,2.1"></path>
<path class="st7" d="M49.6,133c0,0,4.2-1.2,6.1-5.8c1.9-4.6,0.1-6.5-1.2-8.1"></path>
<path class="st7" d="M115,105c0,0-4.7-0.1-5.7,5.2"></path>
<path class="st7" d="M109.3,111.8c0,0-1.2,5.6,5.7,10.4"></path>
<path class="st7" d="M33,145.2c0,0,0.8,1.8,2.8,1.8c2.5,0,3.7-2.4,3.5-4.1"></path>
<path class="st6" d="M76.2,145.8c-0.8-0.5-1.4-1.8-1-2.9c0.4-1,1.6-1.4,2.5-1.1c0.9,0.4,1.9,1.3,1.7,2.4
	C79.2,145.5,77.7,146.7,76.2,145.8z"></path>
<path class="st7" d="M73.9,147.6c0,0,1.4,1.9,3.3,1.9c2.5,0,4.4-1.7,4.2-3.4"></path>
<ellipse transform="matrix(3.990015e-02 -0.9992 0.9992 3.990015e-02 -15.1556 293.5446)" class="st6" cx="145.2" cy="154.7" rx="2" ry="1.8"></ellipse>
<path class="st7" d="M146.9,151c0,0-1.4-1.4-3.2-0.8c-2.4,0.8-2.8,3.5-2,5"></path>
<path class="st3" d="M43.7,120.9c0,0,5.3-1.4,5.9,2.3c0.6,3.7-0.7,6.2-2,7.4c2.3-1.4,6.6-3.9,4.6-9
	C50.2,117.9,44.5,120.4,43.7,120.9z"></path>
<path class="st3" d="M114.1,109.3c0,0,5.1-2.8,9.5,1.9c4.4,4.6,2,10.6-1.4,10.9c3,0.4,7.7,0.1,8.1-6.2c-0.1-1.5-2.4-7.6-9.7-8.8
	C116.1,106.6,114.1,109.3,114.1,109.3z"></path>
<path class="st3" d="M47.1,93.7c0,0,4.3-1.1,4.2-0.4c-0.1,0.7-2,2.8-3.3,3.3c2.1-0.8,6.3-2.7,6.1-4.2C53.9,90.9,47.1,93.7,47.1,93.7
	z"></path>
<path class="st3" d="M4.7,151c0,0,2.5-2,3,3.5c0.4,5.5-0.9,12.5-2.7,9.9c1.2,2.3,3.3,1.9,4.4-1.8c1.1-3.8,0.9-10.7-1.2-12.8
	C6.1,147.7,4.7,151,4.7,151z"></path>
<path class="st3" d="M99.9,169.1c0,0,11.6-5.9,14.9,4.4s-6.2,12.9-6.2,12.9s7.1,1.3,11-6.8s-3.2-13.3-3.2-13.3
	S107.8,159.1,99.9,169.1z"></path>
<path class="st3" d="M96.6,214.9c0,0,4.9-0.3,5.4,2.6c0.5,2.9-1.7,6.9-5.1,6.8c4.1,0.3,7.5,0.3,9.7-4.7
	C108.5,215.4,101.1,212.3,96.6,214.9z"></path>
<path class="st3" d="M31.9,193c0,0,0.4-5.3,5.1-3c4.8,2.3,6.9,9.1,3.6,9.9c3.2-0.4,4.2-5.7,2-8.5c-2.2-2.8-5-4-6.1-4
	S31.2,187.6,31.9,193z"></path>
<path class="st3" d="M157.9,143.5c0,0,1.9-1.6,3,0.6c1.1,2.2,1.9,7.5-0.2,7.2c1.9,1.1,2.6-1.7,2.4-3.6c-0.2-1.9-1-6.6-3.1-7.3
	S157.9,143.1,157.9,143.5z"></path>
<path class="st3" d="M122.9,127.8c0,0,2.1-1.8,3.8,0.4c1.7,2.2,1,3.8,0.2,4.2c1.7-0.5,3.1-2.1,1.5-5
	C126.8,124.6,122.7,126.3,122.9,127.8z"></path>
<path class="st3" d="M75.2,143.5c0,0,1-1.2,2-0.4s1.1,2.1,0.5,2.7c1.1-0.5,2.3-1.5,1.1-3.3C77.6,140.7,75.1,142.2,75.2,143.5z"></path>
<path class="st3" d="M34.5,141.4c0,0,1.3-0.9,1.7,0.2s-0.7,2.6-1.3,2.3c0.9,0.8,2.5,0,2.7-1.5C37.8,140.8,35.9,139.4,34.5,141.4z"></path>
<path class="st3" d="M143.8,153.9c0,0,1.5-0.7,1.9,0.3c0.4,0.9,0,2.4-0.9,2.2c1.6,0.5,2.3-1,2.2-1.8S145.6,151.2,143.8,153.9z"></path>
<path class="st3" d="M46.3,183.3c-36.8-36.7-10.2-79.7-10.2-79.7c-9.6,7.4-19.8,21.7-24.1,39.1c-1.9,2-4.3,3.8-6.7,4.4
	c-1.1,1-7.2,10.4,0,20.6c1.7,1.3,3.9,3.1,5.9,4.7c2.9,15,11.3,30.6,28.1,45.3c57.7,38.8,99.3-3.2,106.8-14.5
	C128.4,215.3,83.1,220,46.3,183.3z"></path>
<path class="st3" d="M64.4,244c0,0-1.7-6.8,3.4-12.8c1.2,0.5,18.6,4.1,32.9,0.7c0.8,0.7,2.5,2.2,2.7,10.4
	c-4.1,2.9-14.1,3.3-14.1,3.3s0.3-4.6-4.8-4.2c-5.1,0.5-4.9,3.3-4.9,4.2C77.3,245.7,69.2,245.3,64.4,244z"></path>
<path class="st3" d="M103.8,242.2c0,0,15.6-6.2,22.9-16.2c-1.6,0.4-6.1,4.7-7-0.4c-1.3,0.6-12.4,5.1-14.5,5.2
	c1.1,2.2,1.9,4.5,1.9,4.5s-3.5-0.1-3.8,0.4C103.2,237.1,104.2,239.3,103.8,242.2z"></path>
<path class="st8" d="M62.6,24.7c0,0,2.2-1.4,4.3-0.6c1.9,0.7,2.9,2.3,3.8,1.6c0.7-0.6,0.1-2.7-2.2-3.9c1.3-0.5,6.3-0.6,6.8-3.9
	c0.5-3.6-3-8.9-9.9-4.9s-6.5,6.1-6.5,6.1S61.8,20.3,62.6,24.7z"></path>
<path class="st9" d="M56.6,19.9c0,0-0.5-0.9-0.1-1.6c0.3-0.5,1.9-1.4,3.4,0s4.6,6.2,3.2,7.6c-1.3,1.2-2.6,0-2.6,0
	S57.6,20.9,56.6,19.9z"></path>
<path class="st10" d="M75.3,40.9c0,0-15.4,0.3-17.2-6.9c-1.2-5.8,2.7-8.7,2.7-8.7s-0.4-3.2-3.3-5.4c-3.4,1.7-10.9,5.5-10.2,15.2
	c1,12.9,21.1,17.6,26.8,18.1C74.7,48.8,75.3,40.9,75.3,40.9z"></path>
<path class="st7" d="M48.5,39.5c0,0,6.4,2.7,10.3-3.8"></path>
<path class="st3" d="M68.3,40.3c0,0-2,9.3-4.4,10.5c1.9,0.7,9.8,2.4,9.8,2.4l1.5-12.3L68.3,40.3z"></path>
<path class="st3" d="M56.4,20.8c0,0,3.1,2.8,3.5,5.4c0.5-0.5,0.9-0.9,0.9-0.9s-0.7-3.3-3.2-5.5C57,20.3,56.4,20.8,56.4,20.8z"></path>
<path class="st11" d="M61.4,98.2c0,0-4.3,0.7-3,2.2s4.7,3.8,11.3,3s10.3-4.9,13.4-4.9s5.8,0,10.4,2.5s12.1,3.9,17.5,0.6
	c3.3-2.1-1.7-2.4-1.7-2.4s-14.7-4-21-4.1C81.8,95.1,66,96,61.4,98.2z"></path>
<path class="st12" d="M60.8,97.2c0,0-0.6,0.3-0.9,2.4c1.1,0.8,3.6,2.2,9.3,2.3c5.8,0.1,10.2-4.4,10.2-4.4s-0.1-1.4-0.9-2.5
	C77.7,95.6,70.4,100.7,60.8,97.2z"></path>
<path class="st12" d="M110,97.2c0,0,0.6,0.3,0.9,2.4c-1.1,0.8-3.6,2.2-9.3,2.3c-5.8,0.1-10.2-4.4-10.2-4.4s0.1-1.4,0.9-2.5
	C93.2,95.6,100.4,100.7,110,97.2z"></path>
<path class="st10" d="M100.3,40.9c0,0,12.5,2,15.1,10.7c2.9,9.9-4.6,16.2-4.6,16.2s1.3-3.1-0.8-4.7c-2.1-1.6-3.3-0.7-3.3-0.7
	s2.6-3.5,0.5-7c-1.4-2.5-3.5-2.6-4.5-2.7C102.4,50.2,101.8,45.7,100.3,40.9z"></path>
<path class="st10" d="M83.9,2.5c0,0-16.6-0.6-17.6,13.9c-0.8,11.9,2.5,20.2,10.2,21.9c7.7,1.7,15.2,0.3,18-0.7
	c2.8-1.1,10.9-3.3,9.2-20.9C102.4,3.4,89.4,2.5,83.9,2.5z"></path>
<path class="st13" d="M68.1,87.1c0,0-0.1,3.8-1.3,4c-1.2,0.3-4.1-0.1-5.6,2.6c-1,1.8-0.4,3.5-0.4,3.5s5.1,3.9,13.4,0.9
	c3-1.1,4.3-3,4.3-3s0.8-3-1.1-7.5C75.3,87.2,71.4,87.4,68.1,87.1z"></path>
<path class="st13" d="M69.4,89.1c0,0-6-1.1-1.6-4.4c1.9-0.1,9.7-0.4,9.7-0.4s2-0.1,1.5,2.8c-0.3,1.8-3.5,2.5-3.5,2.5"></path>
<path class="st13" d="M102.8,87.1c0,0,0.1,3.8,1.3,4c1.2,0.3,4.1-0.1,5.6,2.6c1,1.8,0.4,3.5,0.4,3.5s-5.1,3.9-13.4,0.9
	c-3-1.1-4.3-3-4.3-3s-0.8-3,1.1-7.5C95.6,87.3,99.5,87.4,102.8,87.1z"></path>
<path class="st13" d="M101.5,89.1c0,0,5.8-2.2,1.3-5.1c-1.9-0.1-9.4,0.7-9.4,0.7s-1.7,0.6-1.4,3c0.2,1.8,3.4,1.9,3.4,1.9"></path>
<path class="st14" d="M104.1,91.2c0,0-3.5-0.1-4.8,2.5"></path>
<path class="st10" d="M68.3,85.8c1.6,1.9,5.7,1.8,8.8,0.2c0.8-3.6,1.3-14.1,8.1-15.3C92,69.5,93.6,86,93.6,86s5.4,3.1,8.9-0.5
	c1.9-8.5,2.5-28.7-2.3-45c-5.7,2.3-19.6,4.7-30.1,0C66,58.1,67,79.3,68.3,85.8z"></path>
<path class="st14" d="M66.8,91.1c0,0,3.5-0.1,4.8,2.5"></path>
<path class="st15" d="M70.6,10.6c0,0,11,5.4,29,0c2.6,5.4,3.2,13.2,0.3,19.4c-1.3,1.3-15.1,6.4-29.2,1
	C69.3,28.6,65.9,18.4,70.6,10.6z"></path>
<path class="st9" d="M105.8,62.2c0,0,1-2.1,3.7-1s4.2,3.5,3.3,5.3c-1,2.2-3.4,2.2-4.5,1.7C107.3,67.8,104.4,66.1,105.8,62.2z"></path>
<path class="st16" d="M110.5,66.1c0,0-0.2-3-2.8-3.3c-1.4-0.2-1.2-1-2.7-1.4c-0.7-0.2-1.4-0.2-1.4-0.2l0.1,2.8c0,0-3.2-0.4-3.6,2
	c-0.2,1.4,1.3,5.6,3.8,5.5C106.4,71.5,110.9,70.4,110.5,66.1z"></path>
<path class="st17" d="M72.6,40.5c0,0-2.4,10.6-2.4,21.9c6.8,3.4,25.3,3.2,30.5-1.5c0-3-0.8-13.8-2.5-20.8
	C95.5,40.7,82.4,41.7,72.6,40.5z"></path>
<path class="st18" d="M71.6,36.1c0,0-3.1,1.3-1.4,4.5c1.6,0.6,13.4,6.4,30-0.1c0.7-1.2,1.3-3.9-1.7-5C95.8,38.2,84,40.5,71.6,36.1z"></path>
<path class="st19" d="M67.6,72.4c0,0,2.1,1.3,6.4,1.6c3.2,0.2,2.3,3.4-0.3,3.5c-2.3,0.1-4-0.7-6-1.4C67.5,74.6,67.6,72.4,67.6,72.4z
	"></path>
<path class="st19" d="M67.8,78.5c0,0,1.1,1,5.4,1.3c3.2,0.2,2.3,3.4-0.3,3.5C70.6,83.3,70,82.7,68,82C67.8,80.5,67.8,78.5,67.8,78.5
	z"></path>
<path class="st19" d="M103.4,73.4c0,0-2.1,1.3-6.4,1.6c-3.2,0.2-2.3,3.4,0.3,3.5c2.3,0.1,4-0.7,6-1.4
	C103.6,75.6,103.4,73.4,103.4,73.4z"></path>
<path class="st19" d="M102.8,79.4c0,0-1.1,1-5.4,1.3c-3.2,0.2-2.3,3.4,0.3,3.5c2.3,0.1,2.9-0.5,4.9-1.3
	C102.8,81.4,102.8,79.4,102.8,79.4z"></path>
<path class="st7" d="M72.1,5.7c0,0,12.6,4.2,24.2-0.6"></path>
<path class="st7" d="M107.2,54.7c0,0,2.3-4.9,7.9-4"></path>
<path class="st7" d="M86,64.8c0,0,0.5,3.1-0.2,5.9"></path>
<path class="st3" d="M69.9,8.2c0,0-6.7,11.7,1,25.2c3.5,5.6,19,4.5,19,4.5s-8.1,1.9-18-1.7c-1.3-1.2-5.5-4.6-5.6-15.4
	C66.4,10,69.9,8.2,69.9,8.2z"></path>
<path class="st3" d="M80.4,3.1c0,0-5.5,1.8-4,2.3C78,5.9,82.1,7.1,88.1,7C86.4,7.2,76.4,7.9,73,5.5C73.7,5.1,78.1,3.2,80.4,3.1z"></path>
<path class="st3" d="M70.2,37.6c0,0,8.9,4.8,21.7,1.9c5.6-1.5,6.6-3.5,6.6-3.5s-11.1,5-26.7,0.3C71.5,36.6,70.3,37.1,70.2,37.6z"></path>
<path class="st3" d="M70.1,42.7c0,0,14.1,5.8,30.1-0.7c0-0.4-0.3-1.1-0.3-1.1s-15.4,5.2-29.7,0C70.1,41.3,70.1,42.7,70.1,42.7z"></path>
<path class="st3" d="M71.5,87.2c0,0-4-10.9-3.3-32.5c-0.7,4.2-1.9,21,0.1,31.1C68.9,86.3,70.7,87.2,71.5,87.2z"></path>
<path class="st3" d="M87.3,70.6c0,0,6.8-1,8.6,16.3c-1.1-0.3-1.9-1.2-1.9-1.2S92.5,72.1,87.3,70.6z"></path>
<path class="st3" d="M99.7,67.1c0,0-0.2,5.8,3.8,7.9c0-2.1,0-3.3,0-3.3S100.6,70.8,99.7,67.1z"></path>
<path class="st3" d="M95.6,90c0,0,0.7,7.6,6.9,9.2c-0.4,1,0.1,2.7,0.3,2.7s-7.2,0.9-11-4.3c0.1-1.9,1-8.6,1-8.6L95.6,90z"></path>
<path class="st3" d="M72,89.4l-0.5,3.8c0,0-4.8-1.7-6.5,0.4c-1.6,2.1,0.1,5.2,2.4,5.6c-0.5,0.6-0.4,2-0.3,2.3
	c0.1,0.3-4.8-0.2-6.9-2.1c0.3-1.9,1-5.7,1-5.7s1.5-2.8,5.9-2.8c0.5-0.8,1-2.2,1-2.2S70.5,89.4,72,89.4z"></path>
<path class="st20" d="M97.9,13.6c0,0-1,0.7-3.7,1.1c1.6,3.6,1.6,10.2,1.7,14.3c1.3-0.1,2-0.1,2.6-0.7
	C98.7,27.2,100.1,20.3,97.9,13.6z"></path>
<path class="st21" d="M92.5,15c0,0-1,0.4-2.1,0.4c1.3,4.1,1.9,10,2,14c1.3-0.1,0.9-0.1,1.8-0.3C94.4,28,94.7,21.7,92.5,15z"></path>
<path class="st3" d="M102.5,49.3c0,0,7,1,7.3,6.4c0.2,3.9-0.9,5.4-0.9,5.4l-1.4,0c0,0,2.1-5.5-2.1-7.5c-1.7-0.8-2.6-0.7-2.6-0.7
	L102.5,49.3z"></path>
<text transform="matrix(1 0 0 1 73.0442 54.3325)" class="st22 st23"> Aguz</text>
</g>
</g></svg>
                    <h1 class="no-found">Hayolo....</h1>
                    <p class="error-text">Mau Ngapain Hyooo.</p>
                    <a href="https://aguz-api.herokuapp.com" class="btn"><i class="uf uf-arrow-left"></i>Back To Home</a>
                </div>
            </div>
            <!-- End row  -->
        </div>
        <!-- End container -->
        <!-- Start copyright -->
        <div class="container footer">
            <div class="row">
                    <p id="kmtl" class="copyright">Copyright &copy; 2021 <a href="https://aguz-api.herokuapp.com">Aguz</a>
                    </p>
            </div>
        </div>
        <!-- End copyright -->
    </div>
    <!-- End Error Page -->
    <!-- Scripts -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script>
            var url = 'https://aguz-api.herokuapp.com'; // url tujuan
            var count = 30; // dalam detik
            function countDown() {
                if (count > 0) {
                    count--;
                    var waktu = count + 1;
                    $('#kmtl').html('<font color="black">Copyright Aguz</font>');
                    setTimeout("countDown()", 1000);
                } else {
                    window.location.href = url;
                }
            }
            countDown();
        </script>
</body>
</html>
 },
    invalidlink: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin link anda tidak valid.'
    },
    invalidkata: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin kata tidak ada dalam api.'
    },
    notAddApiKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter status, apikeyInput, email, nomorhp, name, age, country, exp'
    },
    error: {
        status: false,
        creator: `${creator}`,
        message: 'mungkin sedang dilakukan perbaikan'
    }
}

var len = 15
        var arr = '123456789abcdefghijklmnopqrstuvwxyz'
        var random = '';

        for (var i = len; i > 0; i--) {
            random += arr[Math.floor(Math.random() * arr.length)];
        }

        var lenn = 5
        var randomlagi = '';

        for (var i = lenn; i > 0; i--) {
            randomlagi += arr[Math.floor(Math.random() * arr.length)];
        }

        var randomTextNumber = random+randomlagi+'---------ZahirGanteng'+'ZHIRRR--GANS';
        
 
 async function cekApiKey(api) {
 	ap = await zahirr.findOne({apikey:api})
 return ap;
 }
router.get('/find', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.notparam)
    if (apikey != 'aguz2011') return res.json(loghandler.invalidKey)

    try {
        zahirr.find()
            .then(result => {
                res.json({
                    status: true,
                    creator: `${creator}`,
                    result
                })
        })
    } catch (e) {
        console.log(e)
        res.json(loghandler.error)
    }
})

router.get('/cekapikey', async(req, res, next) => {
  const apikey = req.query.apikey;
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)) {
    res.json({
      status: 'active',
      creator: `${creator}`,
      apikey: `${apikey}`,
      message: 'APIKEY ACTIVE'
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/addapikey', (req, res, next) => {
    var apikey = req.query.apikey,
        status = req.query.status,
        apikeyInput  = req.query.apikeyInput,
        email = req.query.email,
        nomorhp = req.query.nomorhp
        name = req.query.name,
        age = req.query.age,
        country = req.query.country;
        exp = req.query.exp;

    if (!apikey) return res.json(loghandler.notparam)
    if (!(status && apikeyInput && email && nomorhp && name && age && country && exp)) return res.json(loghandler.notAddApiKey)
    if (apikey != 'aguz2011') return res.json(loghandler.invalidKey)

    try {
        zahirr.insert({
        	status: status,
            apikey: apikeyInput,
            email: email,
            nomor_hp: nomorhp,
            name: name,
            age: age,
            country: country,
            exp: exp
        })
        .then(() => {
              res.json({
                  status: true,
                  creator: `${creator}`,
                  result: 'berhasil menambah data, status : ' + status + ', apikey : ' + apikeyInput + ', email : ' + email + ', nomor_hp : ' + nomorhp + ', name :  ' + name + ', age : ' + age + ', country : ' + country + ', exp : ' + exp
              })
        })
    } catch (e) {
        console.log(e)
        res.json(loghandler.error)
    }
})

router.get('/remove', (req, res, next) => {
    var apikey = req.query.apikey,
        status = req.query.status,
        apikeyInput  = req.query.apikeyInput,
        email = req.query.email,
        nomorhp = req.query.nomorhp
        name = req.query.name,
        age = req.query.age,
        country = req.query.country;
        exp = req.query.exp;

    if (!apikey) return res.json(loghandler.notparam)
    if (!(status && apikeyInput && email && nomorhp && name && age && country && exp)) return res.json(loghandler.notAddApiKey)
    if (apikey != 'aguz2011') return res.json(loghandler.invalidKey)

    try {
        zahirr.remove({
            status: status,
            apikey: apikeyInput,
            email: email,
            nomor_hp: nomorhp,
            name: name,
            age: age,
            country: country,
            exp: exp
        })
        .then(() => {
             res.json({
                  status: true,
                  creator: `${creator}`,
                  result: 'berhasil menghapus data, status : ' + status + ', apikey : ' + apikeyInput + ', email : ' + email + ', nomor_hp : ' + nomorhp + ', name :  ' + name + ', age : ' + age + ', country : ' + country + ', exp : ' + exp
              })
        })
    } catch (e) {
        console.log(e)
        res.json(loghandler.error)
    }
})

router.get('/tiktod', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        url = req.query.url


	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
     if (!url) return res.json(loghandler.noturl)

     TikTokScraper.getVideoMeta(url, options)
         .then(vid => {
             console.log(vid)
             res.json({
                 status: true,
                 creator: `${creator}`,
                 videoNoWm: vid
             })
         })
         .catch(e => {
             res.json(loghandler.invalidlink)
         })
})

router.get('/tiktod/stalk', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        username = req.query.username

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
    if (!username) return res.json(loghandler.notusername)


    TikTokScraper.getUserProfileInfo(username)
        .then(user => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : user
            })
        })
        .catch(e => {
             res.json({
                 status : false,
                 creator : `${creator}`,
                 message : "error, mungkin username anda tidak valid"
             })
         })
})

router.get('/randomquote', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/randomquotes`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/infonpm', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            query = req.query.query
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
    if (!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       fetch(encodeURI(`https://registry.npmjs.org/${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result,
                 message : `jangan lupa follow ${creator}`
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/short/tiny', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        url = req.query.url

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
     if (!url) return res.json(loghandler.noturl)

     request(`https://tinyurl.com/api-create.php?url=${url}`, function (error, response, body) {
         try {
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result : {
                     link : `${body}`,
                 },
                 message : `jangan lupa follow ${creator}`
             })
         } catch (e) {
             console.log('Error :', color(e,'red'))
             res.json(loghandler.invalidlink)
         }
     })
})

router.get('/base', async (req, res, next) => {
	var type = req.query.type,
		encode = req.query.encode,
		decode = req.query.decode,
		apikeyInput = req.query.apikey;
		if (!apikeyInput) return res.json(loghandler.notparam)
		if (apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
		if (!type) return res.json({status: false, creator, code: 404, message: 'masukan parameter type, type yang tersedia : base64 , base32'})
		if (type == 'base64' && encode){
				Base("b64enc", encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base64' && decode){
				Base("b64dec", decode)
				.then(result => {
					res.json({
						status: true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32' && encode){
				Base('b32enc', encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32' && decode){
				Base('b32dec', decode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if(!(encode || decode)){
				res.json({
					status:false,
					creator: `${creator}`,
					message: "tambahkan parameter encode/decode"
				})
			} else {
				res.json(loghandler.error)
			}
})

router.get('/nulis', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`http://salism3.pythonanywhere.com/write/?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/textmaker', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'glitch' && theme != 'google-suggestion') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'glitch') {
        	if (!text2) return res.json(loghandler.nottext2)
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=93f5c8966cfaf3ca19051ee9f85c14f3&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'google-suggestion') {
        	if (!text2) return res.json(loghandler.nottext2)
        if (!text3) return res.json(loghandler.nottext3)
            request.post({
                url: "https://photooxy.com/other-design/make-google-suggestion-photos-238.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&text_3=${text3}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/game', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'pubg' && theme != 'battlefield') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'pubg') {
        	if (!text2) return res.json(loghandler.nottext2)
            try {
            request.post({
                url: "https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'battlefield') {
        	if (!text2) return res.json(loghandler.nottext2)
            request.post({
                url: "https://photooxy.com/fps-game-effect/create-battlefield-4-rising-effect-152.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/senja', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'coffee-cup' && theme != 'coffee-cup2') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'coffee-cup') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'coffee-cup2') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/kisahnabi', async (req, res, next) => {
	var nabi = req.query.nabi,
		apikeyInput = req.query.apikey;

		if (!apikeyInput) return res.json(loghandler.notparam)
		if (apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
		Searchnabi(nabi)
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
})

router.get('/infogempa', async (req, res, next) => {
	        var apikeyInput = req.query.apikey

		if (!apikeyInput) return res.json(loghandler.notparam)
		if (apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
		Gempa()
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
})

router.get('/hadits', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            kitab = req.query.kitab,
            nomor = req.query.nomor
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
    if (!kitab) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kitab"})
    if (!nomor) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nomor"})

       fetch(encodeURI(`https://hadits-api-zhirrr.vercel.app/books/${kitab}/${nomor}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/quran', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            surah = req.query.surah,
            ayat = req.query.ayat
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
    if (!surah) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter surah"})
    if (!ayat) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter ayat"})

       fetch(encodeURI(`https://alquran-apiii.vercel.app/surah/${surah}/${ayat}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/fbdown', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})

       fetch(encodeURI(`https://fb-api-zhirrr.vercel.app/?url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/textmaker/metallic', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'neon' && theme != 'glow') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'neon') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'glow') {
            request.post({
                url: "https://photooxy.com/other-design/create-metallic-text-glow-online-188.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/alam', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'summer' && theme != 'flower') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'summer') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'flower') {
            request.post({
                url: "https://photooxy.com/art-effects/flower-typography-text-effect-164.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/muslim/tahlil', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataTahlil.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/wirid', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataWirid.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/ayatkursi', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataAyatKursi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/doaharian', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataDoaHarian.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/bacaanshalat', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataBacaanShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/niatshalat', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataNiatShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/kisahnabi', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataKisahNabi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/asmaulhusna', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataAsmaulHusna.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/niatshubuh', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatShubuh.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/niatdzuhur', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatDzuhur.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/niatmaghrib', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatMaghrib.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/niatisya', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatIsya.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/niatashar', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatAshar.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/wallpaper/cyberspace', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/CyberSpace.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/wallpaper/teknologi', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Technology.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/wallpaper/muslim', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Islamic.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/wallpaper/programming', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Programming.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/wallpaper/pegunungan', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Mountain.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/wikipedia', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            search = req.query.search
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/wiki?keyword=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/randomquote/muslim', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=agamis`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/drakorasia', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            search = req.query.search
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`http://docs-api-zahirrr.herokuapp.com/api/drakorasia?search=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/jadwalshalat', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            kota = req.query.kota
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
        if(!kota) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/Zhirrr-Database/main/adzan/${kota}/2021/03.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/fakedata', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            country = req.query.country
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
        if(!country) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter country"})

       fetch(encodeURI(`https://fakename-api-zhirrr.vercel.app/api/fakename?country=${country}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/hilih', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            kata = req.query.kata
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://hilih-api-zhirrr.vercel.app/api/hilih?kata=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/liriklagu', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            lagu = req.query.lagu
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
        if(!lagu) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/lirik?search=${lagu}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/chordlagu', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            lagu = req.query.lagu
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
        if(!lagu) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/chord?q=${lagu}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/random/asmaulhusna', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/random/asmaulhusna`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/kbbi', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            kata = req.query.kata
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://kbbi-api-zhirrr.vercel.app/api/kbbi?text=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/covidindo', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/covid-indonesia`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/covidworld', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/world`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/kodepos', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    kota = req.query.kota
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
	if(!kota) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})

       fetch(encodeURI(`https://kodepos-api-zhirrr.vercel.app/?q=${kota}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/infocuaca', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    provinsi = req.query.provinsi
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
	if(!provinsi) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter provinsi"})
       fetch(encodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/cuaca/${provinsi}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/infocuaca/bandara', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
       fetch(encodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/cuaca/bandara`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/infocuaca/dunia', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
       fetch(encodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/cuaca/dunia`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/infotsunami', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
       fetch(encodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/tsunami`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/random/meme', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/meme`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/quotes/kanye', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=kanye`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/translate', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    kata = req.query.kata
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
	if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/translate?text=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/anime/kusonime', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    search = req.query.search
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
	if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/kusonime?search=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/gabut', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/bosan`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/manga', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    search = req.query.search
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
	if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/manga?keyword=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/random/wallpaper', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/random/wallpaper?genre=acak`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/kuis/caklontong', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=caklontong`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/kuis/tebakgambar', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=tebakgambar`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/news/cnn', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            type = req.query.type
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
    if (!type) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter type"})

       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/cnn-news/${type}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/news/cnbc', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            type = req.query.type
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
    if (!type) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter type"})

       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/cnbc-news/${type}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/news/republika', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            type = req.query.type
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
    if (!type) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter type"})

       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/republika-news/${type}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/news/tempo', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            type = req.query.type
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
    if (!type) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter type"})

       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/tempo-news/${type}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/news/antara', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            type = req.query.type
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
    if (!type) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter type"})

       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/antara-news/${type}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/news/kumparan', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/kumparan-news`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/filmapik/search', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            film = req.query.film
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
    if (!film) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter film"})

       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/search?q=${film}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/filmapik/kategori', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            film = req.query.film
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
    if (!film) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter film"})

       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/category?search=${film}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/filmapik/play', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            id = req.query.id
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
    if (!id) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter id"})

       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/play?id=${id}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/filmapik/terbaru', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/latest`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/lk21/search', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            film = req.query.film
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
    if (!film) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter film"})

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/search?query=${film}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/lk21/terbaru', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/newupload`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/lk21/comingsoon', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/comingsoon`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/lk21/tvseries', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/tv`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/lk21/year', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            tahun = req.query.tahun
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
    if (!tahun) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter tahun"})

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/year?year=${tahun}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/lk21/country', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            negara = req.query.negara
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
    if (!negara) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter negara"})

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/country?country=${negara}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/lk21/genre', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            tipe = req.query.tipe
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
    if (!tipe) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter tipe"})

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/genre?genre=${tipe}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/textmaker/random', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'text-burn' && theme != 'art-quote') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'text-burn') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'art-quote') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/roses', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'wooden-boarch' && theme != 'golden') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'wooden-boarch') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/writing-on-wooden-boards-368.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'golden') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/yutub/video', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/ytv?url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/yutub/audio', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/yta?url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/ig/stalk', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            username = req.query.username
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
    if (!username) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter username"})

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/stalk?username=${username}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/maker', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/textmaker?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/maker2', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/textmaker2?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/maker3', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/textmaker3?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/maker4', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/textmaker4?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/maker3d', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/text3d?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/maker3d/no2', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/text3d-2?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/maker3d/no3', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/text3d-3?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/maker3d/no4', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/text3d-4?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/yutub/search', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            video = req.query.video
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
    if (!video) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter video"})

       fetch(encodeURI(`https://yutub-api-zaahirr.herokuapp.com/search?q=${video}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/maker/special/transformer', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/special/transformer?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/maker/special/epep', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'aguz2011') return res.json(loghandler.invalidKey)
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/special/sertifikatepep?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zhirrr',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.use(function (req, res) {

    res.status(404)
    .set("Content-Type", "text/html")
    .sendFile(__path + '/views/404.html');
});


module.exports = router
