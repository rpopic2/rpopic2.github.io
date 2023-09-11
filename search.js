const searchBox = document.querySelector("input");
const articles = document.querySelectorAll("article");
const len = articles.length;

searchBox.addEventListener("input", () => {
    const query = searchBox.value;

    for (let i = 0; i < len; ++i) {
        const article = articles[i];
        let a = article.querySelector("a");
        let result;

        if (a.text.indexOf(query) > -1)
            result = "";
        else
            result = "none";
        article.style.display = result;
    }
});

