addNews();
var news = '<div class="container"><p>%TIME%</p><li>%NEWS%</li><br></div>';  
function addNews(){
    for(var i = 0;i!=newData.news['date'].length;i++){
      var html= news.replace('%TIME%',newData.news['date'][i]);
      html= html.replace('%NEWS%',newData.news['desc'][i]);
      newsC.insertAdjacentHTML("beforeend",html);
    }
  }