window.onload = function(){
  var calculatePriceButton = document.getElementsByClassName('calc-prices-button')[0];
  var createItemButton = document.getElementsByClassName('new-item-create')[0];
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

 function deleteItem(e) {
  let child = e.currentTarget.parentNode.parentNode;
  let shoppinglist = child.parentNode;
  shoppinglist.removeChild(child);
 }

  for(var i = 0; i < deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }

  var i = 0;
  var sumTotal = 0;

  function getTotalPrice() {
    for(i = 0; i < document.getElementsByClassName("product").length ; i++ ) {
      let pricePerItem = parseInt(document.getElementsByClassName("cost-per-item2")[i].innerHTML);
      let totalPrice = (pricePerItem) * (parseInt(document.getElementsByClassName("theQuantity")[i].value));
      document.getElementsByClassName("total-price2")[i].innerHTML = totalPrice;
      sumTotal += totalPrice;
      parseInt(document.getElementById("totalPriceTotal").innerHTML = sumTotal);
    }
  }

  let inputFieldProductName = document.createElement("input");
  document.getElementById("inputField").appendChild(inputFieldProductName);
  inputFieldProductName.setAttribute("id", "inputFieldProductName")
  let inputFieldProductPrice = document.createElement("input");
  document.getElementById("inputField").appendChild(inputFieldProductPrice);
  inputFieldProductPrice.setAttribute("id", "inputFieldProductPrice")

  let createNewButton = document.createElement("button");
  createNewButton.innerHTML = "create";
  document.getElementById("inputField").appendChild(createNewButton);
  createNewButton.classList.add("createNew")
  createNewButton.onclick = function() {

    let newProductName = document.getElementById("inputFieldProductName").value
    let newProductPrice = document.getElementById("inputFieldProductPrice").value

    let newProductDiv = document.createElement("div")
    newProductDiv.setAttribute("class", "product")
    document.getElementById("shoppinglist").appendChild(newProductDiv);
    newProductDiv.innerHTML = `      <div class="item">
    <span>${newProductName}</span>
  </div>
  <div class="cost-per-item">
    $<span class="cost-per-item2">${newProductPrice}</span>
  </div>
  <div class="quantity">
    <label for="quantity" >QTY</label>
    <input class="theQuantity" type="number" id="quantity" value="0">
  </div>
  <div class="total-price">
    <span >
      $<span class="total-price2">0.00</span>
    </span>
  </div>
  <div>
    <button class="btn btn-delete">Delete</button>
  </div>`
  newProductDiv.querySelector("button").onclick = deleteItem;
  }
  
};
