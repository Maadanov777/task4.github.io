const url = `https://jsonplaceholder.typicode.com/posts`;


function App() {
    let div = document.getElementById("container")
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if (data === undefined) {
                console.log("undefined")

            } else {
                for (let i = 0; i <= data.length; i++) {
                    let userId = document.createElement("h3")
                    let id = document.createElement("h3")
                    let title = document.createElement("p")
                    let body = document.createElement("p")
                    title.innerHTML = (data[i].title)
                    body.innerHTML = (data[i].body)
                    id.innerHTML = (data[i].id)
                    userId.innerHTML = (data[i].userId)
                    div.append(userId)
                    div.append(id)
                    div.append(title)
                    div.append(body)

                }

            }
        })
        .catch((err) => {
            return (err)
        })
}