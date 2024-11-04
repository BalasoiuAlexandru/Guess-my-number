

         

      const rst = document.querySelector('.again')
      let message = function (mesage){
      document.querySelector('.message').textContent = mesage}


    let score =  20;
    let highscore = 0;
    let num = Math.trunc(Math.random()* 9)+ 1;
      

      document.querySelector('.check').addEventListener("click", function() {     

        const guess=(document.querySelector('.guess').value)
        console.log(guess)

       if (num == guess) {
        message('Ai NIMERIT NUMARUL!!!')
        document.querySelector('.number').textContent = num

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width='30rem';


        if(score > highscore){
            highscore = score 
           document.querySelector('.highscore').textContent = highscore;
         }
         

       }
    

        else if (num !== guess ){
             if(score > 0){
             
             document.querySelector('.message').textContent=num < guess ? 'To High!' : 'To Low!' ;

              score--
              document.querySelector('.score').textContent = score

                          }
            else {
                  message('AI PIERDUT!!!')
                  document.queriSelector('.score').textContent = 0;
                  
                  }
              }

       
                
    }

            
       

  )
      const btn =document.querySelector('.again')
      document.querySelector('.again').addEventListener('click', function(){
        score=20
      num = Math.trunc(Math.random()* 9)+ 1;
        message ('Start guessing...') 
        document.querySelector('.number').textContent = '?'
        document.querySelector('.guess').value = ""

        document.querySelector('body').style.backgroundColor ='#222';
        document.querySelector('.number').style.width='15rem';
        document.querySelector('.score').textContent= score

       
    


    })
      


