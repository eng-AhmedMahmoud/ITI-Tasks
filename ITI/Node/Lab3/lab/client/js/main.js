$(document).ready(function () {
    $(".col-4").hide()
    $("button").click(function () {
        $("#records").empty()
        $(".col-4").fadeIn(200)
        $.ajax({
            url: 'http://127.0.0.1:7000/clients.json',
            method: "GET",
            dataType: 'json',
            success: function (data) {

                $("h4").text(`All Records(${data.length})`)
                $("#records").empty()
                $.each(data, function (index, record) {
                    $('#records').append('<h6>Record ' + (index + 1) + '</h6>');
                    $('#records').append('<li>Name: ' + record.name + '</li>');
                    $('#records').append('<li>Mobile: ' + record.mobile + '</li>');
                    $('#records').append('<li>Email: ' + record.email + '</li>');
                    $('#records').append('<li>Address: ' + record.addr + '</li>');
                    $('#records').append('<hr></hr>');
                });

            },
            error: function (xhr, status, error) {
                console.log(`xhr`, xhr);
                console.log(`status`, status);
                console.log(`error`, error);
            }
        });
    })
});