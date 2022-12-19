$(document).ready(() => {

    $.ajax({
        url: '/ToDoes/BuildToDoTable',
        success(result) {
            $('#tableDiv').html(result);
        }
    })

})