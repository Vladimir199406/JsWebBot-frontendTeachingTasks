// ==UserScript==
// @name         Ultimate United Browser Bot (UUBB)
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.google.com/*
// @match        https://yandex.ru/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @match        https://crushdrummers.ru/*
// @grant        none
// ==/UserScript==


//calling Google logic below
if(document.location.href == "https://www.google.com"){
    botForGoogle();
}
//calling Google logic above

//calling Yandex logic below
else if(document.location.href == "https://yandex.ru/"){
    botForYandex();
}
//calling Yandex logic above


//getCookieGoogle below
function getCookieGoogle(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
//getCookieGoogle above


//getCookieYandex below
function getCookieYandex(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/y, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
//getCookieYandex above


//function getRandom below
function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}
//function getRandom above


//for Google below
function botForGoogle(){
    let sites = {
        "xn----7sbab5aqcbiddtdj1e1g.xn--p1ai":['Гобой','Как звучит флейта', 'Кларнет','Саксофон','Тромбон','Валторна'],
        "crushdrummers.ru":['Барабанное шоу','Заказать барабанное шоу','Шоу барабанщиков в Москве']
    };
    let site = Object.keys(sites)[getRandom(0,Object.keys(sites).length)];
    let googleInput = document.getElementsByName('q')[0];
    let keywords = sites[site];
    let keyword = keywords[getRandom(0,keywords.length)];
    let btnK = document.getElementsByName('btnK')[0];
    let i =0;
    let links = document.links;

    if (btnK != undefined){
        document.cookie = "site="+site;
    }else if (location.hostname == "www.google.com"){
        site = getCookieGoogle("site");
    }else{
        site = location.hostname;
    }


    if (btnK != undefined){
        document.cookie = "site="+site;
        let timerId = setInterval(()=>{
            googleInput.value += keyword[i];
            i++;
            if (i==keyword.length){
                clearInterval(timerId);
                btnK.click();
            }
        },1000);
    }else if(location.hostname == site){
        setInterval(()=>{
            let index = getRandom(0,links.length);
            if (getRandom(0,101)>=80){
                //below bot is choosing random which browser it is going to use next (for Yandex logic)
                let browserRandomStartingSearch = ['https://www.google.com/','https://yandex.ru/'];
                location.href = browserRandomStartingSearch[getRandom(-1, browserRandomStartingSearch.length)];
                //above bot is choosing random which browser it is going to use next (for Yandex logic)

            }
            else if (links[index].href.indexOf(site) != -1){
                links[index].click();
            }
        },getRandom(3000,7000));
    }else{
        let nextGooglePage = true;
        for(let i=0; i<links.length; i++){
            if(links[i].href.indexOf(site) != -1){
                let link = links[i];
                nextGooglePage = false;
                setTimeout(()=>{link.click();},getRandom(1000,4000));
                break;
            }
        }
        if (document.querySelector('.YyVfkd').innerText=="10"){
            nextGooglePage = false;
            location.href = 'https://www.google.com/';
        }

        if (nextGooglePage){
            setTimeout(()=>{document.pnnext.click();},getRandom(1000,4000));
        }
    }
}
//for Google above


//for Yandex below
function botForYandex(){
    let sites = {
        "xn----7sbab5aqcbiddtdj1e1g.xn--p1ai":['Гобой','Как звучит флейта', 'Кларнет','Саксофон','Тромбон','Валторна'],
        "crushdrummers.ru":['Барабанное шоу','Заказать барабанное шоу','Шоу барабанщиков в Москве']
    };
    //object of sites above

    let site = Object.keys(sites)[getRandom(0,Object.keys(sites).length)];
    let yandexInput = document.getElementsByClassName("mini-suggest__input")[0];
    let keywords = sites[site];
    let keyword = keywords[getRandom(0, keywords.length)];
    let miniSuggestButton = document.getElementsByClassName("button_theme_websearch")[0];
    let i = 0;
    let links = document.links;

    if (miniSuggestButton != undefined){
        document.cookie = "site="+site;
    }else if (location.hostname == "yandex.ru"){
        site = getCookieYandex("site");
    }else{
        site = location.hostname;
    }

    if(miniSuggestButton != undefined){
        document.cookie = "site="+site;
        let timerId = setInterval(()=>{
            yandexInput.value += keyword[i];
            i++;
            if(i == keyword.length){
                clearInterval(timerId);
                //miniSuggestButton.removeAttribute("target");
                miniSuggestButton.click();
            }
        }, 1000);
    }

    else if(location.hostname == site){
        setInterval(() => {
            let index = getRandom(0, links.length);
            if(getRandom(0, 101) >= 70){
                //below bot is choosing random which browser it is going to use next (for Yandex logic)
                let browserRandomStartingSearch = ['https://www.google.com/','https://yandex.ru/'];
                location.href = browserRandomStartingSearch[getRandom(-1, browserRandomStartingSearch.length)];
                //above bot is choosing random which browser it is going to use next (for Yandex logic)

            }
            else if(links[index].href.indexOf(site) != -1)
            {
                //links[i].removeAttribute("target");
                links[index].click();
            }
        }, getRandom(3000, 7000))
    }

    else{
        let nextYandexPage = true;
        for(let i = 0; i < links.length; i++){
            if(links[i].href.indexOf(site)!= -1){
                console.log("site was found" + links[i]);
                let link = links[i];
                nextYandexPage = false;
                setTimeout(() => {
                    link.removeAttribute("target");
                    link.click();
                }, getRandom(1000, 4000));
                break;
            }
        }
        if(document.getElementsByClassName('pager__item pager__item_kind_page')["b"] == 10){
            nextYandexPage = false;
            location.href = 'https://yandex.ru/';
        }
        if(nextYandexPage){
            setTimeout(() => {
                document.getElementsByClassName("pager__item pager__item_kind_next")[0].removeAttribute("target");
                document.getElementsByClassName("pager__item pager__item_kind_next")[0].click();
            }, getRandom(1000, 4000))
        }
    }

}
//for Yandex above


