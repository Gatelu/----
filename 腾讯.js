window.onload=function()
{
	var img=document.getElementById("cont").getElementsByTagName('li'),
		nav=document.getElementById("icon").getElementsByTagName('li'),
		txt=document.getElementById("state").getElementsByTagName('li'),
		la=document.getElementById("arrowleft"),
		ra=document.getElementById("arrowright"),
		time=document.getElementById("box"),
		iNow=0;
		var active=function()
		{
			nav[iNow].className = 'active';
		}
		var display=function()
		{
			for(var i=0; i<nav.length; i++)
			{
				nav[i].className = '';
		    	img[i].className = '';
		    	txt[i].style.display = "none";
	     	}
	     	nav[iNow].className = 'active';
	     	img[iNow].className ='show';
	     	txt[iNow].style.display = 'block';
	     }
	     for(var i=0; i<nav.length; i++)
	     {
	     	nav[i].index = i;
		 	nav[i].onmouseover = function()
		 	{
		 		iNow = this.index;
			  	display();
			}
		 }
		 ra.onclick = function()
		 {
		 	move(true);
	 	 }
	 	 la.onclick = function()
	 	 {
	 	 	move(false);
	 	 }
	 	 var move=function(flag)
	 	 {
	 	 	if(flag)
	 	 	{
	 	 		iNow++;
		     	if(iNow >= img.length)	
		     	iNow=0;
	     	}
	     	else
	     	{
	     		iNow--;
		     	if(iNow < 0)
			 	iNow = img.length-1;
	        }
	        display();
	    }
	    var timer = setInterval(function(){move(true)},1000);
	    time.onmouseover = function()
	    {
	    	clearInterval(timer)
	    }
	    time.onmouseout = function()
	  	{
		  	timer = setInterval(function(){move(true)},1000)
	  	}


		/*var fn=function(th)
		{
			var index=0;
			for(var i=0; i<nav.length; i++)
					{
						if (th == nav[i])
						{
							index=i;
							break;
						}	
					}	
					// alert(index);
					for(var i=0; i<img.length; i++)
					{
						img[i].className="";
					}
						img[index].className="show";


					for(var i=0; i<txt.length; i++)
					{
						txt[i].style.display="none"
					}
						txt[index].style.display="block"
		}*/
	}