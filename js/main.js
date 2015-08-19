var loadContent = ( function( window, undefined ){
	
	// variables
	var demo1Src = 'src="http://e.gsrca.de/128666?s=560&mode=embed"';
	var demo2Src = 'src="http://thelastactivist.s3.amazonaws.com/index.html"';
	var demo3Src = 'src="https://dl.dropboxusercontent.com/u/18417484/TrashFlood.html"';
	var demo4Src = 'src="https://dl.dropboxusercontent.com/u/3223958/Owak%20and%20the%20Wooden%20Tower.html"';
	var id = 1;
	// variables

	// methods
	function demoLoad( id ){
		var playButton = document.getElementById( 'demoLoad-' + (id) );
		var demoLoadId = document.getElementById( 'demo' + (id) );

		console.log( id );
		console.log( playButton );
		console.log( demoLoadId );

		demoLoadId.setAttribute( 'src', 'demo' + id + 'Src');

	}
	// methods

	// return methods
	return {
		initOnClick : demoLoad( id )
	}
	// return methods
} )( window );

loadContent.initOnClick( id );

// call methods

// call methods