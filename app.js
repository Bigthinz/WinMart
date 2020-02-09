

/*
let me = [20,85,60,50,95,80,10,25,30,70,40,100,15,654,8799]
let all = []
let max = me[0]
   
   for(let i = 0; i < 15; i++){
    if(max < me[i]){
        max = me[i]
        
        all.push(max)

        console.log(max)
       console.log(all)
        let him = all


        let cont = all.length - 1
        let mas = cont
        
       console.log(cont)
       console.log(mas)
       let real = him[all.length -1]
       console.log(him[all.length -1])
       if(real){

      console.log(real)
       }
      
    }

   }
   */
/*

   let me = [20,85,60,50,95,80,10,25,30,70,40,100,15,654,8799,875,6879874]
    let now = me[0]

    


   for(let i = 0; i < me.length; i++){
   // console.log(me[i])
    if( me[i] > now){
        now = me[i]
    }
   }
   console.log(now)

*/   



 let del = [20,85,60,50,95,80,10,25,30,70,40,100,15,654,8799,875,6879874]

for(let i =0; i < del.length; i++){
    if(del[i] == 100){
        console.log(del[i] + ' the index is : ' + del.length )
    }else{
       
        console.log(' element not found')
    }
}