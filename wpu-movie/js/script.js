function searcMovie() {
    $('#movie-list').html('');
    $.ajax({
        url: 'http://www.omdbapi.com',
        type: 'GET',
        dataType: 'JSON',
        data: {
            'apikey': 'e07e14a7',
            's': $('#search-input').val()
        },
        success: function (result) {
            if (result.Response === "True") {
                let movies = result.Search;
                $.each(movies, function (i, data) {
                    $('#movie-list').append(`
                    <div class="col-md-3">
                        <div class="card mb-4">
                            <img src="` + data.Poster + `" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">` + data.Title + `</h5>
                                <h6 class="card-subtitle mb-2 text-muted">` + data.Year + `</h6>
                                <a href="#" class="card-link see-detail" data-toggle="modal" data-target="#exampleModal" data-id="` + data.imdbID + `">See Detail</a>
                            </div>
                        </div>
                    </div>
                    `);
                });
            } else {
                $('#movie-list').html(`
                <div class="col">
                    <h1 class="text-center text-danger">`+ result.Error + `</h1>
                </div>
                `);
            }
        }
    });
}


//Search Movie by Click Search Button
$('#search-button').on('click', function () {
    searcMovie();
});

//Search Movie by press Enter
$('#search-input').on('keyup', function (event) {
    if (event.keyCode === 13) {
        searcMovie();
    }
});

//modal Detail Movie
$('#movie-list').on('click', '.see-detail', function () {

    $.ajax({
        url: 'http://www.omdbapi.com',
        type: 'GET',
        dataType: 'JSON',
        data: {
            'apikey': 'e07e14a7',
            'i': $(this).data('id')
        },
        success: function (result) {
            if (result.Response === "True") {
                $('.modal-body').html(`
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-6">
                                <img src="` + result.Poster + `" class="card-img-top" alt="...">
                            </div>

                            <div class="col-md-6">
                                <ul class="list-group">
                                    <li class="list-group-item"><h5>` + result.Title + `</h5></li>
                                    <li class="list-group-item">Released : ` + result.Released + `</li>
                                    <li class="list-group-item">Genre : ` + result.Genre + `</li>
                                    <li class="list-group-item">Director : ` + result.Director + `</li>
                                    <li class="list-group-item">Actors : ` + result.Actors + `</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                `);
            }
        }
    });

});