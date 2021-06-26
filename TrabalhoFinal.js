class Node {
    constructor(data){ //Para criar o NOH precisamos ter esses PARAMETROS
        this.data = data;       // O dado pra ficar dentro do NOH
        this.left = null;       // A subarvore a ESQUERDA
        this.right = null;     // A subarvore da DIREITA
        this.height = 1;   // Altura da arvore
    }
    show(){
        return this.data;
    }
} 

class BST{                      //Binary Search Tree
    // constructor(){              // Cria o construtor sem Parametro
    //     this.root = null;       // Sempre que criarmos uma ARVORE o NÓ RAIZ no inicio sera NULO
    // }

    let root = null;

    findMin(root = this.root){
        if(!this.root){
            return "Arvore Vazia"
        }if (root.left){
            return this.findMin(root.left);
        }
        return root;
    }

    findMinPrint(root = this.root){
        if(!this.root){
            return "Arvore Vazia"
        }if (root.left){
            return this.findMinPrint(root.left);
        }
        return root.data;
    }

    findMax(root = this.root){
        if(!this.root){
            return "Arvore Vazia"
        }if (root.right){
            return this.findMax(root.right);
        }
        return root;
    }

    findMaxPrint(root = this.root){
        if(!this.root){
            return "Arvore Vazia"
        }if (root.right){
            return this.findMaxPrint(root.right);
        }
        return root.data;
    }


    findElement(chave, root = this.root){       // Busca um Elemento
        if(!root){                              // Se não houver RAIZ significa que não há ARVORE
            return "element not found";   // <--------------------------------------------->
        }else if(root.data === chave){          // Se o dado Coincide com o primeiro elemento da RAIZ
            return "element found";       // <--------------------------------------------->
        }else if(root.data > chave){            // Se o dado da RAIZ for maior que o dado que BUSCAMOS
            return this.findElement(chave, root.left)  // Busca Recursiva agora a ESQUERDA
        }else if(root.data < chave){            // Se o dado da RAIZ for menor que o dado que BUSCAMOS
            return this.findElement(chave, root.right) // Busca Recursiva agora a DIREITA
        }
    }
    getKey(chave, root = this.root){            // Busca um Elemento
        if(!root){                              // Se não houver RAIZ significa que não há ARVORE
            return null;                        // <--------------------------------------------->
        }else if(root.data === chave){          // Se o dado Coincide com o primeiro elemento da RAIZ
            return root;                        // <--------------------------------------------->
        }
        if(root.data > chave){                  // Se o dado da RAIZ for maior que o dado que BUSCAMOS
            return this.getKey(chave, root.left) // Busca Recursiva agora a ESQUERDA
        }else if(root.data < chave){            // Se o dado da RAIZ for menor que o dado que BUSCAMOS
            return this.getKey(chave, root.right)// Busca Recursiva agora a DIREITA
        }
    }
    buscaSucessor(data){
        let mynode = this.getKey(data)
        if (mynode){
            if(mynode.right !== null){
                let res = this.findMin(mynode.right);
                return res.data;
            }

            let p = mynode.parent;
            while( p !== null && mynode === p.right){
                mynode = p;
                p = p.parent;

            }
            return  p.data; 

        }
    }

    buscaAntecessor(data){
        let mynode = this.getKey(data)
        if (mynode){
            if(mynode.left !== null){
                let res = this.findMax(mynode.left);
                return res.data;
            }

            let p = mynode.parent;
            while( p !== null && mynode === p.left){
                mynode = p;
                p = p.parent;

            }
            return  p.data; 

        }
    }

    // calcHeight(node){
    //     this.calcHeight(node.right)
    // }

    // fatorBalanceamento(node){
    //     if(node.parent !== null){
    //         node.height = Math.abs();
    //         this.fatorBalanceamento(node.parent);
    //     }
    // }
    // insert(data){                       // Insere um DADO
    //     if(this.root === null){         // Se não existir RAIZ, então iremos CRIAR
    //         this.root = new Node(data); // Criaremos uma RAIZ passando de argumento o nosso DADO
    //         return;                     // Fim
    //     }
    //     this.recInsert(data, this.root); // Se existir RAIZ, começaremos a busca RECURSIVA até encontrar o ULTIMO NÓ [A FOLHA]
    // }
    // recInsert(data, root){               // Inicia uma chamada RECURSIVA passando a RAIZ atual + Dado a ser inserido
    //     if(data === root.data){          // Se o dado que queremos inserir JÁ ESTA na posição atual
    //         return;                      // Signifca que o dado já está inserido, apenas ignore e volte
    //     }else if(data < root.data){      // Verifica se o DADO que queremos inserir é MENOR, se sim, vai pra arvore da ESQUERDA
    //         if(root.left === null){      // Primeiro verificia se o NÓ da ESQUERDA não é NULO
    //             let tmp = new Node(data);// Cria um NOVO NÓ e coloca o dado dentro
    //             tmp.parent = root;       // Fala que o PAI do NÓ agora é node
    //             root.left = tmp;         // A esquerda do NOH PAI agora aponta pra nosso NOVO NÓ
    //             this.fatorBalanceamento(tmp);
    //         } else {                     // Entra aqui pois o NOH não é NULO
    //             this.recInsert(data, root.left) // Começa novamente a busca RECURSIVA Até encontrar o NOH RAIZ NULO
    //         }
    //     }else if(data > root.data){      // Verifica se o DADO que queremos inserir é MAIOR, se sim, vai pra arvore da ESQUERDA
    //         if(root.right === null){     // Primeiro verifica se o NÓ da DIREITA não é NULO
    //             let tmp = new Node(data);// Cria um NOVO NÓ e coloca o dado dentro
    //             tmp.parent = root;       // Fala que o PAI do NÓ agora é node
    //             root.right = tmp;        // A direita do NOH PAI agora aponta pra nosso NOVO NÓ
    //             this.fatorBalanceamento(tmp);      
    //         } else {                     // Entra aqui pois o NOH não é NULO
    //             this.recInsert(data, root.right); // Começa novamente a busca RECURSIVA Até encontrar o NOH RAIZ NULO
    //         }
    //     }
    // }

