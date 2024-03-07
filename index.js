var btn=document.querySelector('input[type="submit"]');
btn.addEventListener("click",myfunc);
var dis=document.querySelector(".gradecard");
dis.classList.remove("gradecard");

var flag=0;
// var name="N/A";
// var age="N/A";
var d;
var remarks;

var eng=0;
var phy=0;
var chem=0;
var math=0;
var cs=0;
var age="N/A";
function myfunc(){
    var name=document.querySelector(".name").value;
    age=parseInt(document.querySelector(".age").value);
     eng=parseFloat(document.querySelector(".eng").value);
     phy=parseFloat(document.querySelector(".phy").value);
     chem=parseFloat(document.querySelector(".chem").value);
     math=parseFloat(document.querySelector(".maths").value);
     cs=parseFloat(document.querySelector(".cs").value);
    var total=eng+phy+chem+math+cs;
    var percent=(total/500)*100;
    console.log(total);
    percent=percent.toPrecision(4);

    if(percent>=30 && percent<=50){
        d="D"
        remarks="poor"
    }
    else if(percent>50 && percent<70){
        d="C"
        remarks="could be better"
    }
    else if(percent>=70 && percent<80){
        d="B"
        remarks="good"

    }
    else if(percent>=80 && percent<=100){
        d="A"
        remarks="excellent"
    }
    else if(percent<30 && percent>=0){
        d="E";
        remarks="fail"
    }

    if(flag%2==0 ){
        if(!isNaN(total) && total<=500 && total>=0){
            dis.classList.add("gradecard");
            dis.innerHTML="<h3>Name:"+ name+"</h3>"+ 
            "<h3>Age:"+ age+"</h3>"+
            "<h3>Total Marks:"+total +" </h3>"+
            "<h3>Percentage:"+percent +"</h3>"+
            "<h3>Grade:"+d +"</h3>"+
            "<h3>Remarks:"+remarks +"</h3>"
        }
        else{
            alert("Enter all the fields Properly");
            flag=1;
        }
            
    }
    else{
        dis.classList.remove("gradecard");
        dis.innerHTML="";
        location.reload();
    }
    flag++;
}