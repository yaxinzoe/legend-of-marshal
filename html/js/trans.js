window.onload = function(){
	var arr = [
		{   
			width:300,
			top:100,
			left:-100,
			opacity:50,
			zIndex:2
		},
		{  
			width:400,
			top:100,
			left:0,
			opacity:80,
			zIndex:3
		},
		{   
			width:450,
			top:100,
			left:100,
			opacity:100,
			zIndex:4
		},
		{  
			width:400,
			top:100,
			left:250,
			opacity:80,
			zIndex:3
		},
		{  
			width:300,
			top:100,
			left:450,
			opacity:50,
			zIndex:2
		}
    ];
	var slide = document.getElementById("slide");
	var liArr = slide.getElementsByTagName("li");
	var arrow = slide.children[1];
	var btn = arrow.children;
	
	var flag = true;

	move();

	for(var k in btn){
		btn[k].onclick = function(){
			if(this.className === "prev"){
				if(flag){
					flag = false;
					move(true);
				}
			}else{
				if(flag){
					flag = false;
					move(false);
				}
			}
		};
	}

	function move(bool){
		if(bool === true || bool === false){
			if(bool){
				arr.push(arr.shift());
			}else{
				arr.unshift(arr.pop());
			}
		}
		for(var i=0;i<liArr.length;i++){
			animate(liArr[i],arr[i],function(){
				flag = true;
			});
		}
	};
	
	function getStyle(ele,attr){
	    if(window.getComputedStyle){
	        return window.getComputedStyle(ele,null)[attr];
	    }
	    return ele.currentStyle[attr];
	}

	function animate(ele,json,fn){
	    clearInterval(ele.timer);
	    ele.timer = setInterval(function () {
	        var bool = true;
	        for(var k in json){
	            var leader;
	            if(k === "opacity"){
	                leader = getStyle(ele,k)*100 || 1;
	            }else{
	                leader = parseInt(getStyle(ele,k)) || 0;
	            }
	            var step = (json[k] - leader)/10;
	            step = step>0?Math.ceil(step):Math.floor(step);
	            leader = leader + step;
	            if(k === "opacity"){
	                ele.style[k] = leader/100;
	                ele.style.filter = "alpha(opacity="+leader+")";
	            }else if(k === "zIndex"){
	                ele.style.zIndex = json[k];
	            }else{
	                ele.style[k] = leader + "px";
	            }
	            if(json[k] !== leader){
	                bool = false;
	            }
	        }
	        if(bool){
	            clearInterval(ele.timer);
	            if(fn){
	                fn();
	            }
	        }
	    },25);
	};
};