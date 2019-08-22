   



   var $=fp_utils.$,addClass=fp_utils.addClass,removeClass=fp_utils.removeClass,toggleClass=fp_utils.toggleClass,g_timeouts={},ACTIVE="active";

    function addOriginAnimations(e,t){
    	e.length&&e.forEach(function(e)
    		{
    			// console.log(e),
    	e.classList.remove("animate2"),
    	g_timeouts.origin=setTimeout(function(){
    		// console.warn("hide-"+t),addClass(e,"hide-"+t),
    		e.classList.remove("animate")},100)
      })}
    function addDestinyAnimations(e,t){
    	var n="up"===t||"down"===t?"hide-down hide-up":"hide-left hide-right";e&&(
    		addClass(e,ACTIVE),
    		addClass(e,"animate"),
    		removeClass(e,n),g_timeouts.destination=setTimeout(
    		function(){
    			addClass(e,"animate2")
    		  },
    		  1e3
    		  ))}

    new fullpage("#fullpage",{
    	anchors:["firstPage","secondPage","3rdPage","4thpage"],
    	menu:"#menu",
    	navigation:!0,
    	slidesNavigation:!0,
    	animateAnchor:!1,
    	cards:!0,
    	loopHorizontal:!1,
    	cardsOptions:{fadeContent:!0,
    	fadeBackground:!0},
        cardsKey:"YWx2YXJvdHJpZ28uY29tX0E2MFkyRnlaSE09cmI2",

        touchWrapper:document,scrollingSpeed:1e3,
            afterLoad:function(e,t,n){
            	      addClass(t,"animate")},

            onLeave:function(e,t,n){
            	   clearTimeout(g_timeouts.destination);
        	       var i=$("#menu")[0];

        	if(toggleClass(i,ACTIVE,0<t.index),
        		removeClass(
        			document.body,"fp-moving-right fp-moving-left fp-moving-down fp-moving-up"),

        		n&&(addClass(
        			document.body,"fp-moving-"+n),

        		removeClass(
        			document.body,"fp-moving-horizontally"),

        		addClass(
        			document.body,"fp-moving-vertically"
        			)),
        		    -1==["right","left"].indexOf(n)){
        		    var a=$('.active[data-section="'+(t.index+1)+'"]')[0];
        		addDestinyAnimations(a=a||1<window.location.hash.split("/").length?a:
        			$('[data-section="'+(t.index+1)+'"]')[0],n),

        	    addOriginAnimations(
        	    	$('.active[data-section="'+(e.index+1)+'"]'),
        	    	n)}},
        	onSlideLeave:function(e,t,n,i){
        		removeClass(
        			document.body,"fp-moving-right fp-moving-left fp-moving-down fp-moving-up"),i&&(
        			addClass(
        				document.body,"fp-moving-"+i),
        		removeClass(
        				document.body,"fp-moving-vertically"),
        		addClass(
        			document.body,"fp-moving-horizontally")),

        	    addDestinyAnimations(
        	    	$('.trainers[data-section="'+(e.index+1)+'"][data-slide="'+(n.index+1)+'"]')[0],i);
        	        var a=$('.trainers[data-section="'+(e.index+1)+'"][data-slide="'+(t.index+1)+'"]');
        	    removeClass(a,ACTIVE),addOriginAnimations(a,i)
        	}}),
    function() {
    	 window.addEventListener("load",t),
         $(".arrow-down")[0].addEventListener("click",fullpage_api.moveSectionDown),
         $(".slider-control-next").forEach(
         	function(e){
         		e.addEventListener("click",
         			function(e){
         				e.preventDefault(),
         				fullpage_api.moveSlideRight()}
         				)}),
         $(".slider-control-prev").forEach(function(e){
         	e.addEventListener("click",function(e){
         		e.preventDefault(),
         		fullpage_api.moveSlideLeft()}
         		)}),["click","touchstart"].forEach(function(e){
         	document.addEventListener(e,i)
         }),
         $('[data-option="perspective"]')[0],
         $("#examples li").forEach(function(e){e.addEventListener("click",s)}),
         $("[data-option]").forEach(function(e){e.addEventListener("change",o)});
            var e=$(".perspective-value")[0],
            n=$(".settings-actions")[0];
            function t(){addClass(document.body,"loadBg")
         }
            function i(e){
            	var t=e.target;fp_utils.closest(t,".settings-actions")||fp_utils.closest(t,"#settings")}
            	function a(){
            		n.classList.toggle(ACTIVE)}
            		function o(){
            			fullpage_api.cards.setOption(this.getAttribute("data-option"),"range"!==this.type?this.checked:this.value)
            		}
            function s(){
            	if(!fp_utils.hasClass(this,ACTIVE))
            	{
            		removeClass(
            	$("#examples li.active")[0],
            	ACTIVE),addClass(this,ACTIVE);
            		var e=this.getAttribute("data-type");

                removeClass(document.body,"d-colors d-bg"),"colors"===e&&addClass(document.body,"d-colors"),"backgrounds"===e&&addClass(document.body,"d-bg")
            }}
            function d(
            	){
            	removeClass(
            		$("#turnOn")[0],ACTIVE),
            	    addClass(this,ACTIVE),
            	    fullpage_api.cards.destroy(),
            $(".only-if-active").forEach(function(e){
            	e.style.display="none"}
            	)}
            function l(){
            	removeClass(
            		$("#turnOff")[0],ACTIVE),
            addClass(this,ACTIVE),
            fullpage_api.cards.init(),
            $(".only-if-active").forEach(function(e){
            	e.style.display="block"}
            	)}
            function c(){
            	e.innerHTML=this.value
            }}();