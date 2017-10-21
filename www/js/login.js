function check(form)/*function to check userid & password*/
{
 /*the following code checkes whether the entered userid and password are matching*/
 if(form.userid.value == "admin" && form.pswrd.value == "admin")
  {
    window.open('book1.html')
  }
 else
 {
   alert("Error Password or Username")
  }
}