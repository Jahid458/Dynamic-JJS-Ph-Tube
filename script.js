// fetch load catagori html 

//create loadcatagories
const loadCatagories = () =>{
      fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
      .then(res => res.json())
      .then(data => displayCatagories(data.categories))
      .catch(error => console.log(error))


}


// {
//   "category_id": "1001",
//   "category": "Music"
// }
//create displayCatagories
const displayCatagories = (categories) =>{
  const categoryContainer = document.getElementById("categories");
  categories.forEach( item => {
      //Create a button 
      console.log(item)
      const button = document.createElement("button");
      button.classList = "btn";
      button.innerText = item.category;

      //add button to category container
      categoryContainer.append(button);
      
      

  });
}

loadCatagories()

