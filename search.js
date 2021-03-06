var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/gi;
var str1 = "サポートサイトはhttp://www.wings.msn.to/です。";
var str2 = "サポートサイトをよろしく！";
console.log(str1.search(p));
console.log(str2.search(p));