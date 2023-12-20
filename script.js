

function inputHandle(input){
    console.log(`Inside inputHandle : input : ${input}`);
    switch(input){

        case 'AC':  display.value  = '';
                    break;

        case 'DE':  

                    if(display.value==='Error')
                        display.value='';

                    display.value  = display.value.toString().slice(0,-1);       
                    break;
        case '=' :  
        
                try{

                    const expression=display.value;
                    const result=eval(expression);

                    if(isNaN(result) || !isFinite(result))
                        throw new Error('Divide By zero Error or invalid Expression !!');


                    
                    document.getElementById("display").value=result;
                }catch(error){
                    display.value=error;
                
                }
                   
                    break;


        default :   
                    if(display.value==='Error')
                    display.value='';

                    display.value+=input;
    }
    


}