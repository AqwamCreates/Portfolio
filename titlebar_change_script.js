document.addEventListener("visibilitychange", function() {

      if (document.hidden) {
	  
		document.title = "(⌐■_■)";
		
		setTimeout(function() {
			document.title = "( •_•)>⌐■-■";
        }, 500);
		
		setTimeout(function() {
			document.title = "Aqwam's Portfolio";
        }, 1000);
		
      } else {
	  
        document.title = "( •_•)>⌐■-■";
		
		setTimeout(function() {
			document.title = "(⌐■_■)";
        }, 500); // 1000 milliseconds = 1 second
		
      }
	  
});
