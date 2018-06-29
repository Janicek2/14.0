var movie = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        poster: 'https://i.ytimg.com/vi/XfHVlmtyfXc/maxresdefault.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        poster: 'https://www.joy.pl/u/ic/W1/u/a/17/11/to-pewne-bedzie-nowy-krol-lew-i-znamy-obsade_51.jpeg'
    },
    {
        id: 3,
        title: 'Leon Zawodowiec',
        desc: 'Film o p',
        poster: 'http://1.fwcdn.pl/ph/06/71/671/401049_1.1.jpg'
    },
    {
        id: 4,
        title: 'Braveheart',
        desc: 'Film o bohaterze Szkocji',
        poster: 'http://learningfromhollywood.pl/wp-content/uploads/2014/09/mel-gibson-in-braveheart-1659925466.jpg'
    }
    ];
    var ListFilmow = React.createClass({
        propTypes: {
            movie: React.PropTypes.object.isRequired,
        },
        render: function() {
            return (
                React.createElement('li', {},
                    React.createElement(MovieTitle, {movie: this.props.movie}),
                    React.createElement(MovieDesc, {movie: this.props.movie}),
                    React.createElement(MoviePoster, {movie: this.props.movie})
                )
            );
        }
    });
    
    var MovieTitle = React.createClass({
        propTypes: {    movie: React.PropTypes.object.isRequired,  },
        render: function() {
            return (          React.createElement("h1", {}, this.props.movie.title)      );
        }
    });

    var MovieDesc = React.createClass({
        propTypes: {    movie: React.PropTypes.object.isRequired,  },
        render: function() {
            return (          React.createElement("h1", {}, this.props.movie.desc)      );
        }
    });
    
    var MoviePoster = React.createClass({
        propTypes: {    movie: React.PropTypes.object.isRequired,  },
        render: function() {
            return (          React.createElement("img", {src: this.props.movie.poster})      );
        }
    });
    
    var Movie = React.createClass({
        render: function() {
            var moviesElements = movie.map(function (movie) {
                return React.createElement(ListFilmow, {key: movie.id, movie: movie});
            });
            return (			React.createElement("ul", {}, moviesElements			)
            );
        }
    });
    
    var element = React.createElement(Movie, {movie:movie });
    ReactDOM.render(element, document.getElementById("app"));
    