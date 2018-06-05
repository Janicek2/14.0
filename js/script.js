var movies = [
{
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    poster: './images/hp.jpg'
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

var moviesElements = movies.map(function(movie) {
return React.createElement('li', {},
    React.createElement('h2', {}, movie.title),
    React.createElement('p', {}, movie.desc),
    React.createElement('img', {src: movie.poster})
    );
});

var element =
React.createElement('div', {},
React.createElement('h1', {}, 'Lista filmów'),
React.createElement('ul', {}, moviesElements)
);

ReactDOM.render(element, document.getElementById('app'));