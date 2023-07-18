function openSidebar() {
  document.getElementById("sidebar").style.width = "300px";
}

/* Set the width of the side navigation to 0 */
function closeSideBar() {
  document.getElementById("sidebar").style.width = "0";
}

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
