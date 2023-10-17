
			
			
			//下方焦点切换方法
			var curIndex =0;
			var imgs=document.querySelectorAll("#wrap .imgs li")
			var btns=document.querySelectorAll("#wrap .btn li")
			
			/*测试输出*/
			// console.log(btns,imgs)
			
			for(let i=0;i<btns.length;i++){
				btns[i].index=i
				btns[i].onclick=start
			
			}
			function start(){
				 curIndex=this.index;
				 // console.log(curIndex);
				 for(let i=0;i<btns.length;i++){
					 btns[i].classList.remove("on")
					 imgs[i].classList.remove("active")
				 }
				 btns[curIndex].classList.add("on")
				 imgs[curIndex].classList.add("active")
			}
			
			//左右按钮的图片切换方法
			//获取左右按钮
			let left = document.querySelector('#wrap .lrbtn').firstElementChild
			let right = document.querySelector('#wrap .lrbtn').lastElementChild
			//点击左按钮，索引减少，图片切到上一张
			left.onclick = function() {
			if(curIndex===0){
				curIndex=6
			}else{
				curIndex--
			}
			for(let i=0;i<btns.length;i++){
				btns[i].classList.remove("on")
				imgs[i].classList.remove("active")
			}
			btns[curIndex].classList.add("on")
			imgs[curIndex].classList.add("active")
			}
			//点击右按钮，索引增加，图片切到下一张
			right.onclick = function() {
				curIndex=(++curIndex)%7
			for(let i=0;i<btns.length;i++){
				btns[i].classList.remove("on")
				imgs[i].classList.remove("active")
			}
			btns[curIndex].classList.add("on")
			imgs[curIndex].classList.add("active")
			}
			
		</script>