    preOrder(root = this.root){
        if(!root){
            return "."
        }else{
            return "("+root.data+" "+this.preOrder(root.left)+" "+this.preOrder(root.right)+")";
        }
    }

    inOrder(root = this.root){
        if(!root){
            return "."
        }else{
            return "("+this.inOrder(root.left)+" "+root.data+" "+this.inOrder(root.right)+")";
        }
    }
    postOrder(root = this.root){
        if(!root){
            return "."
        }else{
            return "("+this.postOrder(root.left)+" "+this.postOrder(root.right)+" "+root.data+")";
        }
    }

    height(N){
        if (N === null){
          return 0;
        }
        
        return N.height;
      }

    rightRotate(y){
        let x = y.left;
        let T2 = x.right;
        x.right = y;
        y.left = T2;
        y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
        x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
        return x;
    }
      //left rotate
      leftRotate(x){
        let y = x.right;
        let T2 = y.left;
        y.left = x;
        x.right = T2;
        x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
        y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
        return y;
      }
      // get balance factor of a node
      getBalanceFactor(N){
        if (N == null){
          return 0;
        }
        console.log("Altura do Noh Esquerdo => ", this.height(N.left), " Altura do Noh Esquerdo => ", this.height(N.right))
        return this.height(N.left) - this.height(N.right);
      }      

      insertNodeHelper(node, data){                                 //Função de inserção RECURSIVA
        if (node === null){                                         //Se for RAIZ, crie uma
          return (new Node(data));                                  //Retorna o Noh a quem chamou
        }                                                           
        if (data < node.data){                                      //Se o valor a ser inserido for menor que o valor do NOH atual
          node.left = insertNodeHelper(node.left, data);            //Vá a esquerda e nos traga o NOH a esquerda
        }else if (data > node.data){                                //Se o valor a ser inserido for maior que o valor do NOH atual
          node.right = insertNodeHelper(node.right, data);          //Vá a direita  e nos traga o NOH a direita
        }else{                                                      //Se não for, é porque o valor DATA é igual ao valor NODE.DATA
          return node;                                              //Simplesmente retorne o NOH
        }
        console.log("Atual NOH => ", node.data);
        console.log("NOH ESQUERDO[",node.data,"] => ", node.left)
        console.log("NOH DIREITO[",node.data,"] => ",node.right)
    
        // update the balance factor of each node
        // and, balance the tree
        console.log("A altura do Node.left",this.height(node.left)) 
        console.log("A altura do Node.right", this.height(node.right))
        node.height = 1 + Math.max(this.height(node.left), this.height(node.right)); //Altura do NOH atual é MAXIMO entre (NOH_LEFT,NOH_RIGHT)
        console.log("Atual ALTURA NODE => ",node.height);   
        
        let balanceFactor = this.getBalanceFactor(node);                             //Calcula o balanceamento dos 2 lados
        if (balanceFactor > 1) {                                                     //Se o valor for MAIOR QUE 1 
          if (data < node.left.data) {                                               //Se Valor dentro de DATA for MENOR que DATA.LEFT
            return this.rightRotate(node);                                           //Retorne o valor da ROTAÇÃO A DIREITA
          } else if (data > node.left.data) {                                        //Se Valor dentro de DATA for MAIOR que DATA.LEFT 
            node.left = this.leftRotate(node.left);                                  //node.left recebe o valor da ROTAÇÃO A ESQUERDA
            return this.rightRotate(node);                                           //Retorne o valor da ROTAÇÃO A DIREITA
          }
        }
        
        if (balanceFactor < -1) {                                                    //Se o valor for MENOR QUE -1
          if (data > node.right.data) {                                              //Se o valor dentro de DATA for MAIOR que node.right
            return this.leftRotate(node);                                            //Retorne o valor da ROTAÇÃO A ESQUERDA
          } else if (data < node.right.data) {                                       //Se o valor dentro de DATA for MENOR que DATA.RIGHT
            node.right = this.rightRotate(node.right);                               //node.right recebe o valor da ROTAÇÃO A DIREITA
            return this.leftRotate(node);                                            //Retorne o valor da ROTAÇÃO A ESQUERDA
          }
        }
        return node;                                                                 //Após tudo, retorne o NOH
      }
      insert(data){
        this.root = this.insertNodeHelper(root, data);
      }

}

let cristo = new BST();
cristo.insert(8);
cristo.insert(7);
cristo.insert(9);

// cristo.insert(5);
// console.log(cristo.printHeight())
// cristo.insert(4);
// console.log(cristo.preOrder())
// console.log(cristo.findElement(4));
// console.log(cristo.findMaxPrint())
// console.log(cristo.findMinPrint())
// console.log(cristo.buscaAntecessor(7))
// console.log(cristo.buscaSucessor(8))
