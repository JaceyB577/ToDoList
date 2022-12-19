$(document).ready(() => {

    $('.ActiveCheck').change(function() {
        const _self = $(this),
            id = _self.attr('id'),
            value = _self.prop('checked');

        $.ajax({
            url: '/ToDoes/AJAXEdit',
            data: { id, value },
            type: 'POST',
            success(result) {
                $('#tableDiv').html(result);
            }
        })
    });

})