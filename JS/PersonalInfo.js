$(document).ready(function () {
    $("#upload-profile").on("change", function (ev) {
        const file = ev.target.files[0];

        if(file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                $("#profile").attr('src', e.target.result);
            };
            reader.readAsDataURL(file);
        }
        else {
            $("#profile").attr('src', "");
        }
    });
});