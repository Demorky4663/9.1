function validateform(){  
    var name1=document.myform.name1.value;  
    var password=document.myform.password.value; 
    var name2=document.myform.name2.value;  
    var name3=document.myform.name3.value;  
      
    if (name1==null || name1==""){  
      alert("Name can't be blank");  
      return false;  
    }
    if (name2==null || name2==""){  
      alert("Name can't be blank");  
      return false;  
    }
    if (name3==null || name3==""){  
      alert("Name can't be blank");  
      return false;  
    }
    if(password.length<6){  
      alert("Password must be at least 6 characters long.");  
      return false;  
      }  
    } 