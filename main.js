

var i, j;
  //outer loop
  
  function fivaa(){
    i = document.getElementById('nomine').value;
    
    for(i=i-1;i>=0;i--){
        for(j=0;j<=1;j++){
            document.write(i);
        }
        for(j=0;j<=i;j++){
         document.write(i+2);
        }
         document.write('<br/>');
       }
  }
