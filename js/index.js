let allBooks=[]

 function changeFont () {


    if(window.innerWidth < 680) {

        document.querySelector('.left').style.fontSize='40px'
        document.querySelector('.right').style.fontSize='40px'
        
        }
        else {
        
        document.querySelector('.left').style.fontSize='80px'
        document.querySelector('.right').style.fontSize='80px'
        
        }
 }

const logedCode=` 
<div class="sin-in nav-signed  ">

<div class='position-relative' >  
<i   style="top: 4px; left: 22px;" class="fa-solid fa-magnifying-glass position-absolute "></i>
<input type="search" name="" id="search" class="search ms-3 rounded-3 searshInp ps-4 ">
</div>
     
<ul class='me-3' >
    <li onclick="mainPage()" >  الرئيسيه</li>
    <li onclick="categories()" >  انواع الكتب  </li>
    <li onclick="contactUs()"> تواصل معنا</li>
    <li onclick="logOut()" >  تسجيل الخروج </li>

    
    
   

    <div class="clr"></div>
</ul>
</div>


<div class="navToggle  w-100 d-none justify-content-end flex-column align-items-end overflow-hidden " style="background-color: #7ba0a8;"  >
      
        <div onclick="displayToggle()" class="mt-3 me-3 toggleParse " > <i class=" text-dark fa-solid fa-bars fa-2x text-white "></i></div>
        <ul class="d-none align-items-end flex-column text-white mt-3 me-3  " >
        
                        <li style="text-align: end;"  class="mb-2" onclick="logOut()" >  تسجيل الخروج </li>
                        <li style="text-align: end;"  class="mb-2" onclick="contactUs()"> تواصل معنا</li>
                        <li style="text-align: end;"  class="mb-2" onclick="categories()" >  انواع الكتب  </li>
                        <li style="text-align: end;"  class="mb-2" onclick="mainPage()" >  الرئيسيه</li>
                        <div class='position-relative' >  
                          <i   style="top: 4px; left: 22px;" class="fa-solid fa-magnifying-glass position-absolute text-dark "></i>
                          <input type="search" name="" id="search" class="search ms-3 rounded-3 searshInp ps-4 ">
                          </div>
        </ul>

</div>


<div class="root"  >

<div class="home ">
   
<div class="d-flex justify-content-center align-items-center w-100 h-100" >

    
    <div class="logo">
        <p   class="left d-flex align-items-center ">التلميذ</p>
        <img src="images/لقطة شاشة 2023-11-13 010016 (1) copyق.png" alt="">
        <p  class="right d-flex align-items-center ">ثواب</p>


</div>


<div>

<button onclick="displayAllBooks()" class="btn1">تستفيد</button>
<button onclick="formBook()" class="btn2 "> هتفيد</button>
</div>


</div>



</div>





</div> `

const unLogedCode=`

<div class="sin-in nav-signed ">
<div class='position-relative' >  
<i   style="top: 4px; left: 22px;" class="fa-solid fa-magnifying-glass position-absolute "></i>
<input type="search" name="" id="search" class="search ms-3 rounded-3 searshInp ps-4 ">
</div>
     
        <ul class='me-3' >
            <li onclick="mainPage()" >  الرئيسيه</li>
            <li onclick="contactUs()"> تواصل معنا</li>
            <li onclick="loginPage()" >تسجيل الدخول</li> 


            <div class="clr"></div>
        </ul>
</div>

<div class="navToggle  w-100 d-none justify-content-end flex-column align-items-end overflow-hidden " style="background-color: #7ba0a8;"  >
      
        <div onclick="displayToggle()" class="mt-3 me-3" > <i class="fa-solid fa-bars fa-2x text-white "></i></div>
        <ul class="d-none align-items-start flex-column text-white mt-3 me-3  " >
        
                        <li class="mb-2" style="text-align: end;"  onclick="loginPage()" >تسجيل الدخول</li> 
                        <li class="mb-2" style="text-align: end;"  onclick="contactUs()"> تواصل معنا</li>
                        <li class="mb-2" style="text-align: end;"  onclick="mainPage()" >  الرئيسيه</li>
        </ul>

</div>


<div class="root"  >

<div class="home ">

 <div class="d-flex justify-content-center align-items-center w-100 h-100" >

     
     <div class="logo">
         <p   class="left d-flex align-items-center ">التلميذ</p>
         <img src="images/لقطة شاشة 2023-11-13 010016 (1) copyق.png" alt="">
         <p  class="right d-flex align-items-center ">ثواب</p>


 </div>
 

 </div>

</div>





</div>


`

