let crossBtn=document.querySelector(".cross");
let hamMenu=document.querySelector(".ham_menu");
let hamBtn=document.querySelector(".hamburger");
let cartBtn=document.querySelector(".cart_btn") 
 let cartBox=document.querySelector(".cart_box")
 let mainImg=document.querySelector(".main_img");
 
 let lightDiv=document.getElementById("lig_div");

 
 //create lightbox
 let lightbox=document.createElement('div');
 lightbox.id="lightbox";
 document.body.appendChild(lightbox);
 
 let count=0;
 
 //create a img in lightbox
 mainImg.addEventListener("click",function(){
   lightbox.style.display="flex";
   //lightbox.appendChild(light_div);
   lightDiv.style.display="flex";
   
 })
 
 //ligthbox deactitved
 /*
 lightbox.addEventListener("click",function(){
   lightbox.style.display="none";
   lightDiv.style.display="none";
 })
*/
//On clicking the hamburger button
 hamBtn.addEventListener("click",function(){
   hamMenu.classList.add("active");
  lightbox.style.display="flex";
 });
 
 //on clicking cross button
 crossBtn.addEventListener("click",function(){
   hamMenu.classList.remove("active");
   lightbox.style.display="none";
 });
 
 //on clicking the cart icon 
 cartBtn.addEventListener("click",function(){
   count++;
     if(count%2===0){
      cartBox.style.display="none";
    }
    else{
      cartBox.style.display="flex";
    }
 });
 let showIndex=2;
 
  let plusBtn=document.querySelector(".arrow_right");
  
 
 let MinusBtn=document.querySelector(".arrow_left");
 
 let MainImg=document.querySelector(".light_mainimg");

plusBtn.addEventListener("click",()=>{
  //let Num=showIndex++ ;
  let Num;
  if(showIndex<5){
   Num=showIndex++ ;
  }
  else{
  showIndex=2;
  }
 console.log(Num); 
 for (var i = Num; i < 5; i++) {
   MainImg.src=`/images/image-product-`+ Num +`.jpg`;
 }
}
)

let MinusIndex=3;
 MinusBtn.addEventListener("click", () => {
  let Num;
 if(MinusIndex>0){
   Num=MinusIndex--;
   console.log(Num);
 }
 else{
   Num=1;
 }
   for (var i =Num; i>0; i--) {
     MainImg.src = `/images/image-product-` + Num + `.jpg`;
   }
 });
 
 //lightbox div cross_img
 CrossImg=document.querySelector(".cross_img");
 /*console.log(CrossImg);*/
 CrossImg.addEventListener("click", () => {
    lightbox.style.display = "none";
    lightDiv.style.display = "none";
  })
 
 /* Minus and plus btn*/
 Prd_plus=document.getElementById("product_plus");
 
 Prd_Minus=document.getElementById("product_minus");
 
 Prd_Value=document.querySelector(".value")
 
let Intial_value=0;
  
 /*Prd_Value.innerHTML=Intial_value;*/
 
 function ChangeValue(Intial_value){
  if(Intial_value>=0){ Prd_Value.innerHTML=Intial_value;}
else{
  Intial_value=0;
}

 }
 ChangeValue(Intial_value); 
 
 Prd_plus.addEventListener("click",()=>{
   Intial_value++;
   ChangeValue(Intial_value);
 })
 
 Prd_Minus.addEventListener("click",()=>{
  
       if(Intial_value>0){Intial_value--;
       ChangeValue(Intial_value)
       console.log(Intial_value);
       }
       else{
         Intial_value++
         ChangeValue(Intial_value)
       }
 })
 
 /*cart notification*/
let noti_box=document.querySelector(".noti")

 
 //add to cart button
 let shopBtn=document.querySelector(".shop_button");
 
 shopBtn.addEventListener("click",()=>{
   noti_box.style.display="flex";
   cartArea.style.display="flex";
   
   noti_box.innerHTML=Intial_value;
   
   NumPrd.innerHTML=Intial_value;
   
   Total_value.innerHTML="&dollar;"+ productPrice*Intial_value;
   
 });
 
 
 
 
 //cart area display
 
 let cartArea=document.querySelector(".cart_area");
 
 
let NumPrd=document.getElementById("Num");
 
 let Total_value=document.querySelector(".cal_total");
 
 let productPrice=125;
 
 let deleBtn=document.querySelector(".dele_btn");
 
 deleBtn.addEventListener("click",()=>{
   cartArea.style.display="none";
   noti_box.style.display="none";
 })
 
 
 
 
 