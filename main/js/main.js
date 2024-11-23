$(document).ready(function() {
    $('#btnReview').on('click', function(event) {
        event.preventDefault();
        alert('평가하기');
    });

    $('#btnChangeProfileImage').on('click', function() {
        $('#changeProfileImageForm').removeClass('d-none');
    });

    $('#btnCancleEdit').on('click', function() {
        $('#changeProfileImageForm').addClass('d-none');
    });

    $('#btnUpload').on('click', function() {
        $('#inputFile').click();
    });
});