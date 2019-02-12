// Since main.js is included in all (1) html files, will register the service worker here
// Making sure service workers are supported, then registering it
// Use this cmd to develop on localhost: start chrome --unsafely-treat-insecure-origin-as-secure=http://127.0.0.1:5500/
if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('../sw_cached_site.js')
            .then(reg => console.log('Service worker registered'))
            .catch(err => console.log(`Service worker: error: ${err}`)) // Example of using a template string
    })
}



// Select2 as a jQuery function, call on any jQuery selector when initializing Select2
// $(document).ready(function() {
//     $('.county-selection-dropdown').select2({
//         placeholder: "Select a county",
//         width: 'resolve' // Overriding the default width
//     });
// });




// Adding the date picker to the input field and setting the current date/options
$('#sampling-date').datepicker('setDate', new Date());
$('#sampling-date').datepicker({
    format: 'mm/dd/yyyy',
    todayBtn: 'linked',
    todayHighlight: true
});





// Saving form info to a text file. Clicks the generated download link automatically
// TODO: refactor, add functionality for all data, properly format it as well

var textFile = null;
makeTextFile = function (text) {
    var data = new Blob([text], {type: 'text/plain'});

    // If replacing a previously generated file, need to manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
        window.URL.revokeObjectURL(textFile);
    }
    textFile = window.URL.createObjectURL(data);
    return textFile;
}


var downloadButton = document.getElementById('download-data-button');
var sample_point = document.getElementById('sample-point-id');

downloadButton.addEventListener('click', function () {
    var dlLink = document.createElement('a');
    dlLink.setAttribute('download', 'form_data.txt');
    dlLink.href = makeTextFile(sample_point.value);
    document.body.appendChild(dlLink);

    // Wait for link to be added to the document
    window.requestAnimationFrame(function () {
        var event = new MouseEvent('click');
        dlLink.dispatchEvent(event);
        document.body.removeChild(dlLink);
        });
    
}, false);
    
    

