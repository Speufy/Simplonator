let submit = document.getElementById("submit");

submit.onclick = function(){
		let username = document.getElementById("username").value;
    let nbrBadges = document.getElementById("badges").value;
    let nbrPoints = document.getElementById("points").value;
    let nbrChapters = document.getElementById("chapters").value;
    
    document.getElementById("outputName").innerText = username;
    document.getElementById("outputBadges").innerText = nbrBadges;
    document.getElementById("outputPoints").innerText = nbrPoints;
    document.getElementById("outputChapters").innerText = nbrChapters;
    
    
    
}

function treatData(nbrBadges, nbrPoints, nbrChapters){
	if( (nbrBadges/20) + (nbrPoints/50) + nbrChapters > 12 && nbrBadges > 60)
  {return true} 
  else 
  {return false}
}

function writeResult(isAccepted){
    // sens a message saying 'accepted' or 'not accepted' depending on the value of isAccepted

}