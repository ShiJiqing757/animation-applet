var nowpage = 0
$(document).ready(function(e){
	var width = window.innerWidth
	var height = window.innerHeight
	
	$('.content').width(width)
	$('.content').height(6*height)
	
	$('.page').width(width)
	$('.page').height(height)
	
	$('.content').swipe({
		swipe:function(event,direction,distance,duration,fingerCount){
			
			if(direction == 'up'){
				nowpage += 1
				console.log(nowpage)
			}
			else if(direction == 'down'){
				nowpage -= 1
				console.log(nowpage)
			}
			
			if(nowpage>5){
				nowpage = 5
				console.log(nowpage)
			}
			if(nowpage<0){
				nowpage = 0
				console.log(nowpage)
			}
			
			$('.content').animate({top:nowpage*-100 +"%"},{duration:500,complete:animation()})
		}
		
		
	})
	$('.page1-building').fadeIn(2000, function(){
		
		$('.page1-av').animate({width:"70%"},{duration:2000})
	})
})

//第二页,第三

function animation(){
	if(nowpage == 1){
		
		$('.page2-bg').fadeIn(2000,function(){
			
			$('.page2-text1').fadeIn(1000,function(){
				$('.page2-text2').fadeIn(1000)
			})
		})
	}
	
	if(nowpage == 2){
		
		
		$('.page3-early').fadeIn(2000)
		$('.page3-last').fadeIn(3000)
		
		$('.page3-bus').animate({left:"-100%"},{duration:2000})
		
		$('.page3-me').animate({right:"50%"},{duration:3000,complete:function(){
			
			$('.page3-early').fadeOut('slow',function(){display:none})
			$('.page3-last').fadeOut('slow',function(){display:none})
			
			$('.page3-station').fadeOut('slow')
			
			$('.page3-me').fadeOut('slow',function(){
				
				$('.page3-wall').fadeIn('slow')
				$('.page3-cry').fadeIn('slow',function(){
					$('.page3-space').animate({width:"30%"},{duration:1000,complete:function(){
						$('.page3-where').animate({width:"50%"},'slow')
					}})
				})
			})
		}})
	}

	if (nowpage == 3) {
		$('.page5-gm').fadeIn(3000)
		$('.page5-gm').fadeOut('slow', function () {
			$('.page5-fm').fadeIn('slow', function () {
				$('.page5-gc01').animate({width: "50%"}, {
					duration: 1000, complete: function () {
						$('.page5-gc02').animate({width: "50%"}, 'slow')
					}
				})
			})
		})
	}

	if (nowpage == 4) {
		$('.page6-hm').fadeIn(5000)
	}

}
// 第四页

function start(a){
	a.src = 'images/lightOn.png'
	
	$('.page4-lobg').fadeOut("slow")
	$('.page4-ct').fadeOut("slow")
	$('.page4-click').fadeOut("slow",function(){
		
		$('.page4-bg2').fadeIn('slow',function(){
			$('.page4-wky').fadeIn('slow')
		})
	})
}

function playPause(Image){
	var player = document.getElementById("musicBtn")
	
	if(player.paused){
		
		player.play()
		
		Image.src = "../images/musicBtn.png"
	}else{
		player.pause()
		Image.src = "../images/musicBtnOff.png"
	}
	
	
}
















