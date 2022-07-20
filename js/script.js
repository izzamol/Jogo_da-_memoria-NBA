const grid = document.querySelector('.grid')





const times = [
    'Atlanta_Hawks',
    'Boston_Celtics',
    'Brooklyn_Nets',
    'Charlotte_Hornets',
    'Chicago_Bulls',
    'Cleveland_Cavaliers',
    'Dallas_Mavericks',
    'Denver_Nuggets',
    'Detroit_Pistons',
    'Golden_State_Warriors',
    'Houston_Rockets',
    
    'Indiana_Pacers',
    'Los_Angeles_Lakers',
    'Los_Angeles_Clippers',
    'Memphis_Grizzlies',
    'Miami_Heat',
    'Minnesota_Timberwolves',
    'Miwaukee_Bucks',
    'New_Orleans_Pelicans',
    'New_York_Knicks',
    'Oklahoma_City_Thunde',
    'Orlando_Magic',
    'Philadelphia_76ers',
    'Phoenix_Suns',
    'Portland_Trail_Blazers',
    'Sacramento_Kings',
    'San_Antonio_Spurs',
    'Toronto_Raptors',
    'Utah_Jazz',
    'Washington_Wizards',

]



function criarElemento(tag, criaClasse){
    const elemento = document.createElement(tag)
    elemento.className = criaClasse

    return elemento
}


function criarCard(time){


   

    const card = criarElemento('div', 'cards')
    const front = criarElemento('div', 'face front')
    const back = criarElemento('div', 'face back')



    front.style.backgroundImage = `url('img/${time}.jpeg')`

    card.appendChild(front)
    card.appendChild(back)
    
    card.addEventListener('click', virar)
    card.setAttribute('data-time',time)

    return card

    

}






let carta1=''

let carta2=''


function verificavitoria(){
    const destsabilitadas = document.querySelectorAll('.achoooo')

    console.log(destsabilitadas.length )
    if(destsabilitadas.length == 16){




        setTimeout(() => {
        
                    alert("parabens! vc ganhou")

               },900)

    }
}

function verificaigrandade (){
    const time1 = carta1.getAttribute('data-time')
    const time2 = carta2.getAttribute('data-time')  

    if(time1 === time2){



        setTimeout(() => {
        
         carta1.firstChild.classList.add('achoooo')
        carta2.firstChild.classList.add('achoooo')
                carta1 = ''
                carta2 = ''
            },500)
        
           

        verificavitoria()
         

    } else{

        setTimeout(() => {
        carta1.classList.remove('virar')
        carta2.classList.remove('virar')
    
            carta1 = ''
            carta2 = ''
        },700)
       
    }

}

function virar ({target}){
    
    if(target.parentNode.className.includes('virar')){
        return
    }


    if( carta1 === ''){
            target.parentNode.classList.add('virar')

            carta1 = target.parentNode

    }else  if( carta2 === ''){
        
        target.parentNode.classList.add('virar')
        carta2 = target.parentNode

        verificaigrandade()
    }


  

}




const carregarGame = () =>{

    

    const sheikTimes = times

    sheikTimes.sort(() => Math.random() - 0.5)


    const sheikTimes2 = sheikTimes.slice(0,9)



    const timeDuplicados = [...sheikTimes2, ...sheikTimes2]


    timeDuplicados.sort(() => Math.random() - 0.5)

    timeDuplicados.forEach((sheikTime) =>{

   

        const card = criarCard(sheikTime)

        grid.appendChild(card)
    })


    
}

carregarGame()