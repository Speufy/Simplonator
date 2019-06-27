 
if (typeof form !== 'undefined') {
 	let form = document.getElementById('simplonform');

        let R1 = form.getElementById('Q1').value; //nbre de badge
        let R2 = form.getElementById('Q2').value; //nbre de points
        let R3 = form.getElementById('Q3').value;//nbre de chapitres
        let R4a = form.getElementById('R4A').value; // +5
        let R4b = form.getElementById('R4B').value;// +0
        let R4c = form.getElementById('R4C').value; // -2
        let R5 = form.getElementById('Q5').value;// paris +4.7 nantes +4.1 bdx +1.2
        let R6 = form.getElementById('Q6').value;// if Si, Silicium, +5 else +0
        let R7 = form.getElementById('Q7').value; // entre -3 et +4
        let R8a = form.getElementById('R8A').value; //+1
        let R8b = form.getElementById('R8B').valu; //+1
        let R8c = form.getElementById('R8C').value; //+1
        let R8d = form.getElementById('R8D').value; //-1
        let R8e = form.getElementById('R8E').value; //-1
        let R9a = form.getElementById('R9A').value; //-1
        let R9b = form.getElementById('R9B').value; //+0
        let R9c = form.getElementById('R9C').value; //+3
        let R9d = form.getElementById('R9D').value; //+1
        let R10= form.getElementById('Q10').value;   }// nbre fetiche


   

if (typeof send !== 'undefined') {
    let send = document.getElementById('submit');
    send.addEventListener('click',message1());}
    

}
        /*let firstStep = (R1, R2, R3)=>{
            if ( (R1/20)+ (R2/50)+R3>12 && R1 > 60 )
            {return true}
            else {return false}}

        let r4pts = (R4A, R4B, R4C)=>{
            if( R4A == true)
            {return +5}
             else if (R4B==true)
            {return +0}
            else {return -2}}

        console.log('votre numero fetiche est '+R4);
    };*/
	const tableauResult=[R1,R2,R3,R4a,R4b,R4c,R5,R6,R7,R8a,R8b,R8c,R8d,R8e,R9a,R9b,R9c,R9d,R10];					
	function message1(){
  	console.log(tableauResultat);}
