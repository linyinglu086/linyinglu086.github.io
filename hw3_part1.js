function calculate(){
    var num1, num2, num3, num4, msg, percentage;
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    num3 = parseInt(document.getElementById("num3").value);
    num4 = parseInt(document.getElementById("num4").value);
    if ((num1>=0 && num1<=100) && (num2>=0 && num2<=100) && (num3>=0 && num3<=100) && (num4>=0 && num4<=100)) {
        finalAvg = (0.5*num1 + 0.2*num2 + 0.2*num3+ 0.1*num4).toFixed(2);
        if (finalAvg <60) {
            percentage = "F";
            }
            else if (finalAvg >59 && finalAvg <69) 
            {
                percentage = "D";                       
                } 
                else if (finalAvg >69 && finalAvg <79) 
                {
                    percentage = "C";
                    }
                    else if (finalAvg > 79 && finalAvg <89) 
                    {
                        percentage = "B";
                        }
                        else if (finalAvg > 89 && finalAvg <=100) 
                        {
                            percentage ="A";
                            }
                            if (percentage == "D" || percentage == "F") {
                                msg = "Student must retake the course!";
                                document.getElementById("result").value = msg;
                            } else {
                                msg = "Final average is: " + finalAvg + "!\n" + "Percentage is: " + percentage;
                                document.getElementById("result").value = msg; 
                            }

                            }
    else {
        msg = "Please check your values!"
        document.getElementById("result").value = msg; 
    }   
    }