function displayToggle() {

document.querySelector('.navToggle ul').classList.toggle('d-none') 

}

document.addEventListener('DOMContentLoaded', function() {


    if(localStorage.getItem('token')) {

document.body.innerHTML=logedCode;
if (window.innerWidth < 820) {
 
    document.querySelector('.nav-signed').classList.add('d-none')
    document.querySelector('.navToggle').classList.remove('d-none')
    document.querySelector('.navToggle').classList.add('d-flex')

  } else {

    document.querySelector('.nav-signed').classList.remove('d-none')
    document.querySelector('.navToggle').classList.add('d-none')
    document.querySelector('.navToggle').classList.remove('d-flex')
  }

  changeFont ()
    }

    else {
document.body.innerHTML=unLogedCode;
if (window.innerWidth < 820) {
 
    document.querySelector('.nav-signed').classList.add('d-none')
    document.querySelector('.navToggle').classList.remove('d-none')
    document.querySelector('.navToggle').classList.add('d-flex')

  } else {

    document.querySelector('.nav-signed').classList.remove('d-none')
    document.querySelector('.navToggle').classList.add('d-none')
    document.querySelector('.navToggle').classList.remove('d-flex')
  }
  changeFont ()
    }

  

  });
  
  window.addEventListener("resize", function () {

    if (window.innerWidth < 820) {
 
        document.querySelector('.nav-signed').classList.add('d-none')
        document.querySelector('.navToggle').classList.remove('d-none')
        document.querySelector('.navToggle').classList.add('d-flex')

      } else {

        document.querySelector('.nav-signed').classList.remove('d-none')
        document.querySelector('.navToggle').classList.add('d-none')
        document.querySelector('.navToggle').classList.remove('d-flex')
      }


      changeFont ()


  });


function signUp() {

document.querySelector('.root').innerHTML=`

<form class="vh-100 d-flex justify-content-center align-items-center p-5 signUp "  >  

<div class="px-5 py-2 w-75" > 

    <label for="userName">userName</label>
    <input type="text"  id="userName" placeholder="userName" class="form-control mt-2 userName" >


</div>
<div class="px-5 py-2 w-75" > 

<label for="email">Email</label>
<input type="email"  id="email" placeholder="Email" class="form-control mt-2 email" >


</div>
<div class="px-5 py-2 w-75" > 

<label for="password">password</label>
<input type="password"  id="password" placeholder="password" class="form-control mt-2 password" >


</div>
<div class="px-5 py-2 w-75" > 

<label for="rePassword">rePassword</label>
<input type="rePassword"  id="rePassword" placeholder="rePassword" class="form-control mt-2 rePassword" >


</div>

<div class="px-5 py-2 w-75" > 

<label for="phone">phone number</label>
<input type="tel"  id="phone" placeholder="phone number" class="form-control mt-2 phone" >


</div>
<div class="px-5 mt-5 w-75" > 

<div class="btn btn-success w-100 " onclick="formatingSignUp()" > Register </div>


</div>



</form>
`

}

function contactUs() {

document.querySelector('.root').innerHTML=`


<form class="vh-100 d-flex justify-content-center align-items-center p-5 "  >  

<div class="px-5 py-2 w-75" > 

    <label for="userName">userName</label>
    <input type="text"  id="userName" placeholder="userName" class="form-control mt-2 " >


</div>
<div class="px-5 py-2 w-75" > 

    <label for="email">Email</label>
    <input type="email"  id="email" placeholder="Email" class="form-control mt-2 " >


</div>

<div class="px-5 py-2 w-75" > 

<label for="phone">phone number</label>
<input type="tel"  id="phone" placeholder="phone" class="form-control mt-2 " >


</div>



<div class="px-5 mt-5 w-75" > 

<button class="btn btn-success w-100 "> Contact Us </button>


</div>



</form>



`


}

