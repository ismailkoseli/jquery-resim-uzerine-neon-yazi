  $( function() {
    $( "#draggable" ).draggable({
        axis:"both",
        containment:"parent"
    });
      
      
      
      
    $(".btn-artir").click(function(){
      var fontSize = $(".font-size").val();
        $(".font-size").val(parseInt(fontSize)+1);
        $("p").css("font-size", parseInt(fontSize)+1);
    })
      
      
      
    $(".btn-azalt").click(function(){
        var fontSize = $(".font-size").val();
              if(parseInt(fontSize) >10){
        $(".font-size").val(parseInt(fontSize)-1);
                  $("p").css("font-size", parseInt(fontSize)-1);
                  }else{
                      alert("Yazı boyutu en az 10px değerinde olabilir.");
                  }
    })
      
    $(".text").change(function() {
        var yazi = $(".text").val();
        $("p").text(yazi);
    });
      
      
      
    $(".btn-renk").click(function(){
      var renk = $(this).attr("id");
        $(".neon").css("text-shadow", "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px "+renk+", 0 0 80px "+renk+", 0 0 90px "+renk+", 0 0 100px "+renk+", 0 0 150px "+renk+"");
    })
      
  });