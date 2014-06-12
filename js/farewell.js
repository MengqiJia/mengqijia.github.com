$(document).ready(function(){
    $(".shell").css("height",document.documentElement.clientHeight);
    //$(".thank-you").css("width",document.documentElement.clientWidth / 2);
    //$(".thank-you").css("height",document.documentElement.clientHeight / 3);
    $('#thank').jphotogrid({
	    baseCSS: {
	        width: '200px',
	        height: '117px',
	        padding: '0px'
	    },
	    selectedCSS: {
	        top: '150px',
	        left: '250px',
	        width: '500px',
	        height: '400px',
	        padding: '10px'
	    }
    });
});
$(window).resize(function() {
    $(".shell").css("height",document.documentElement.clientHeight);
    //$(".thank-you").css("width",document.documentElement.clientWidth / 2);
});
