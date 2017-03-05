$(document).ready(function() {
   var carouselImagePath='images/carousel-image/';
   	function getFileNames(data){
		var fileExt = {},fileNames=[];
	    
	    fileExt[0]=".PNG";
	    fileExt[1]=".JPG";
	    fileExt[2]=".jpg";
	    fileExt[3]=".png";
	    fileExt[4]=".jpeg";
	    fileExt[5]=".JPEG";

		$(data).find("a:contains(" + fileExt[0] + "),a:contains(" + fileExt[1] + "),a:contains(" + fileExt[2] + "),a:contains(" + fileExt[3] + ")a:contains(" + fileExt[4] + "),a:contains(" + fileExt[5] + ")").each(function () {
	       var filename = this.href.replace(window.location.host, "").replace("http:///", "");
	       fileNames.push(filename);
	    });
	    return fileNames;
	}
	$.ajax({
		url: carouselImagePath,
		success: function(data){
			var fileNames= getFileNames(data);
			addCarouselTabs(fileNames);
		}
	});

	function addCarouselTabs(fileNames){
		var counter = 0,$div;

		for(;counter<fileNames.length;counter++){
			$div = $('<div>').attr('class','item carousel-image-holder');
			$('.carousel-inner').append($div)
			$div.append('<img src="'+carouselImagePath+fileNames[counter]+'" class="carousel-image">');
		}
		$($('.item')[0]).addClass('active');
	}
	function addHeaderTabs(){
		var headerTabTitle=[
			{
				name:'Home',
				link:'#container-1'
			},{
				name:'Description',
				link:'#container-2'
			},{
				name:'Contact Us',
				link:'#container-3'
			}
		],
		counter=0,$div,currentHeaderDetails;

		for(;counter<headerTabTitle.length;counter++){
			currentHeaderDetails=headerTabTitle[counter];
			$div = $('<div>').attr('class','header-tab header-tab-'+counter);
			$('.header-tabs-holder').append($div);
			$div.html('<a href="'+currentHeaderDetails.link+'" class="header-tab-link">'+currentHeaderDetails.name+'</a>');
		}
	}

	function renderPage(){
		addHeaderTabs();
	}

	renderPage();
});