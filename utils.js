function escapeHtml(text) {
  var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}
function htmlToArray(collection) {
  return [].slice.call(collection);
}
function htmlElement(str) {
  var div = document.createElement('div');
  div.innerHTML = str.trim();
  return div.firstChild;
}
function httpGet(url) {
  return new Promise((resolve,reject) => {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", () => {
      if (oReq.status==200) resolve(oReq.responseText)
      else reject(oReq.status+" - "+oReq.statusText);
    });
    oReq.addEventListener("error", () => reject());
    oReq.addEventListener("abort", () => reject());
    oReq.open("GET", url);
    oReq.send();
  });
}
function toJS(txt) {
  return JSON.stringify(txt);
}
// callback for sorting apps
function appSorter(a,b) {
  if (a.unknown || b.unknown)
    return (a.unknown)? 1 : -1;
  var sa = 0|a.sortorder;
  var sb = 0|b.sortorder;
  if (sa<sb) return -1;
  if (sa>sb) return 1;
  return (a.name==b.name) ? 0 : ((a.name<b.name) ? -1 : 1);
}
