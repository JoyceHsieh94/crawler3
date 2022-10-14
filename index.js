/*
function helloWorld () { // 創建函式
    const content = 'helloWorld' // 給變數內容
    console.log(content) // 用日誌將內容印出來
}
helloWorld() // 觸發


require('dotenv').config(); //載入.env環境檔
function getEnvVariable () {
    const env_variable= process.env.YOUR_VARIABLE // 取出環境變數
    console.log(env_variable)
}
getEnvVariable()

require('dotenv').config(); //載入.env環境檔
const webdriver = require('selenium-webdriver') // 加入虛擬網頁套件

async function openCrawlerWeb() {

    // 建立這個browser的類型
    let driver = await new webdriver.Builder().forBrowser("chrome").build();
    const web = 'https://www.google.com/';//填寫你想要前往的網站
    driver.get(web)//透國這個driver打開網頁
}
openCrawlerWeb()//打開爬蟲網頁
*/
require('dotenv').config(); //載入.env環境檔
const webdriver = require('selenium-webdriver') // 加入虛擬網頁套件
const chrome = require('selenium-webdriver/chrome');
const path = require('path');//用於處理文件路徑的小工具
const fs = require("fs");//讀取檔案用
const options = new chrome.Options();

function checkDriver() {
    try {
        chrome.getDefaultService()//確認是否有預設
    } catch {
        console.warn('找不到預設driver!');
        
        //'../chromedriver.exe'記得調整成自己的路徑
        const file_path = '../20221013/chromedriver.exe'        
        //請確認印出來日誌中的位置是否與你路徑相同
        console.log(path.join(__dirname, file_path));
        //確認路徑下chromedriver.exe是否存在            
        if (fs.existsSync(path.join(__dirname, file_path))) {
            //設定driver路徑
            const service = new chrome.ServiceBuilder(path.join(__dirname, file_path)).build();
            //chrome.setDefaultService(service);
            //const driver = chrome.Driver.createSession(options, service);
            console.log('設定driver路徑');
        } else {
            console.error('無法設定driver路徑');
            return false
        }
    }
    return true
}

async function openCrawlerWeb() {

    if (!checkDriver()) {// 檢查Driver是否是設定，如果無法設定就結束程式
        return
    }
    
    // 建立這個broswer的類型
    let driver = await new webdriver.Builder().forBrowser("chrome").build();
    const web = 'https://www.google.com/';//填寫你想要前往的網站
    driver.get(web)//透國這個driver打開網頁
}
openCrawlerWeb()//打開爬蟲網頁