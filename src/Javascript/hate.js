const button = document.getElementById("rollScars");
const message = document.getElementById("scar-result");

const scars= ["Gain 2 hate","Nothing Happens","Take Scar C-03","Take Scar D-03","Nothing Happens","Gain 1 Resource","Gain 1 Hate"," Take Scar C-02","Take Scar B-03","Take Scar D-01","Take Scar D-02","Take Scar A-02","Take Scar A-03","Take Scar C-01","Lose one of your upgrades","Take Scar A-01","Gain a tribe upgrade of your choice","Take Scar B-02","Take Scar B-01","Gain 2 resources"]

button.addEventListener("click",()=>{
  const randomNumber = Math.floor(Math.random()*20 )+1;
  const scarResult = scars[randomNumber - 1];
  
  message.textContent = scarResult;
})