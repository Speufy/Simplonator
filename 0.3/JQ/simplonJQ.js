
/* fait apparaitre la div avec un effet de fondu entrant en cliquant sur "commencer le test" */
$(function(){
   $('#clt').click(function(){
      $('#Qu1').toggle(500)
	});	
});
/* fait apparaitre la div avec un effet de fondu entrant en cliquant sur "question suivante" */
$(function(){
   $('#qs12').click(function(){
      $('#Qu2').toggle(500)
	});	
});
//IDEM
$(function(){
   $('#qs23').click(function(){
      $('#Qu3').toggle(500)
	});	
});
//IDEM
$(function(){
   $('#qs34').click(function(){
      $('#Qu4').toggle(500)
	});
});
//IDEM
$(function(){
   $('#qs45').click(function(){
      $('#Qu5').toggle(500)
	});	
});
//IDEM
$(function(){
   $('#qs56').click(function(){
      $('#Qu6').toggle(500)
	});	
});
//IDEM
$(function(){
   $('#qs67').click(function(){
      $('#Qu7').toggle(500)
	});	
});
//IDEM
$(function(){
   $('#qs78').click(function(){
      $('#Qu8').toggle(500)
	});	
});
//IDEM
$(function(){
   $('#qs89').click(function(){
      $('#Qu9').toggle(500)
	});	
});
//IDEM
$(function(){
   $('#qs910').click(function(){
      $('#Qu10').toggle(500)
	});	
});
// affiche le nombre d'heure selectionné dans range 
$(function() {
	$('.heure').next().text('--'); // Valeur par défaut
	$('.heure').on('input', function() {
		var $set = $(this).val();
		$(this).next().text($set);
	});
});
