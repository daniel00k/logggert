io.socket.on("server_log", function (msg) {
  if(msg.line.trim() != ""){
    var qtt = $("#log-line li").last().data("lqtt");
    if(typeof qtt == "undefined"){
      qtt = 1;
    }else{
      qtt++;
    }
    $("#log-line").append("<li data-lqtt="+ qtt+ "><pre><code>" + msg.line+ "</code></pre></li>");
    var qttlessten = qtt - 100;
    $("#log-line li[data-lqtt="+qttlessten+"]").remove();
  }
});