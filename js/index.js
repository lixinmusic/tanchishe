$(function(){
	for (var i = 0; i < 20; i++) {
	for(var j=0;j<20;j++){
		var g=Math.floor(Math.random()*266);
		var b=Math.floor(Math.random()*256);
		var r=Math.floor(Math.random()*256);
		$('<div>').addClass('block').attr('id',i+'-'+j).css('backgroundColor','rgba('+r+','+g+','+b+',0.2)').appendTo('.changjin');
	}
	}
	var she=[
	{x:5,y:3},
	{x:5,y:4},
	{x:5,y:5},

	];
	for(var i=0;i<she.length;i++){
		$('#'+she[i].x+'-'+she[i].y).addClass('she');
	}
	function fangshiwu(){
		var a=Math.floor(Math.random()*20);
		var b=Math.floor(Math.random()*20);
		$('#'+a+'-'+b).addClass('shiwu');
		return {x:a,y:b};
	}

var shiwu=fangshiwu();

fangxiang='you';
move = function(){
    var jiutou = she[she.length-1];
    if(fangxiang === 'you'){
      var xintou = {x:jiutou.x,y:jiutou.y+1};
    }
    if(fangxiang === 'zuo'){
      var xintou = {x:jiutou.x,y:jiutou.y-1};
    }
    if(fangxiang === 'xia'){
      var xintou = {x:jiutou.x+1,y:jiutou.y};
    }
    if(fangxiang === 'shang'){
      var xintou = {x:jiutou.x-1,y:jiutou.y};
    }

    she.push(xintou);
    $('#'+xintou.x+'-'+xintou.y).addClass('she');

    if(xintou.x === shiwu.x && xintou.y===shiwu.y){
      $('#'+shiwu.x+'-'+shiwu.y).removeClass('shiwu');
      shiwu = fangshiwu();
    }else{
      var weiba = she.shift();
      $('#'+weiba.x+'-'+weiba.y).removeClass('she');
    }


  }
  setInterval(move,200);

  $(document).on('keyup',function(e){
    if(e.keyCode === 37){
      fangxiang = 'zuo';
    }
    if(e.keyCode === 39){
      fangxiang = 'you';
    }
    if(e.keyCode === 38){
      fangxiang = 'shang';
    }
    if(e.keyCode === 40){
      fangxiang = 'xia';
    }
});



})