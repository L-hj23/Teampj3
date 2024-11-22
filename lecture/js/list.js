const clickSubject = (subject) => {
    $('.subject').text(subject);
}

$(document).ready(function() {
    let price = $('.price').text("70,000");

    $('#showFree').change(function() {
        if ($(this).prop('checked')) {
            $('.price').text("무료");
        } else {
            $('.price').text("70,000");
        }
    });
});