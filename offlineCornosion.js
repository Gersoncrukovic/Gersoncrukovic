Capture & Store GCLID in a cookie

- Place javascript code on every page, at bottom before </body>
<script type="text/javascript">
function setCookie(name, value, days){
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000)); 
    var expires = "; expires=" + date.toGMTString();
    document.cookie = name + "=" + value + expires + ";path=/";
}
function getParam(p){
    var match = RegExp('[?&]' + p + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
var gclid = getParam('gclid');
if(gclid){
    var gclsrc = getParam('gclsrc');
    if(!gclsrc || gclsrc.indexOf('aw') !== -1){
	    setCookie('gclid', gclid, 90);
	}
}
</script>

-------------------------------------------------------------------------------------
Create hidden field in lead form for GCLID
- retrieve GCLID value from cookie & update the value of the hidden form field

Insert the highlighted <input> tag in between your <form> tags.:
  <form action="" name="myForm"> 		
         Name: <input type="text" name="name"> 		
         <input type="hidden" id="gclid_field" name="gclid_field" value=""> 	 	
         <input type="submit" value="Submit Form" name="btnSubmit"> 	
   </form>



-------------------------------------------------------------------------------------

Insert before the closing </body> tag, and after GCLID collection. 
<script> 
  function readCookie(name) { 
  var n = name + "="; 
  var cookie = document.cookie.split(';'); 
  for(var i=0;i < cookie.length;i++) {      
      var c = cookie[i];      
      while (c.charAt(0)==' '){c = c.substring(1,c.length);}      
      if (c.indexOf(n) == 0){return c.substring(n.length,c.length);} 
  } 
  return null; 
  } 

  window.onload = function() {      
      document.getElementById('gclid_field').value = 
  readCookie('gclid'); 
  } 
  </script>
