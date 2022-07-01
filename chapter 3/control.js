//for loops 
 
const names = ["Bola", 'Ahmed', 'Tinubu', 'Atiku', 'Obi'];
for(let i = 0; i < names.length; i++){
   let html = `<div>${names[i]}</div>`;
   console.log(html);
}

// while loops
let i = 0 
while(i < names.length){
 console.log(names[i]);
 i++;
}

// if statement
const age = 20;

if(age > 20 ){
    console.log('you are over 20 years');
}