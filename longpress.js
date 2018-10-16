$.fn.longPress = function(fn) {
    var timeout = undefined;
    var $this = this;
    for(var i = 0;i<$this.length;i++){
        $this[i].addEventListener('touchstart', function(event) {
            timeout = setTimeout(function(){
              fn.call($this)
            }, 200);
            }, false);
        $this[i].addEventListener('touchend', function(event) {
            clearTimeout(timeout);
            }, false);
    }
}

$(".monit_copy").longPress(function(){
  var text = $(this).text()
  $.ajax({
      url: "http://47.96.158.207:5500/copy",
      type: 'post',
      data: {
        text: text
      },
      dataType: 'json',
      timeout: 20e3,
      success: function(data) {
          
      }
  });
})
