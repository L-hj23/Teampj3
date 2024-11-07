$(document).ready(function () {
    $('#btnAddToCartConfirm').on('click', function() {
        $('#addToCartModalForm').modal('hide');
    });

    $('#valueComment').on('input', function() {
        let valueComment = $(this).val();

        if (valueComment.trim() !== "") {
            $('#btnSubmitComment').prop('disabled', false);
        } else {
            $('#btnSubmitComment').prop('disabled', true);
        }
    });
});