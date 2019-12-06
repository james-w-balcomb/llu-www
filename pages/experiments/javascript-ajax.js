
function ajaxHttpRequest() {
    const xhr = new XMLHttpRequest();
    const url = 'https://bar.other/resources/public-data/';
    xhr.open('GET', url);
    xhr.onreadystatechange = ajaxHttpResponseHandler;
    xhr.send(null);
}

function ajaxHttpResponseHandler() {
        const DONE = 4; // readyState 4 means the request is done.
        const OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
                console.log(xhr.responseText); // 'This is the returned text.'
            } else {
                console.log('Error: ' + xhr.status); // An error occurred during the request.
            }
        }
}

function jqueryHttpRequest() {
    $.ajax({
        url: 'send-ajax-data.php',
    })
        .done(function(res) {
            console.log(res);
        })
        .fail(function(err) {
            console.log('Error: ' + err.status);
        });
}
