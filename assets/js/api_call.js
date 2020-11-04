/**
 * !  THESE ARE CONSTANTS USED TO DETERMINE THE VALUE
 */

const base_url = "http://www.omdbapi.com/"
const key = "?apikey=f5247060"
const plot = "& plot=full"
const search = document.getElementById("moviename").value

/**
 * ! LINES OF CODE WRITEN BELLOW IS A FUNCTION
 * * THIS IS THE MAIN FUNCTION OF THIS APP 
 * TODO THIS FUNCTION FETCHES DATA FROM THE API AND THEN PARSE THE HTML 
 */
function movie_details() {
    const t = (document.getElementById("moviename").value)
    const api_url = base_url + key + plot + "&t=" + t
    fetch(api_url)
        .then(function (resp) { return resp.json() }) // Convert data to json
        .then(function (data) {
            var except = data.Response;
            console.log(data);
            console.log(t)
            const { Actors, Awards, Language, Country, Director, Plot, Poster, Released, Runtime, Title, Type, Genre } = data;
            const hh = data.Ratings

            /**
             * TODO THESE DOCUMENT FUNCTIONS CHANGES THE INNER HTML OF DESIRED ELEMNET ID
             * * THIS IS ALSO KNOW AS PARSING OF HTML 
             */
            document.getElementById("title").innerHTML = Title;
            document.getElementById("poster").src = Poster;
            document.getElementById("poster_big").href = Poster;
            document.getElementById("date").innerHTML = "release date: " + Released
            document.getElementById("type").innerHTML = "Type: " + Type;
            document.getElementById("actor").innerHTML = "actors: " + Actors;
            document.getElementById("gener").innerHTML = "Genre: " + Genre;
            document.getElementById("award").innerHTML = "awards: " + Awards;
            document.getElementById("director").innerHTML = "director: " + Director;
            document.getElementById("plot").innerHTML = "plot: " + Plot;
            document.getElementById("runtime").innerHTML = "runtime: " + Runtime;
            document.getElementById("Language").innerHTML = "Language: " + Language;
            document.getElementById("country").innerHTML = "country: " + Country;
            document.getElementById("imbrating").innerHTML = "imbd: " + hh[0].Value;
            document.getElementById("rating").innerHTML = hh[1].Source + ": " + hh[1].Value

        }
        )
        /**
         * TODO THIS FUNCTION CATCHES ANY ERRORS
         * : CAN BE CONSIDERED AS SECOND MAIN FUNCTION
         * * IT BASICALLY SHOWS AN ALLERT 
         * ! BEST PART IS IT CAN CONTAIN ANY LINE OF TEXT TO BE DISPLAYED
         */
        .catch(function (params) {
            alert("ENTER A VALID MOVIE");
        }
        )
}


