var url = "https://docs.google.com/spreadsheets/d/1MLGEmUyALkO8oX5wH5V8GydFy1Ma9ksxWSzy7eaKXmU/edit#gid=0";
function doGet(e){
    
  return HtmlService.createTemplateFromFile("page").evaluate();
}
var id = "";

function uuid(){
    return Utilities.getUuid();
    }
id = uuid();
function userClicked(userInfo){
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Data");
  
  ws.appendRow([userInfo.dateBirth, userInfo.sex, userInfo.registration, userInfo.marriedStatus, userInfo.child, new Date(), id]);
    //Logger.log(name + " Cliked the Button");
}

function weightClicked(weightInfo){
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("DataWeight");

  ws.appendRow([weightInfo.dateBirth, weightInfo.sex, weightInfo.registration, weightInfo.marriedStatus, weightInfo.child, new Date(), id]);
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
