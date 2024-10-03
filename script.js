
function getTimeString(time){
  //get hour and rest second
  const hour =parseInt(time / 3600); 
  let remainingSecond = time % 3600;
  const miniute = parseInt(remainingSecond /60);
  remainingSecond =  remainingSecond % 60 ;
  return `${hour} hour ${miniute} miniute ${remainingSecond} second ago` ;
}
// fetch load catagori html
//create loadcatagories
const loadCatagories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCatagories(data.categories))
    .catch((error) => console.log(error));
};
const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((error) => console.log(error));
};

// const cardDemo = {
//   "category_id": "1001",
//   "video_id": "aaaa",
//   "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//   "title": "Shape of You",
//   "authors": [
//     {
//       "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//       "profile_name": "Olivia Mitchell",
//       "verified": ""
//     }
//   ],
//   "others": {
//     "views": "100K",
//     "posted_date": "16278"
//   },
//   "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }

const displayVideos = (videos) => {
  const videoContainer = document.getElementById("videos");
  videos.forEach((video) => {
    console.log(video);
    const card = document.createElement("div");
    card.classList = "card card-compact";
    card.innerHTML = `
         <figure class="h-[200px] relative">
    <img 
      src="${video.thumbnail}"
      class = "h-full w-full object-cover"
      alt="Shoes" />
      ${
        video.others.posted_date?.length == 0
          ? ""
          : `<span class="absolute right-2 bottom-2 bg-black text-white rounded p-1">${getTimeString(video.others.posted_date)}</span> `
      }
      
  </figure>
  <div class="px-0 py-2 flex gap-2">
        <div>
            <img class="w-10 h-10 rounded-full object-cover" src="${
              video.authors[0].profile_picture
            }" />
        </div>
        <div >
           <h2 class="font-bold">${video.title}</h2>
           <div class="flex items-center gap-2">
              <p class="text-gray-400">${video.authors[0].profile_name}</p>
                ${
                  video.authors[0].verified == true
                    ? '<img class="w-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png">'
                    : ""
                }
              
           </div>
           <p></p>
        </div>


        
   
  </div>
        `;
    videoContainer.append(card);
  });
};

// {
//   "category_id": "1001",
//   "category": "Music"
// }
//create displayCatagories
const displayCatagories = (categories) => {
  const categoryContainer = document.getElementById("categories");
  categories.forEach((item) => {
    //Create a button
    console.log(item);
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;

    //add button to category container
    categoryContainer.append(button);
  });
};

loadCatagories();
loadVideos();