function signIn() {

document.querySelector('.root').innerHTML=` 


<form class="vh-100 d-flex justify-content-center align-items-center p-5 signIn "  >  

<div class="px-5 py-2 w-75" > 

    <label for="userName">userName</label>
    <input type="text"  id="userName" placeholder="userName" class="form-control mt-2 userName" >


</div>

<div class="px-5 py-2 w-75" > 

<label for="password">password</label>
<input type="password"  id="password" placeholder="password" class="form-control mt-2 password" >


</div>



<div class="px-5 mt-5 w-75" > 

<div tyep="send" class="btn btn-success w-100 " onclick="formatingSignIn()" > Login </div>


</div>



</form>


`

}



function loginPage() {


    document.querySelector('.root').innerHTML=` 
    <div class="vh-100 d-flex align-items-center ">

    <div class="containar_sec3 d-flex align-items-center  ">
            
    <div class="right_side mt-5">
        <img src="./images/pexels-gül-işık-2128249.png" alt="">
    </div>
   
    
       <div class="form_sec3">
        <div class="caption"><p>تسجيل الدخول الي حسابك</p></div>
        <div class="left_side">
            <div class="form" onclick="signIn()" >
                <p>هل لديك حساب بالفعل  </p>
            </div>
            <div class="form" onclick="signUp()" >
                <p> انشاء حساب جديد </p>
            </div>
            <div class="form">
                <p>الاستمرار بالايميل </p>
            </div>
            <div class="form">
                <p>الاستمرار بجوجل</p>
            </div>
            
       </div>
       <!-- <div class="button"> -->
        <div class="for5">
            
        <p>
            <i class="fa-brands fa-facebook"></i>
            فيسبوك
        </p>
        <h3>او</h3>
        <p class="for5">
            <i class="fa-brands fa-apple"></i>
            ابل

        </p>
    </div>
             
        
         
        
    </div>
      </div> 
    </div>
   
    `
}
function mainPage() {



    if(localStorage.getItem('token')) {

        document.body.innerHTML=logedCode

        if (window.innerWidth < 820) {
 
            document.querySelector('.nav-signed').classList.add('d-none')
            document.querySelector('.navToggle').classList.remove('d-none')
            document.querySelector('.navToggle').classList.add('d-flex')
    
          } else {
    
            document.querySelector('.nav-signed').classList.remove('d-none')
            document.querySelector('.navToggle').classList.add('d-none')
            document.querySelector('.navToggle').classList.remove('d-flex')
          }
          changeFont ()
            }
        
            else {
        document.body.innerHTML=unLogedCode
        if (window.innerWidth < 820) {
 
            document.querySelector('.nav-signed').classList.add('d-none')
            document.querySelector('.navToggle').classList.remove('d-none')
            document.querySelector('.navToggle').classList.add('d-flex')
    
          } else {
    
            document.querySelector('.nav-signed').classList.remove('d-none')
            document.querySelector('.navToggle').classList.add('d-none')
            document.querySelector('.navToggle').classList.remove('d-flex')
          }
          changeFont ()
        
            }

        
 
}

function formatingSignIn() {

   
const userName= document.querySelector('.signIn .userName').value ;
const password= document.querySelector('.signIn .password').value ;
if(!(userName.length>6&&userName.length<30)) {
    
    window.alert('error in user name , please check user name ')
     
    }
    else if(!(password.length>6&&password.length<30)) {
    
        window.alert('error in user pass , must be at less charcrars 6 charcrars and bigeest charctars 30 ')
         
        }

     

        else {
            localStorage.setItem('token','anything becouse i dont have Apis ')
            
    
            document.querySelector('body').innerHTML=logedCode
            if (window.innerWidth < 820) {
 
                document.querySelector('.nav-signed').classList.add('d-none')
                document.querySelector('.navToggle').classList.remove('d-none')
                document.querySelector('.navToggle').classList.add('d-flex')
        
              } else {
        
                document.querySelector('.nav-signed').classList.remove('d-none')
                document.querySelector('.navToggle').classList.add('d-none')
                document.querySelector('.navToggle').classList.remove('d-flex')
              }
              changeFont ()

        }  

}

