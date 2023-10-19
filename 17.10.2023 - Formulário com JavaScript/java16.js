/*let nome="Carlos";
alert("Nome:"+nome+" texto no final");
alert(`Nome : ${nome} texto no final 2`);

let teste=confirm("Escolha uma das opções");
if(teste){
    alert("Verdadeiro");
}else{
    alert("Falso");
}

let nome2=prompt("Digite seu apelido");
alert(`Seja bem vindo ${nome2}`);*/


//acessando o botão através do seu ID
let botao1=document.querySelector(`#btn1`);
botao1.addEventListener('click',()=>{
    let nome=document.querySelector('#nome');
    let texto_nome=Boolean (nome.value);
    let num1=document.querySelector('#num1');
    let num2=document.querySelector('#num2');
    let valor1=Number (num1.value);
    //const valor2=3.45;
    let valor2=Number (num2.value);
    //alert(valor1+valor2)
    //document.write(valor1+valor2)
    //console.log(valor1+valor2)
    let pot=valor1*valor2
    let p=document.querySelector(".p1");
    
    p.textContent=`o nome é ${texto_nome} o primeiro número: ${valor1} e o segundo número ${valor2}`; 
    p.textContent+=`A potência deu ${pot}`
})

