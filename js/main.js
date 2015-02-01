var apiClient = {
    init: function() {
        $('form').bind('submit',function() {
            apiClient.search($('#method').val(),$('#url').val());
            return false;
        });
    },
    search: function(method, url) {
        $.ajax({
            type: method,
            dataType:"json",
            url: url,
            success: function(data, textStatus, request) {
                $('#resultat').html(JSON.stringify(data, null, "\t"));
            },
            error: function(request, textStatus, errorThrown) {
                $('#resultat').html('Doesn\'t Work');
            }
        });
    }
};

apiClient.init();