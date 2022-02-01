$(document).ready(function(){

    // Paste your Flickr API key here
    var apiKey = '71a577af1b5fbbea3db9f5470fb5562d';

    // Creating a flickr slider. This is
    // how you would probably use the plugin.

    $('#flickrSlider').jqFlick({
        photosetID: '127528845@N05/51842535628',
        width:500,
        height:320,
        autoAdvance:true,
        apiKey:apiKey
    });

    // Creating different flickr sliders,
    // depending on the select element value.

    $('select').change(function(){

        var options = {};

        switch(this.value){
            case '1':
                options = {
                    photosetID: '51845059012',
                    width:500,
                    height:320,
                    captions:true,
                    autoAdvance:true,
                    apiKey:'71a577af1b5fbbea3db9f5470fb5562d'
                };
                break;
            case '2':
                options = {
                    photosetID:'51844822765',
                    width:500,
                    height:500,
                    captions:true,
                    autoAdvance:true,
                    apiKey:'71a577af1b5fbbea3db9f5470fb5562d'
                };
                break;
            case '3':
                options = {
                    photosetID:'',
                    width:200,
                    height:150,
                    apiKey:apiKey
                }
        }

        $('#flickrSlider').jqFlick(options);
    });

});