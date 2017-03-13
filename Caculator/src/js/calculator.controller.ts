namespace Calculator{
    export class ApplicationController {
        public result = 0;
        public calculateNumber1 :number= null;
        public calculateNumber2: number = null;
        public operator : string = null;       
        private dispalyNumber;

        public displayInput (input){

            // Input is reset
            if(input == 'reset'){
                this.reset();
                return;
            }

            // Input is digit
             if(input >= 0 && input <= 9){
                if(this.operator == null){
                    this.calculateNumber1 = this.calculateNumber1 * 10 +input;
                    this.dispalyNumber = this.calculateNumber1;
                }else{
                    this.calculateNumber2 = this.calculateNumber2 * 10 + input;
                    this.dispalyNumber = this.calculateNumber2;
                }
            }
            // Input is operator.
            else {
                if(this.calculateNumber1 != null){
                    if(input != '='){
                        this.operator = input; 
                    }else{
                        if(this.operator == '+'){
                        this.add(this.calculateNumber1, this.calculateNumber2);
                        }else if(this.operator == '-'){
                            this.substract(this.calculateNumber1, this.calculateNumber2);
                        }else if(this.operator == '*'){
                            this.mutiply(this.calculateNumber1, this.calculateNumber2);
                        }else if(this.operator == '/'){
                            this.divide(this.calculateNumber1, this.calculateNumber2);
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
                this.calculateNumber1 = null;
                this. calculateNumber2 = null;
                this.operator = null;       
                this.dispalyNumber = 0;            
        }
        returnResult(){
            this.dispalyNumber = this.result;
            this.calculateNumber1 = this.dispalyNumber;
            this.calculateNumber2 = null;
            this.operator = null;
        }
        add(a,b){
            this.calculateNumber1 = a;
            this.calculateNumber2 = b;
            this.result = a +b ;
        }
        substract(a,b){
            this.calculateNumber1 = a;
            this.calculateNumber2 = b;
            this.result = a - b ;
        }
        divide(a,b){
            this.calculateNumber1 = a;
            this.calculateNumber2 = b;
            
            if(b == 0){
                return 'ERROR';
            }else{
                 this.result = a / b ;
            }             
        }
        mutiply(a,b){
            this.calculateNumber1 = a;
            this.calculateNumber2 = b;
             this.result = a *b;
        }
        constructor(){

        }        
    }
}