function getElementId(id){
    const element = document.getElementById(id);
    return element;
}

function getElementsByClass(id){
    const element = document.getElementsByClassName(id);
    return element;
}

const callBtn = document.getElementsByClassName('call-button'); 
for(let call of callBtn){
    call.addEventListener('click', function(){
        const cardTitle = call.parentNode.parentNode.children[1].children[0].innerText;
        const tollNum = call.parentNode.parentNode.children[1].children[2].innerText;
        const coins = getElementId('coins').innerText;

        if(Number(coins) <= 20){
            alert("You have Insufficient coins!")
            return
        }
        else{
            const chargeCoin = Number(coins) - 20; 
            alert("Calling to " + cardTitle + " : " + tollNum)
            document.getElementById("coins").innerText = chargeCoin;
        }
        
    })
   
}