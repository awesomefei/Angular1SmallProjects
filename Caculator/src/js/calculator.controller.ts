namespace Calculator{
    export class ApplicationController {
        public result = 0;
        public num1 :number= null;
        public num2: number = null;
        public operator : string = null;       
        private number;

        public displayInpute (input){
            if(input == 'reset'){
                this.reset();
            }
            else if(input>= 0 && input <= 9){
                if(this.operator == null){
                    this.num1 = this.num1*10+input;
                    this.number = this.num1;
                    this.result = this.num1;                              
                }else{
                    this.num2 = this.num2*10+input;
                    this.number = this.num2;
                    if(this.operator == '+'){
                        console.log('!!!!!!!!!add()');                       
                        this.add(this.num2);
                    }else if(this.operator == '-'){
                        console.log('!!!!!!!!!substract()');
                        this.substract(this.num2);
                    }else if(this.operator == '*'){
                        console.log('!!!!!!!!!multiply()');
                        this.mutiply(this.num2);
                    }else if(this.operator == '/'){
                        console.log('!!!!!!!!!divide()');
                        this.divide(this.num2);
                    }
                }
            }else{
                if(this.num1 != null){
                   this.operator = input;                                    
                   if(this.operator == '='){       
                        this.returnResult();
                   }
                }else{
                    alert('ERROR')
                }
            }
        }
        reset(){
                this.result = 0;
                this.num1 = null;
                this. num2 = null;
                this.operator = null;       
                this.number = 0;            
        }
        returnResult(){
            this.number = this.result;
            this.num1 = this.number;
            this.num2 = null;
            this.operator = null;
        }
        add(a){
             this.result += a;
        }
        substract(a){
            console.log(this.result);
            this.result = this.result-a;
            console.log(this.result);
        }
        divide(a){
            if(a==0){
                return 'ERROR';
            }else{
                 this.result=this.result/a;
            }             
        }
        mutiply(a){
             this.result = this.result*a;
        }
        constructor(){

        }        
    }
}