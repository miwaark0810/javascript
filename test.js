var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/gi;
var str1 = "サポートサイトはhttp://www.wings.msn.to/です。";
var str2 = "サポートサイトをよろしく！";
console.log(p.test(str1));
console.log(p.test(str2));