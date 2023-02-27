let confirm = document.getElementById("confirm");
let restart = document.getElementById("clear");
let artofind = [];
let arfinded = [];
let arposition = [];


let reset = () => {
    window.setInterval(location.reload(true));
    
  }

restart.addEventListener('click', reset);


let findingFunction = () => {
    for(let i = 0; i < 64; i++) {
        thing = document.getElementById(i).value;
        artofind.push(thing);
    }
    console.log(artofind);


    let i = 0;
    while (i < 64) {
        let finding = artofind[i];
        let a = 0;
        console.log(finding);

        for(let x = 0; x < 64; x++){
            if(finding === artofind[x]){
                a++;
            };
            console.log(a);
        };

        if(a == 2){
            arfinded.push(finding);
            arposition.push(i);
        };

        i++;
        };
        
    
    console.log(arfinded);
    console.log(arposition);


    for (let h = 0; h < 10; h++){
        let a = arfinded[h];
        for (let c = 0; c < 10; c++){
            let b = arfinded[c]
            if (a === b){
                let finded = document.getElementById(arposition[c]);
                finded.classList.remove('el')
                finded.classList.add('pair'+[c])
                let finded1 = document.getElementById(arposition[h]);
                finded1.classList.remove('el')
                finded1.classList.add('pair'+[c])
            }
            
        }
    }
};


confirm.addEventListener('click', findingFunction);


