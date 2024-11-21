let filesUploaded = {
    image: false,
    video: false
};

const clickBtnUpload = (inputId) => {
    $(`#${inputId}`).click();

    $(`#${inputId}`).on('change', function() {
        const file = this.files[0];

        if(file) {
            const fileName = file.name;
            const fileSize = (file.size / 1024).toFixed(2);

            $(`#${inputId}`).text(`${fileName} (${fileSize} KB)`);

            if (inputId === "imageInput") {
                $("#lectureImageInfo").text(`${fileName} (${fileSize} KB)`);
                filesUploaded.image = true;
            } else if (inputId === "videoInput") {
                $("#lectureVideoInfo").text(`${fileName} (${fileSize} KB)`);
                filesUploaded.video = true;
            }
        }
    });
}

$(document).ready(function() {
    $('#btnSubmit').on('click', function(e) {
        const price = $('#lecturePrice').val();
        if(!price || isNaN(price)) {
            $('#checkPriceModalForm').modal('show');
            return;
        }

        if(!filesUploaded.image || !filesUploaded.video) {
            $('#checkFileModalForm').modal('show');
        } else {
            $('#submitModalForm').modal('show');
        }
    });

    $('#btnCheckPriceConfirm').on('click', function(e) {
        $('#checkPriceModalForm').modal('hide');
    });

    $('#btnCheckFileConfirm').on('click', function(e) {
        $('#checkFileModalForm').modal('hide');
    });

    $('#btnSubmitConfirm').on('click', function(e) {
        $('#lectureForm').submit();
        $('#submitModalForm').modal('hide');
    });

    $('#btnCancleConfirm').on('click', function(e) {
        window.history.back();
        $('#cancleModalForm').modal('hide');
    });
});