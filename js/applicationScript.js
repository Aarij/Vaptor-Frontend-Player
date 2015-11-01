/*
 * Copyright (c) 2015 Advanced Community Information Systems (ACIS) Group, Chair
 * of Computer Science 5 (Databases & Information Systems), RWTH Aachen
 * University, Germany All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 * 
 * Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 * 
 * Neither the name of the ACIS Group nor the names of its contributors may be
 * used to endorse or promote products derived from this software without
 * specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

var client;

/*var init = function() {
  
	client = new iwc.Client();
	  
	var iwcCallback = function(intent) {
		// define your reactions on incoming iwc events here
		console.log("Search widget: "+intent);
		if (intent.action == "search_intent"){
			console.log("Search widget Inside: "+intent);
		}
	};
	client.connect(iwcCallback);
  
	//client = new Las2peerWidgetLibrary("http://127.0.0.1:7077/userpreferences", iwcCallback);
  
	//gadgets.util.registerOnLoadHandler(init);
  
}*/


// getPreferences
/*var getPreferences = function(){
  var preferences = null;
  var preferences = null;
  client.sendRequest("GET", "127.0.0.1:7077", preferences, "application/json", {}, true,
  function(data, type) {
    console.log(data);
  },
  function(error) {
    console.log(error);
  });
  return preferences;
}*/


$(document).ready(function() {
	//init();	
	client = new iwc.Client();
	  
	var iwcCallback = function(intent) {
		// define your reactions on incoming iwc events here
		console.log("Player widget"+intent.data);
		if (intent.action == "getVideos"){
			console.log("Player widget Inside: "+intent.data);
			document.getElementById("videonamedisplay").innerHTML = "";
			document.getElementById("videodisplay").innerHTML = "";
			//document.getElementById("annotationdisplay").innerHTML = "";
			flushLists();
			postGetVideos(intent.data);
		}
		if (intent.action == "playVideo"){
		
			
			lifemirror.playVideo(intent.data);
			
		}
		
	};
	client.connect(iwcCallback);
	
	console.log("In callback Player widget");
	if(localStorage.access_token!=null){
		
		console.log("callback Success");
		
		
		
		
		
	} else {
		console.log("not signed in...");
		console.log(result);
		$("#status").html("Do I know you?!");
	}
	
	

  
});
