<!-- # Bugs 


 ### AuthSlice 
Auth slice on logout function  is getting rejected and a temporary fix is to make state of user null with rejected state.
<br>
But the token is still stored in localstorage of browser. So if the tab or server reloads the user is login again. 

#### Code of the bug 

line 72 - 75 of authSlice.js

    .addCase(logout.rejected, (state) =>{
      state.user = null
    }) 
    
Fixed logout module not exported -->