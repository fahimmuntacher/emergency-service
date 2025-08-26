function getElementId(id){
    const element = document.getElementById(id);
    return element;
}

function getElementClass(id){
    const element = document.getElementsByClassName(id);
    return element;
}

// heart button
const hearts = document.getElementsByClassName('hearts'); 
for(let heart of hearts){
    heart.addEventListener('click', function(){
        const heartTotal = getElementId("heart").innerText;
        getElementId("heart").innerText = Number(heartTotal) + 1; 
        
    })
}


// call button 
const callBtn = document.getElementsByClassName('call-button'); 
for(let call of callBtn){
    call.addEventListener('click', function(){
        const cardTitle = call.parentNode.parentNode.children[1].children[0].innerText;
        const tollNum = call.parentNode.parentNode.children[1].children[2].innerText;
        const coins = getElementId('coins').innerText;
        const time = new Date().toLocaleTimeString();

        if(Number(coins) < 20){
            alert("You have Insufficient coins!")
            return
        }
        else{
            const chargeCoin = Number(coins) - 20; 
            alert("Calling to " + cardTitle + " : " + tollNum)
            document.getElementById("coins").innerText = chargeCoin;

            // const historyContainer = document.getElementById("history-container");
            // const newHitoryCart = document.createElement("div");
            // newHitoryCart.innerHTML = `
            //      <div class="bg-[#FAFAFA] shadow-xl rounded-2xl flex items-center justify-around w-10/12 mx-auto mb-8">
            //             <div class="p-6">
            //             <h1 class="text-2xl font-bold">National Emergency Number</h1>
            //                 <h1 class="text-3xl font-bold text-gray-500">999</h1>
            //             </div>
            //             <div>
            //                 <p class="text-[1.15rem]">08:21:21 pm</p>
            //             </div>
            //         </div>
            // `
            // historyContainer.append(newHitoryCart);
        }
         const historyContainer = document.getElementById("history-container");
            const newHitoryCart = document.createElement("div");
            newHitoryCart.innerHTML = `
                 <div class="bg-[#FAFAFA] shadow-xl rounded-2xl flex items-center justify-around w-10/12 mx-auto mb-8">
                        <div class="p-4">
                        <h1 class="text-xl font-bold">${cardTitle}</h1>
                            <h1 class="text-2xl font-bold text-gray-500">${tollNum}</h1>
                        </div>
                        <div>
                            <p class="text-[1.15rem]">${time}</p>
                        </div>
                    </div>
            `
            historyContainer.append(newHitoryCart);
        
    })
   
}



// copy button
const copyButtons = document.getElementsByClassName("copy-button");
for(let copyBtn of copyButtons){
    copyBtn.addEventListener("click", function(){
        const tollNum = copyBtn.parentNode.parentNode.children[1].children[2].innerText;
        console.log(tollNum)
        navigator.clipboard.writeText(tollNum).then(() => {
        alert("Copied: " + tollNum);
         const copyCount = getElementId('copy-count').innerText;
        const updateCopyCount = Number(copyCount) + 1; 
        getElementId("copy-count").innerText = updateCopyCount; 
      });
    })
    
    
}


// clear button
document.getElementById("clear-btn").addEventListener('click', function(){
    document.getElementById('history-container').innerHTML = '';
})