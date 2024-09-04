const obj=JSON.parse(localStorage.getItem("Object"))||{
    win:0,
    lose:0,
    tie:0
};

    function playGame(playMove){

        const randomNumber=Math.random();
        let computerMove="";   
        let result=""; 

    if(randomNumber<=1/3){
        computerMove="rock";
    }else if(randomNumber<=2/3){
        computerMove="paper";
    }else{
        computerMove="scissor"; 
    }   
    if(playMove==="rock"){
        if(computerMove==="rock"){
            result=" It is tie";
            obj.tie+=1;
        }else if(computerMove==="paper"){
            result="You lose";
            obj.lose+=1;
        }else if(computerMove==="scissor"){
            result="You win";
            obj.win+=1;
        }  
        
    }  
    else if(playMove==="paper"){
        if(computerMove==="rock"){
            result="You win";
            obj.win+= 1;
        }else if(computerMove==="paper"){
            result="It is tie";
            obj.tie+= 1;
        }else if(computerMove==="scissor"){
            result="You lose";
            obj.lose+= 1;
        }
        
    } 
    else if (playMove==="scissor"){
    if(computerMove==="rock"){
        result="You Lose";
        obj.lose+= 1;
    }else if(computerMove==="paper"){
        result="You Win";
        obj.win+= 1;
    }else if(computerMove==="scissor"){
        result="It is tie";
        obj.tie+= 1;
    }
    }
    localStorage.setItem("Object",JSON.stringify(obj));
    
    alert(`You picked ${playMove}.Computer picked ${computerMove}.${result} .
        Wins:${obj.win} , Looses:${obj.lose} , Ties:${obj.tie}`); 
}

function reset(){
    obj.win=0;
    obj.lose=0;
    obj.tie=0;
    localStorage.removeItem("Object");

    alert(`Wins:${obj.win} , Looses:${obj.lose} , Ties:${obj.tie}`);
}