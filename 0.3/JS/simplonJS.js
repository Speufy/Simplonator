 
    let form = document.getElementById('simplonform'); // parait optionnel, on devrait pouvoir le retirer ?

// retiré : if (typeof send !== 'undefined') {                 RAISON : send est défini dans ce bloc, donc il faut qu'il soit defini avant de pouvoir être defini, et donc il ne pourra jamais être defini.
// on pourrait éventuellement le remettre après la ligne ci dessous, mais avant celle qui suit. Cela me parait optionnel pour le moment.
    let send = document.getElementById('submit');
    send.addEventListener('click',message1);          // j'ai rajouté des parenthèses () après message1. Il est possible que ca soit pour cela que ca ne marchait pas. EDIT : A priori non c'est pas ça.
                                                        // OK, j'ai trouvé. Il fallait appeler le script plus tard (plus bas) dans la page simplonator.html.
                                                        // les parenthèses ne servent à rien et causent même message1 d'être appelée immédiatement sans attendre le clic on dirait. Je les enlève.
    
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

        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH NOTICE ME SENPAI IM DISAPPEARING IMMEDIATELY AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH NOTICE ME SENPAI IM DISAPPEARING IMMEDIATELY AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH NOTICE ME SENPAI IM DISAPPEARING IMMEDIATELY AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH NOTICE ME SENPAI IM DISAPPEARING IMMEDIATELY AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");    
        //je voudrais vérifier que la fonction s'execute bien, mais je crois avoir apercu en message dans la console qui est immédiatement effacé. je le rallonge pour essayer d'être sûr de le voir.

        // OUI ! la fonction messsage s'execute bien lors du click sur le bouton. Mais après c'est comme si on chargeait instantanément une nouvelle page ? 
        // Ca va être difficile de continuer à débuguer si j'ai pas le temps de lire la console. Il faut que j'arrive à corriger ça.

        // d'après google : https://stackoverflow.com/questions/1878264/how-do-i-make-an-html-button-not-reload-the-page, le problème devrait se corriger si j'ajoute type=button dans le button submit dans simponator.html. 
        // EDIT : OUI !



        // Maintenant y'a plus qu'à !

        let firstStep = (R1, R2, R3)=>{
            if ( (R1/20)+ (R2/50)+R3>12 && R1 >= 60 )
            {return true}
            else {return false}
        }


        let r123pts = (R1, R2, R3)=>{
            return Number((R1/20)+(R2/50)+R3);
        }
        console.log(`r123pts(R1, R2, R3) is equal to ${r123pts(R1, R2, R3)} and its type is ${typeof r123pts(R1, R2, R3)}`);        // ces lignes sont là à chaque fois pour identifier lequel de ces résultats sort sous la forme d'un string.
                                                                                                                                    // la présence d'un string dans l'addition finale provoque la concaténation des valeurs (elles sont inscrites les unes à la suite des autres) 
                                                                                                                                    //au lieu de leur addition. En l'occurence c'était r123pts(), d'ou l'ajout de Number dans le return de cette fonction.
        let r4pts = (R4A, R4B, R4C)=>{
            if( R4A == true)
              {return +5}
            else if (R4B == true)
              {return +0}
            else {return -2}
        }
        console.log(`r4pts(R4A, R4B, R4C) is equal to ${r4pts(R4A, R4B, R4C)} and its type is ${typeof r4pts(R4A, R4B, R4C)}`);


        let r5pts = (R5)=>{
            if(R5 == "Bordeaux")
              {return +1.2}
            else if(R5 == "Nantes")
              {return +4.7}
            else if(R5 == "Paris")
              {return +4.1}
        }
        console.log(`r5pts(R5) is equal to ${r5pts(R5)} and its type is ${typeof r5pts(R5)}`);


         let r6pts = (R6)=>{

            const goodAnswers = ['si', 'silicium', 14];

            if(typeof R6 === "string"){R6 = R6.toLowerCase();}

                for(let i=0; i<goodAnswers.length; i++){
                    if(R6 == goodAnswers[i]){
                        return +5;
                        break;
                    } else return +0;
                }
         }
         console.log(`r6pts(R6) is equal to ${r6pts(R6)} and its type is ${typeof r6pts(R6)}`);
   

         let r7pts = (R7)=>{
            switch(R7) {
                    case '1' : case '2' :
                        return -2;
                        break;            
                    case '3' : case '4' :
                        return -1;
                        break;
                    case '5' : case '6' :  case '15' :  case '16' :
                        return +0;
                        break;
                    case '7' : case '8' :
                        return +3;
                        break;
                    case '9' : case '10' : case '11' : case '12' :
                        return +4;
                        break;
                    case '13' : case '14' :
                        return +1;
                        break; 
                    default :
                        return -3;
                        break;    
                      }
         }
         console.log(`r7pts(R7) is equal to ${r7pts(R7)} and its type is ${typeof r7pts(R7)}`);


         let r8pts = (R8a, R8b, R8c, R8d, R8e)=>{
             let sum = 0;

                        if(R8a){
                          sum += 1;
                        }

                        if(R8b){
                          sum += 1;
                        }

                        if(R8c){
                          sum += 1;
                        }

                         if(R8d){
                          sum -= 1;
                        }

                         if(R8e){
                          sum -= 1;
                        }

                      return sum;
         }
         console.log(`r8pts(R8a, R8b, R8c, R8d, R8e) is equal to ${r8pts(R8a, R8b, R8c, R8d, R8e)} and its type is ${typeof r8pts(R8a, R8b, R8c, R8d, R8e)}`);


         let r9pts = (R9a, R9b, R9c, R9d)=>{
             let sum = 0;

                        if(R9a){
                          sum -= 1;
                        }

                        if(R9b){
                          sum += 0;
                        }

                        if(R9c){
                          sum += 3;
                        }

                         if(R9d){
                          sum += 1;
                        }

                      return sum;
         }

         let totalScoreBeforeFetiche = r123pts(R1, R2, R3) + r4pts(R4A, R4B, R4C) + r5pts(R5) + r6pts(R6) + r7pts(R7) + r8pts(R8a, R8b, R8c, R8d, R8e) + r9pts(R9a, R9b, R9c, R9d);

         console.log(`Score avant application du nombre fétiche : ${totalScoreBeforeFetiche}`);



    };

    
    