function formatingSignUp() {

    const userName= document.querySelector('.signUp .userName').value ;
    const password= document.querySelector('.signUp .password').value ;
    const email= document.querySelector('.signUp .email').value ;
    const rePassword= document.querySelector('.signUp .rePassword').value ;
    const phone= document.querySelector('.signUp .phone').value ;

    if(!(userName.length>6&&userName.length<30)) {
    
    window.alert('error in user name , please check user name ')
     
    }   
    else if(!(password.length>6&&password.length<30)) {
    
        window.alert('error in user pass , must be at less charcrars 6 charcrars and bigeest charctars 30 ')
         
        }
    else if(!(email.length>6&&email.length<30&&email.includes('@'))) {
    
    window.alert('error in user email please check your email ')
     
    }
  
    else if(!(rePassword===password)) {
    
    window.alert('this password dont match the above password  ')
     
    }
    else if(!(phone.length==11)) {
    
    window.alert('error in user phone , please check your phone number ')
     
    }
 
    
    else {
        localStorage.setItem('token','anything becouse i dont have Apis ')

        document.querySelector('body').innerHTML=logedCode 
        if (window.innerWidth < 820) {
 
            document.querySelector('.nav-signed').classList.add('d-none')
            document.querySelector('.navToggle').classList.remove('d-none')
            document.querySelector('.navToggle').classList.add('d-flex')
    
          } else {
    
            document.querySelector('.nav-signed').classList.remove('d-none')
            document.querySelector('.navToggle').classList.add('d-none')
            document.querySelector('.navToggle').classList.remove('d-flex')
          }
          changeFont ()
     
    }



}

function logOut () {

localStorage.removeItem('token')

document.body.innerHTML=unLogedCode
if (window.innerWidth < 820) {
 
    document.querySelector('.nav-signed').classList.add('d-none')
    document.querySelector('.navToggle').classList.remove('d-none')
    document.querySelector('.navToggle').classList.add('d-flex')

  } else {

    document.querySelector('.nav-signed').classList.remove('d-none')
    document.querySelector('.navToggle').classList.add('d-none')
    document.querySelector('.navToggle').classList.remove('d-flex')
  }
  changeFont ()

}

function categories() {

document.querySelector('.root').innerHTML=`

<div class="overflow-hidden pt-5" >       


<div class="categories d-flex align-items-center justify-content-center flex-column container pt-5 " >

<div class=" py-4 my-4  bg-white w-25 position-relative rounded-3 ">

    <i class="fa-solid fa-graduation-cap fa-4x   "></i>
    <p onclick='displayUniversityBooks()' class="pe-3 w-100 text-end "> كتب جامعيه</p>
</div>

<div class="py-4 my-4  bg-white w-25 position-relative rounded-3 ">
    <i class="fa-solid fa-briefcase fa-4x  "></i>
    <p class="pe-3 w-100 text-end">  كتب مدرسيه وخارجيه</p>
</div>
<div class="py-4 my-4  bg-white w-25 position-relative rounded-3 ">
    <i class="fa-solid fa-book-open fa-4x  "></i>
    <p class="pe-3 w-100 text-end">كتب روايات وقصص</p>
</div>
<div class="py-4 my-4  bg-white w-25 position-relative rounded-3 ">
    <i class="fa-solid fa-book fa-4x  "></i>
    <p  class=" pe-3 w-100 text-end"> كتب اخرى </p>
</div>
</div>


</div>

`
} 


