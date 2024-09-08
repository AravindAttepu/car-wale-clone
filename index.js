function leftscroll()
{
    document.getElementById('trendingcars').scrollLeft += 20;
}

function rightscroll()
{


}

function remove_news_highlight()
{
    newsbtn1.classList.remove("cars_choice_btn");
    newsbtn2.classList.remove("cars_choice_btn");
}
function onclick_carnews(){
    remove_news_highlight();
    document.getElementById("car_news_display").style.display="block";
    newsbtn1.classList.toggle("cars_choice_btn");
    document.getElementById("expert_news_display").style.display="none";
}

function onclick_expertnews(){
    remove_news_highlight();
    document.getElementById("car_news_display").style.display="none";
    newsbtn2.classList.toggle("cars_choice_btn");
    document.getElementById("expert_news_display").style.display="block";
}


function expandlogodisplay()
{
    document.getElementById("logo_display").classList.toggle("logo_displaysize");
 var btninfo=document.getElementById("logosbtn");
 if(btninfo.innerHTML==="View More Brands"){
    btninfo.innerHTML="View Less Brands";
 }
 else
 {
    btninfo.innerHTML="View More Brands" ;
 }

}




function remove_btn_hightlight(){
    
    btn1.classList.remove("cars_choice_btn");
    btn2.classList.remove("cars_choice_btn");
    btn3.classList.remove("cars_choice_btn");
    btn4.classList.remove("cars_choice_btn");
    btn5.classList.remove("cars_choice_btn");
}

function onclick_budget()
{remove_btn_hightlight();
    document.getElementById("budget_display").style.display="block";
    btn1.classList.toggle("cars_choice_btn");
    document.getElementById("bodytype_display").style.display="none";
    document.getElementById("fueltype_display").style.display="none";
    document.getElementById("transmission_display").style.display="none";
    document.getElementById("seatingcapacity_display").style.display="none";

}
function onclick_body_type()
{remove_btn_hightlight();
    btn2.classList.toggle("cars_choice_btn");
    document.getElementById("budget_display").style.display="none";
    document.getElementById("bodytype_display").style.display="block";
    document.getElementById("fueltype_display").style.display="none";
    document.getElementById("transmission_display").style.display="none";
    document.getElementById("seatingcapacity_display").style.display="none";

}
function onclick_fuel_type(){
    remove_btn_hightlight();
    btn3.classList.toggle("cars_choice_btn");
    document.getElementById("budget_display").style.display="none";
    document.getElementById("bodytype_display").style.display="none";
    document.getElementById("fueltype_display").style.display="block";
    document.getElementById("transmission_display").style.display="none";
    document.getElementById("seatingcapacity_display").style.display="none";

}

function onclick_transmission(){
    remove_btn_hightlight();
    btn4.classList.toggle("cars_choice_btn");
    document.getElementById("budget_display").style.display="none";
    document.getElementById("bodytype_display").style.display="none";
    document.getElementById("fueltype_display").style.display="none";
    document.getElementById("transmission_display").style.display="block";
    document.getElementById("seatingcapacity_display").style.display="none";
}

    function onclick_seating_capacity(){
        remove_btn_hightlight();
        btn5.classList.toggle("cars_choice_btn");
        document.getElementById("budget_display").style.display="none";
        document.getElementById("bodytype_display").style.display="none";
        document.getElementById("fueltype_display").style.display="none";
        document.getElementById("transmission_display").style.display="none";
        document.getElementById("seatingcapacity_display").style.display="block";
    }

