 
    let form = document.getElementById('simplonform');

if (typeof send !== 'undefined') {
    let send = document.getElementById('submit');
    send.addEventListener('click',message1);}
    
    function message1(){
        let R1 = form.Q1.value; //nbre de badge
        let R2 = form.Q2.value; //nbre de points
        let R3 = form.Q3.value; //nbre de chapitres
        let R4a = form.R4A.checked; // +5
        let R4b = form.R4B.checked; // +0
        let R4c = form.R4C.checked; // -2
        let R5 = form.Q5.value; // paris +4.7 nantes +4.1 bdx +1.2
        let R6 = form.Q6.value; // if Si, Silicium, +5 else +0
        let R7 = form.Q7.value; // entre -3 et +4
        let R8a = form.R8A.checked; //+1
        let R8b = form.R8B.checked; //+1
        let R8c = form.R8C.checked; //+1
        let R8d = form.R8D.checked; //-1
        let R8e = form.R8E.checked; //-1
        let R9a = form.R9A.checked; //-1
        let R9b = form.R9B.checked; //+0
        let R9c = form.R9C.checked; //+3
        let R9d = form.R9D.checked; //+1
        let R10= form.Q10.value;    // nbre fetiche

        let firstStep = (R1, R2, R3)=>{
            if ( (R1/20)+ (R2/50)+R3>12 && R1 > 60 )
            {return true}
            else {return false}
        }

        let r4pts = (R4A, R4B, R4C)=>{
            if( R4A == true)
            {return +5}
             else if (R4B==true)
            {return +0}
            else {return -2}
        }
        alert('votre numero fetiche est '+R4);
    };

    
    
