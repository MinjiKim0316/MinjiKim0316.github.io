let news = [];
let menus = document.querySelectorAll(".nyt-menus button");
menus.forEach((menu) => {
  menu.addEventListener("click", (event)=>getNewsByTopic(event));
});

let searchButton = document.getElementById("nyt-search-button");
let url;

const getNews = async () => {
  try{
    let header = new Headers({'x-api-key':'U1S8JGqBkyEoSFfTr9KIJs2_dZW_QwGvI1Y9KMn6bHk'});
    let response = await fetch(url, { headers: header });
    let data = await response.json();
    if (response.status == 200) {
      if(data.total_hits == 0){
        throw new Error("No Matches For Your Search!");
      }
      news = data.articles;
      console.log(news);
      render();
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.log("error is", error. message);
    errorRender(error.message);
  };
};

const getLatestNews = async () => {
  url = new URL(
    `https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=business&page_size=10`
    );
    getNews();
};

const getNewsByTopic = async (event) => {
  let topic = event.target.textContent.toLowerCase();
  url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=US&page_size=10&topic=${topic}`);
  getNews();
};

const getNewsByKeyword = async () => {
  let keyword = document.getElementById("nyt-search-input").value;
  url = new URL(`https://api.newscatcherapi.com/v2/search?q=${keyword}&page_size=10`);
  getNews();
};

const render = () => {
  let newsHTML = "";
  newsHTML = news.map((item) => {
    return `<div class="row nyt-news">
    <div class="col-lg-4">
      <img class="nyt-image" src="${item.media}"/>
    </div>
    <div class="col-lg-8">
      <h2>${item.title}</h2>
      <p>
        ${item.summary}
      </p>
      <div>${item.rights} * ${item.published_date}</div>
    </div>
  </div>`;
  }).join('');

  document.getElementById("nyt-news-board").innerHTML=newsHTML
};

const errorRender = (message) => {
  let errorHTML = `<div class="alert alert-danger text-center" role="alert">
  ${message}
</div>`;
  document.getElementById("nyt-news-board").innerHTML = errorHTML
};

searchButton.addEventListener("click", getNewsByKeyword);
getLatestNews();