(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(6),l=a.n(r),c=(a(16),a(10)),m=a(1),o=(a(17),a(18),a(19),function(e){var t=e.movie,a=t.title,i=t.description,r=void 0===i?"":i,l=t.imgUrl,c=t.imdbUrl;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:l,alt:"Film logo"}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-48x48"},n.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"title is-8"},a))),n.a.createElement("div",{className:"content"},r,n.a.createElement("br",null),n.a.createElement("a",{href:c},"IMDB"))))}),s=function(e){var t=e.movies,a=void 0===t?[]:t;return n.a.createElement("div",{className:"movies"},a.map((function(e){return n.a.createElement(o,{key:e.imdbId,movie:e})})))},d=a(4),u=a.n(d),h=a(7),p=a(8),b=a.n(p),g=(a(21),function(e){var t=e.addMovie,a=Object(i.useState)(""),r=Object(m.a)(a,2),l=r[0],c=r[1],s=Object(i.useState)(null),d=Object(m.a)(s,2),p=d[0],g=d[1],v=Object(i.useState)(!1),f=Object(m.a)(v,2),w=f[0],E=f[1],M=Object(i.useState)(!0),N=Object(m.a)(M,2),j=N[0],k=N[1],y=function(){var e=Object(h.a)(u.a.mark((function e(t){var a,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,fetch("".concat("https://www.omdbapi.com/?apikey=7272b996&t=").concat(t));case 3:if((a=e.sent).ok){e.next=6;break}throw new Error("Error fetch");case 6:return e.next=8,a.json();case 8:if("False"!==(i=e.sent).Response){e.next=13;break}throw k(!1),T(),new Error("Can not find a film");case 13:g(O(i)),T();case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){return{title:e.Title,description:e.Plot,imgUrl:e.Poster,imdbUrl:e.imdbID,imdbId:e.imdbID}},T=function(){c(""),E(!1)};return n.a.createElement(n.a.Fragment,null,n.a.createElement("form",{className:"find-movie"},n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label",htmlFor:"movie-title"},"Movie title"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:b()("input",{"is-danger":!j}),value:w?"Loading...":l,onChange:function(e){var t=e.target.value;k(!0),c(t)},disabled:w})),!j&&n.a.createElement("p",{className:"help is-danger"},"Can't find a movie with such a title")),n.a.createElement("div",{className:"field is-grouped"},n.a.createElement("div",{className:"control"},n.a.createElement("button",{type:"button",className:"button is-light",onClick:function(){return y(l)}},"Find a movie")),n.a.createElement("div",{className:"control"},n.a.createElement("button",{type:"button",className:"button is-primary",onClick:function(){t(p),T(),g(null)}},"Add to the list")))),p&&n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"title"},"Preview"),n.a.createElement(o,{movie:p})))}),v=a(9),f=function(){var e=Object(i.useState)(v),t=Object(m.a)(e,2),a=t[0],r=t[1];return n.a.createElement("div",{className:"page"},n.a.createElement("div",{className:"page-content"},n.a.createElement(s,{movies:a})),n.a.createElement("div",{className:"sidebar"},n.a.createElement(g,{addMovie:function(e){a.some((function(t){return t.imdbId===e.imdbId}))||r((function(t){return[].concat(Object(c.a)(t),[e])}))}})))};l.a.render(n.a.createElement(f,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.9d4110b2.chunk.js.map