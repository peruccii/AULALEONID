class card extends HTMLElement {
    constructor () {
        super()
        this.shadow = this.attachShadow({mode:'open'})
        this.nome = 'Nome do Aluno'
        this.bgcolor = 'tomato'
        this.turma = 'sem turma'
       

        //const titulo = document.createElement('h1')
        //titulo.textContent = 'Eduardo Perucci'

        //this.shadow.appendChild(titulo)
    }
    static get observedAttributes() {
        return['nome', 'bgcolor', 'turma']
    }
    attributeChangedCallback(nameAttr, oldValue, newValue){
        this[nameAttr] = newValue
       
    }

    connectedCallback(){
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.style())
    }



    style(){
        const style = document.createElement('style')
        style.textContent = `
        .card{
            width: 300px;
            height: 300px;
            background-color: ${this.bgcolor};
            place-items: center;
            display: grid;
            border-radius: 15px;
            border-style: ridge;
            border-width: 10px;
       
           
            
         
        }   

        .card:hover{
            border-radius:5px
            
        }
        .card_titulo{
            color: #fff;
            font-size: 1.5rem;
        }
        .card_imagem{
            width: 51%;
            height: 179%;
            background-image: url(https://cdn.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.webp);
            background-size: cover;
            border-radius: 30px;
            border-color: red;
            border-width: 100px;
            border-color: red;
        


        }
        .card_turma{
            color: #fff;
        }

        
 
        
        `
        return style

    }   


    component(){
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
        <div class="card_titulo" >${this.nome}</div>
        <div class="card_imagem" ></div>
        <div class="card_turma" >${this.turma}</div>
        `
        return card
    }

}

customElements.define('card-aluno', card)