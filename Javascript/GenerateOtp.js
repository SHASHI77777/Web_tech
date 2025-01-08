let generateOTP = () => {
    let randomnum = Math.random() * 10000;
    let Otp = Math.floor(randomnum);
    
  //!-- using tenary operator 
    Otp > 1000 && Otp < 10000 ? console.log(Otp) : generateOTP();
  
  //!-- using if-else operator 
    //     if (Otp>=1000 && Otp<=9999){
    //         console.log(Otp);
    //     }else{
    //         generateOTP()
    //     }
  }
  
