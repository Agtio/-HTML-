var $ = mdui.$;

document.getElementById("refresh").addEventListener("click", function(){
  mdui.snackbar({
    message: '刷新成功',
    position: 'left-bottom'
  });
}, true);