function displayUniversityBooks(){

    document.querySelector('.root').innerHTML=`
    
    <div class="containar-last overflow-hidden ">
        <div class="title">
            <h2  > 
                <i class="fa-solid fa-graduation-cap"></i>
                <br>
                كتب جامعيه
               </h2>
          </div>

           <div class="last-images">
              <div class="child">
                <img src="./images/1569929856.png" alt="">
                <p>كتاب حقوق الانسان</p>
              </div>
              <div class="child">
                <img src="./images/j5GtAdf07Gtz6GyJr26XD5OyafFBFNH7A4qGOlY4.png" alt="">
                <p>كتاب البحث القانوني</p>
              </div>
              <div class="child">
                <img src="./images/ee9230_d6401d00444656-9750-45C9-A2EE-A37D1C6EA350.png" alt="">
                <p> كتاب ادارة الاعمال</p>
              </div>


           </div>



      </div>
    
    `

}




 function formBook() {

    document.querySelector('.root').innerHTML=` 


    <form class="vh-100 d-flex justify-content-center align-items-center p-5 formBook "  >  
    
    <div class="px-5 py-2 w-75" > 
    
        <label for="bookName">Add book name</label>
        <input type="text"  id="bookName" placeholder="bookName" class="form-control mt-2 bookName" >
    
    
    </div>
    
    <div class="px-5 py-2 w-75" > 
    
    <label for="bookAuthor">Add book author</label>
    <input type="text"  id="bookAuthor" placeholder="bookAuthor" class="form-control mt-2 bookAuthor" >
    
    
    </div>
    <div class="px-5 py-2 w-75" > 
    
    <label for="sheetsNumberOfTheBook">Add sheets number of the book</label>
    <input type="text"  id="sheetsNumberOfTheBook" placeholder="sheets number of the book" class="form-control mt-2 sheetsNumberOfTheBook" >
    
    
    </div>
    <div class="px-5 py-2 w-75" > 
    
    <label for="bookImage">Add book image address  </label>
    <input type="text"  id="bookImage" placeholder="bookImage" class="form-control mt-2 bookImage" >
    
    
    </div>
    <div class="px-5 py-2 w-75" > 
    
    <label for="bookPrice">Add book Price  </label>
    <input type="number"  id="bookPrice" placeholder="bookPrice" class="form-control mt-2 bookPrice" >
    
    
    </div>
    
    
    
    <div class="px-5 mt-5 w-75" > 
    
    <div tyep="send" class="btn btn-info w-100 addYourBook " " onclick="formatingFormBook()" > Add your book  </div>
    
    
    </div>
    
    
    
    </form>
    
    
    `



 }


 function formatingFormBook () {
    let bookImage =null;

    let bookName  = document.querySelector('.formBook .bookName').value ;
    let bookAuthor= document.querySelector('.formBook .bookAuthor').value ;
    let sheetsNumberOfTheBook= document.querySelector('.formBook .sheetsNumberOfTheBook').value ;
     bookImage = document.querySelector('.formBook .bookImage').value ;
    let bookPrice = document.querySelector('.formBook .bookPrice').value ;

    let addYourBook=document.querySelector('.addYourBook');

    let bookDetails={

        bookName,
        bookAuthor,
        sheetsNumberOfTheBook,
        bookImage,
        bookPrice

    }

    if(bookName.length==0) {
    
        window.alert('bookName input is requird ')
         
        }
        else if(bookAuthor.length==0) {
        
            window.alert('bookAuthor input is requird')
             
            }
        else if(sheetsNumberOfTheBook.length==0) {
        
        window.alert('sheetsNumberOfTheBook input is requird')
         
        }
      
      
     
        
        else {
           
    
            allBooks.push(bookDetails)
            const stringifiedBooks = JSON.stringify(allBooks);
            localStorage.setItem('allBooks',stringifiedBooks)

            addYourBook.innerText='success added'
            addYourBook.classList.remove('bg-info')
            addYourBook.classList.add('bg-success')
            setTimeout( ()=>{ 
                addYourBook.classList.remove('bg-success')
                addYourBook.classList.add('bg-info')
              document.body.innerHTML=logedCode
              if (window.innerWidth < 820) {
 
                document.querySelector('.nav-signed').classList.add('d-none')
                document.querySelector('.navToggle').classList.remove('d-none')
                document.querySelector('.navToggle').classList.add('d-flex')
        
              } else {
        
                document.querySelector('.nav-signed').classList.remove('d-none')
                document.querySelector('.navToggle').classList.add('d-none')
                document.querySelector('.navToggle').classList.remove('d-flex')
              }
              changeFont ()
                
            },1000 )

         
        }
    
    

 }

 function displayAllBooks() {
   

   if(localStorage.getItem('allBooks')){
    const stringifiedBooks = localStorage.getItem('allBooks');
    allBooks= JSON.parse(stringifiedBooks);

   }
   else {

    allBooks=[]
   }

    if(allBooks.length==0) {
        document.querySelector('.root').innerHTML=`
        
        <div class="vh-100 d-flex justify-content-center align-items-center ">

        <h3> there are not any books for buying </h3>
        </div>
        
        `

    }
 
  
else {


    document.querySelector('.root').innerHTML=` 

    <div class='overflow-auto ' >
    
    <div class="container pt-5 bg-white " style="margin-top:110px ;"  >
 
    <div class="row w-100">
 
   ${ allBooks.map( (book,index)=>{
 
 return `
 
         <div class="col-lg-3 col-md-4 col-sm-6 mb-5 ">
 
             <div class="innerBook   ">
     
             <img class="w-100 rounded-3 " height="200px" src="${book.bookImage?book.bookImage:'https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2t8ZW58MHx8MHx8fDA%3D'}" alt="">
             <div class="d-flex align-items-start flex-column">
             <h3 cla ss="mt-2"   >${book.bookName} <span class="ms-5 h6 " > ${book.bookPrice}EGT</span></h3>

             <div onclick="displayDetailsLayr(${index})" class="btn btn-info "> click here to more details </div>
             <div data-id=${index} class=" detailsBook d-none "  >

             <div class="container pt-5  position-relative">

             <div class="row">
         
                 <div class="col-lg-6 col-md-12">
             
                     <div class="innerColLeyear">
             
                         <div class="d-flex justify-content-center align-items-center flex-column " >
                         <h4>Book image :</h4>
                    <img class="w-100 rounded-3 " height="400px" src="${book.bookImage?book.bookImage:'https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2t8ZW58MHx8MHx8fDA%3D'}" alt="">

                         </div>
                     </div>
                 </div>
             
                 <div class="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
             
                     <div class="innerColLeyear d-flex justify-content-center align-items-center  ">
             
                         <div class="d-flex justify-content-center align-items-start flex-column  " >
                         <div onclick="hideDetailsLayr(${index})" class="btn btn-danger closeBTN "> Close </div>
                             <h3 cla ss="mt-2"   > Book name is : <span class="ms-3 text-dark " >${book.bookName}</span> </h3>
                             <h3 cla ss="mt-2 "  >Book Author is : <span class="ms-3 text-dark " >${book.bookAuthor}</span></h3>
                             <h3 cla ss="mt-2"   > Sheets number Of the book :<span class="ms-3 text-dark " >${book.sheetsNumberOfTheBook}</span> </h3>
                             <h3> Book price is : <span class="ms-3 text-dark " >${book.bookPrice} </span> </h3>
                     
                             <div  class="btn btn-success w-100 ">Add to card</div>
                             <div  class="btn btn-warning mt-2 w-100   ">chating with me for buying <i class="fa-regular fa-comment-dots chatIcon "></i></div>
                         
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     
             </div>
             

             </div>

             </div>
         </div>
 
 `
 
 
     } ).join('')}
        
    </div>
 </div>
    
    </div>
 
 `
 
}


 }


 function displayDetailsLayr(index) {

    document.body.style.overflow = 'hidden'; 
 const allElements= document.querySelectorAll('.detailsBook')

 allElements[index].classList.remove('d-none')
 allElements[index].classList.add('overflow-auto')



 }

  function hideDetailsLayr(index) {
    document.body.style.overflow = 'visible';

    const allElements= document.querySelectorAll('.detailsBook')

    allElements[index].classList.add('d-none')

  }