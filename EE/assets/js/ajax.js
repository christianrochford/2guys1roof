$(document).ready(function(){
    var
    History = window.History,
    State = History.getState();

    $('a.post-link').on('click', function(e){
        e.preventDefault();
        var path = $(this).attr('href');
        var title = $(this).attr('title');
        History.pushState('ajax',title,path);
    });

    $("#content").on("click",".icon-close",function(e){
        e.preventDefault();
        $("#content").slideUp('200');
    })

    // Bind to state change
    // When the statechange happens, load the appropriate url via ajax
    History.Adapter.bind(window,'statechange',function() { // Note: Using statechange instead of popstate
        load_ajax_data();
    });

    function load_ajax_data() {
        State = History.getState();   
        $.post(State.url, function(data) {
            $("#loader").fadeIn();
            $("#content").slideUp('300');
            $("#content").load(State.url + ' #content > *', function(){ 
                $("#loader").fadeOut()
                $(this).hide();
                $(this).css('opacity', 0).slideDown('fast').animate({ opacity: 1 } ); /* you could fade in here if you'd like */
                $('.flexslider').flexslider();
            });
        });
     }
});

