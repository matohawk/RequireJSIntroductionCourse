$('.js-auto-update-field').on("keyup", function(event){
    event.preventDefault();
    $('.js-name-update').html(' ' + $(this).val());
});

$('.input').on("keydown", function(event){
    if(event.keyCode == 13){
        event.preventDefault();
    }
});


$('.js-conversion-number-inch').on('change keyup', function(event){
    $('.js-conversion-number-meter').val($(this).val() / 39.370078740157);
});

$('.js-conversion-number-meter').on('change keyup', function(event){
    $('.js-conversion-number-inch').val($(this).val() * 39.370078740157);
});