function CountCoords(standCoords){
// original map was planned with width 1024px
	var org_img_width = 959;

	var img_size = $('.map').width();

	// count ratio between org_img_width img size and img_size
	// we can use this to scale coordinates
	var ratio = img_size / org_img_width;
        
        standCoords = standCoords.split(",");
	
        // loop through coordinates and multiply with ratio to get new coordinates
        $(standCoords).each(function(i) {
            standCoords[i] = parseInt(standCoords[i]) * ratio;
        });

        return standCoords;
}


