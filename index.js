let rice = 50; 
let dal = 80;
let egg = 8;

function BazarManage(toTalTk, q_rice, q_dal, q_eggs){
    
    let back_tk;
    back_tk = toTalTk - rice*q_rice - dal*q_dal - egg*q_eggs;

    if(back_tk<0){
        var node = document.createElement("p");                 // Create a <li> node
        var textnode = document.createTextNode(`You Have to Pay Shopkeeper ${back_tk * -1 } tk`);         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        document.getElementById("bazar").appendChild(node); 
    }
    else{
        var node = document.createElement("p");                 // Create a <li> node
        var textnode = document.createTextNode(`${back_tk} tk Remaing. Take this and Give me Tip`);         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        document.getElementById("bazar").appendChild(node); 
    }
}
// BazarManage()