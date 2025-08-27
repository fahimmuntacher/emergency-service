// get element by id name
function getElementId(id){
    const element = document.getElementById(id);
    return element;
}

// get elements by class name
function getElementClass(id){
    const element = document.getElementsByClassName(id);
    return element;
}

/* ***************** Heart Button  ******************************************/
getElementId('card-box').addEventListener("click", function(h){
    if(h.target.className.includes("hearts")){
        const heartTotal = getElementId("heart").innerText;
        getElementId("heart").innerText = Number(heartTotal) + 1;
        
    }
})

// const hearts = document.getElementsByClassName('hearts'); 
// for(let heart of hearts){
//     heart.addEventListener('click', function(){
//         const heartTotal = getElementId("heart").innerText;
//         getElementId("heart").innerText = Number(heartTotal) + 1; 
        
//     })
// }


/* ***************** Call Button ******************************************/

getElementId('card-box').addEventListener("click", function(e){
    if(e.target.className.includes("call-button")){
       const call = e.target;
        const cardTitle = call.parentNode.parentNode.children[1].children[0].innerText;
        const tollNum = call.parentNode.parentNode.children[1].children[2].innerText;
        const coins = getElementId('coins').innerText;
        const time = new Date().toLocaleTimeString();

        if(Number(coins) < 20){
            alert("You have Insufficient coins!")
            return
        }
        
        const chargeCoin = Number(coins) - 20; 
        alert("Calling to " + cardTitle + " : " + tollNum)
        document.getElementById("coins").innerText = chargeCoin;

        const historyContainer = document.getElementById("history-container");
        const newHitoryCart = document.createElement("div");
        newHitoryCart.innerHTML = `
                 <div class="bg-[#FAFAFA] shadow-xl rounded-2xl flex items-center justify-between p-3 w-10/12 mx-auto mb-8">
                        <div class="p-2">
                        <h1 class="text-[1rem] font-bold">${cardTitle}</h1>
                            <h1 class="text-xl font-bold text-gray-500">${tollNum}</h1>
                        </div>
                        <div>
                            <p class="text-[1.15rem]">${time}</p>
                        </div>
                    </div>
            `
            historyContainer.append(newHitoryCart);
    }
})




/* ***************** Copy Button ******************************************/

getElementId('card-box').addEventListener("click", function(copy){
   if(copy.target.className.includes("copy-button")){
        const copyBtn = copy.target;
        const tollNum = copyBtn.parentNode.parentNode.children[1].children[2].innerText;
        navigator.clipboard.writeText(tollNum).then(() => {
        alert("Copied: " + tollNum);
         const copyCount = getElementId('copy-count').innerText;
        const updateCopyCount = Number(copyCount) + 1; 
        getElementId("copy-count").innerText = updateCopyCount; 
      });
   }
})


// clear button
document.getElementById("clear-btn").addEventListener('click', function(){
   
    getElementId("history-container").innerHTML = ''; 
})