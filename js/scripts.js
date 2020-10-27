$(document).ready(function() {
  $("form#faves").submit(function(event) {
    event.preventDefault();

    let fave1 = $("input#fave1").val();
    let fave2 = $("input#fave2").val();
    let fave3 = $("input#fave3").val();
    let fave4 = $("input#fave4").val();
    let fave5 = $("input#fave5").val();
    let list = [];
    
    list.push(fave1,fave2,fave3,fave4,fave5);
    
    $('.superFaves').append('<li>' + list[1] + '</li>');
		$('.superFaves').append('<li>' + list[0] + '</li>');
		$('.superFaves').append('<li>' + list[2] + '</li>');
		$('.superFaves').show();
  });
});