// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const span = document.querySelector('.title');
axios.get(` https://lambda-times-backend.herokuapp.com/topics`)
.then(response => {
    for (let i = 0; i < response.data.topics.length; i++) {
      const tab = document.createElement('div')
      tab.classList.add('tab')
      tab.textContent = response.data.topics[i]
      document.querySelector('.topics').appendChild(tab)
    }
  })
  .catch(error => {
    console.log("Error: ", err)
  })
