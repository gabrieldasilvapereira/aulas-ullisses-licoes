//let btn_tab=document.querySelector('#btn_tabuada')
//btn_tab.addEventListener

   let paragrafo=false //variavel pra usar no if else


document.querySelector('.btn_tabuada').addEventListener('click', ()=>{

    let numero = Number(
        document.querySelector('#numero').value)
        

    if(paragrafo==true){
        document.querySelector('p').remove()
        
    } else{
        paragrafo=true //if else para substituir o paragrafo quando calcular um numero
    }

    let p=document.createElement('p') //criando um parágrafo com a tag 'p' no HTML 
    p.textContent=""    
    for(let i=1; i<=10; i++){

        let res=numero*i
        p.innerHTML+=numero + "x" + i + "=" + res + "<br><br>"
                
    }

    document.querySelector('#resultado').append(p) //inserindo a tag 'p'

})

//trocar a classe de um elemento ao clicar
document.querySelector('.btn').addEventListener('click', ()=>{
    let div=document.querySelector('#div2')
    div.classList.toggle('classe2')
    div.classList.toggle('bloco2')
    //toggle alterna entre a primeira classe e a segunda no clique do botão. Se colocarmos o add só funciona no primeiro clique
})

//adicionar src em uma tag img no HTML (ima imagem)
document.querySelector('.btn').addEventListener('click',()=>{

    document.querySelector('#img').setAttribute('src', 'https://i.ytimg.com/vi/wFio0SDwJbc/maxresdefault.jpg')
    
    
    })

