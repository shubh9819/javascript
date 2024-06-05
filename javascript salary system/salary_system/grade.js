function tem(){
    let eName=document.getElementById("na").value;
    let cname=document.getElementById("cna").value;
    let eSalary=document.getElementById("sa").value;
    let leaveday=document.getElementById("eday").value;
    let tds=document.getElementById("tds").value;
    let pf=document.getElementById("pf").value;
    let year=document.getElementById("yea").value;
    let month=document.getElementById("month").value;

    let month1=0;
    switch(month){
        case "JANUARY":
        month1=31;
        break;
        case "FEBRUARY":
            if (year%400==0 || year%4==0 && year%100!=0)
               month1=29;
            else{
                month1=28;
            }
            break;
            case "MARCH":
            month1=31;
            break;
            case "APRIL":
                 month1=30;
                    break;
                    case "MAY":
                        month1=31;
                        break;
                        case "JUNE":
                            month1=30;
                            break;
                            case "JULY":
                                month1=31;
                                break;
                                case "AUGUST":
                                    month1=31;
                                    break;
                                    case "SEPTEMBER":
                                        month1=30;
                                        break;
                                        case "OCTOBER":
                                            month1=31;
                                            break;
                                            case "NOVEMBER":
                                                month1=30;
                                                break;
                                                case "DECEMBER":
                                                    month1=31;
                                                    break;
                                                    default:
                                                        month1=1;
                                                       
    }
    let yearctc=eSalary*12;
    let holiday=parseInt(eSalary/month1*leaveday);
   
    let pf3=(pf/100)*eSalary;
    let tds3=(tds/100)*eSalary;
    let finSalary=eSalary-(pf3+tds3+holiday);


    document.getElementById("Ctc").innerHTML=yearctc;
    document.getElementById("name").innerHTML=eName;
    document.getElementById("salary").innerHTML=eSalary;
    document.getElementById("date").innerHTML=month+" "+year;
    document.getElementById("leave").innerHTML=holiday;
    document.getElementById("dmonth").innerHTML=month1;
    document.getElementById("tds1").innerHTML=tds3;
    document.getElementById("pf1").innerHTML=pf3;
    document.getElementById("Fsalary").innerHTML=finSalary;
    
}