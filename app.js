const form = document.getElementById("searchForm");
const text = document.getElementById("text");
const container = document.querySelector(".container");
const count = document.querySelector(".count");


form.addEventListener('submit', async function (e) {
    e.preventDefault();
    container.innerHTML = ""
    const res = await axios.get(`https://ghibliapi.herokuapp.com/films/`)
    let counter = 0;
    for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].description.toUpperCase().includes(text.value.toUpperCase()) || res.data[i].title.toUpperCase().includes(text.value.toUpperCase())) {
            const div = document.createElement('div');
            div.classList.add('movie-div')
            const imgTitle = document.createElement('h1');
            imgTitle.classList.add('movie-title')
            imgTitle.innerText = res.data[i].title;
            const img = document.createElement('IMG');
            img.src = res.data[i].movie_banner;
            const paragraph = document.createElement('p');
            paragraph.innerText = res.data[i].description;
            container.append(div);
            div.append(imgTitle);
            div.append(img);
            div.append(paragraph)
            counter++;
        }
    }
    count.innerHTML = `${counter} matches found!`
})