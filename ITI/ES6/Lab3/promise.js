/* Create your function that takes url of required service to be
  consumed and return a promise.
 Make ajax request using your function to consume the
  service of the following link using fetch api
  “https://jsonplaceholder.typicode.com/users”
 Display its output in a table style your website via
  bootstrap
 */

const getData = (apiLink) => {
  return new Promise((resolve, reject) => {
    fetch(apiLink)
      .then(response => response.json())
      .then(result => resolve(result))
      .catch(error => reject(error));
  });
};

getData("https://jsonplaceholder.typicode.com/users")
  .then(
  result => {
      let table = document.createElement("table")
      table.classList.add("table")
      table.classList.add("table-striped")
      table.classList.add("table-hover")
      table.classList.add("table-bordered")
      table.classList.add("table-dark")
      let thead = document.createElement("thead")
      let tr = document.createElement("tr")
      let th1 = document.createElement("th")
      th1.textContent = "ID"
      let th2 = document.createElement("th")
      th2.textContent = "Name"
      let th3 = document.createElement("th")
      th3.textContent = "Username"
      let th4 = document.createElement("th")
      th4.textContent = "Email"
      let th5 = document.createElement("th")
      th5.textContent = "Phone"
      let th6 = document.createElement("th")
      th6.textContent = "Website"
      tr.appendChild(th1)
      tr.appendChild(th2)
      tr.appendChild(th3)
      tr.appendChild(th4)
      tr.appendChild(th5)
      tr.appendChild(th6)
      thead.appendChild(tr)
      table.appendChild(thead)
      let tbody = document.createElement("tbody")
      result.forEach(user => {
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        td1.textContent = user.id
        let td2 = document.createElement("td")
        td2.textContent = user.name
        let td3 = document.createElement("td")
        td3.textContent = user.username
        let td4 = document.createElement("td")
        td4.textContent = user.email
        let td5 = document.createElement("td")
        td5.textContent = user.phone
        let td6 = document.createElement("td")
        td6.textContent = user.website
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        tr.appendChild(td6)
        tbody.appendChild(tr)
      })
      table.appendChild(tbody)
      document.body.appendChild(table)
      console.log(result)
  }).catch(error => console.log(error))