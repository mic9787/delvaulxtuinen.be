/* Code by Steven Estrella. http://www.shearspiremedia.com */
/* we need to change slider appearance oninput and onchange */
function showValue(val,slidernum,vertical) {
	/* setup variables for the elements of our slider */
	var thumb = document.getElementById("sliderthumb" + slidernum);
	var shell = document.getElementById("slidershell" + slidernum);
	var track = document.getElementById("slidertrack" + slidernum);
	var fill = document.getElementById("sliderfill" + slidernum);
	var rangevalue = document.getElementById("slidervalue" + slidernum);
	var slider = document.getElementById("slider" + slidernum);

	var pc = val/(slider.max - slider.min); /* the percentage slider value */
	var thumbsize = 60; /* must match the thumb size in your css */
	var bigval = 340; /* widest or tallest value depending on orientation */
	var smallval = 30; /* narrowest or shortest value depending on orientation */
	var tracksize = bigval - thumbsize;
	var fillsize = 9;
	var filloffset = 10;
	var bordersize = 2;
	var loc = vertical ? (1 - pc) * tracksize : pc * tracksize;

	if (window.matchMedia('(max-width: 600px)').matches)
	{
		var thumbsize = 50;
	    var bigval = 250;
		var tracksize = bigval - thumbsize;
	}

    rangevalue.innerHTML = '&#177;' + val + 'm&#178';
    if (slider.value == 500) {
         rangevalue.innerHTML = '+' + val + 'm&#178';
         thumb.classList.add('maxval');
    } else {
        rangevalue.innerHTML = '&#177;' + val + 'm&#178';
        thumb.classList.remove('maxval');

    }


	rangevalue.style.top = (vertical ? loc : 0) + "px";
	rangevalue.style.left = (vertical ? 0 : loc) + "px";
	thumb.style.top =  (vertical ? loc : 0) + "px";
	thumb.style.left = (vertical ? 0 : loc) + "px";
	fill.style.top = (vertical ? loc + (thumbsize/2) : filloffset + bordersize) + "px";
	fill.style.left = (vertical ? filloffset + bordersize : 0) + "px";
	fill.style.width = (vertical ? fillsize : loc + (thumbsize/2)) + "px";
	fill.style.height = (vertical ? bigval - filloffset - fillsize - loc : fillsize) + "px";
	shell.style.height = (vertical ? bigval : smallval) + "px";
	shell.style.width = (vertical ? smallval : bigval) + "px";
	track.style.height = (vertical ? bigval - 4 : fillsize) + "px"; /* adjust for border */
	track.style.width = (vertical ? fillsize : bigval - 4) + "px"; /* adjust for border */
	track.style.left = (vertical ? filloffset + bordersize : 0) + "px";
	track.style.top = (vertical ? 0 : filloffset + bordersize) + "px";
}
/* we often need a function to set the slider values on page load */
function setValue(val,num,vertical) {
	document.getElementById("slider"+num).value = val;
    showValue(val,num,vertical);
    // if (val === 500) {
    //      document.getElementById("sliderthumb1").classList.add('maxval');
    //      document.getElementById("slidervalue1").innerHTML = '+' + this.value + 'm&#178';
    // } else {
    //     document.getElementById("sliderthumb1").classList.remove('maxval')
    // }
}

var rangeslider = document.getElementById('slider1');
if (rangeslider != null) {
    document.addEventListener('DOMContentLoaded', function(){
      setValue(0,1,false);
    })
}
