namespace Calculator{
    export class ApplicationController {
        public result = 0;
        public num1 :number= null;
        public num2: number = null;
        public operator : string = null;       
        private number;

        public displayInpute (input){

            // Input is reset
            if(input == 'reset'){
                this.reset();
                return;
            }

            // Input is digit
             if(input >= 0 && input <= 9){
                if(this.operator == null){
                    this.num1 = this.num1*10+input;
                    this.number = this.num1;
                    //this.result = this.num1;
                    console.log('input is num1, result is '+this.result);                              
                }else{
                    this.num2 = this.num2*10+input;
                    this.number = this.num2;
                    
                    
                }
            }
            // Input is operator.
            else {
                if(this.num1 != null){
                    if(input != '='){
                        this.operator = input; 
                    }else{
                        if(this.operator == '+'){
                        this.add(this.num1, this.num2);
                        }else if(this.operator == '-'){
                            this.substract(this.num1, this.num2);
                        }else if(this.operator == '*'){
                            this.mutiply(this.num1, this.num2);
                        }else if(this.operator == '/'){
                            this.divide(this.num1, this.num2);
                        }
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
        add(a,b){
            this.num1 = a;
            this.num2 = b;
            this.result = a +b ;
        }
        substract(a,b){
            this.num1 = a;
            this.num2 = b;
            this.result = a - b ;
        }
        divide(a,b){
            this.num1 = a;
            this.num2 = b;
            
            if(b == 0){
                return 'ERROR';
            }else{
                 this.result = a / b ;
            }             
        }
        mutiply(a,b){
            this.num1 = a;
            this.num2 = b;
             this.result = a *b;
        }
        constructor(){

        }        
    }
}