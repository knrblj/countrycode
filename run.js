function run()
{
  var code=document.getElementById('code').value;
	var xhp=new XMLHttpRequest();
  var url="https://restcountries.com/v2/callingcode/"+code;
  xhp.open("GET",url);
  xhp.send();
  xhp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var jsonval=JSON.parse(xhp.response);
      document.getElementById("country").innerHTML="<p>Country Name : "+jsonval[0].name+"</p>";
      document.getElementById("captial").innerHTML="<p>Captail city : "+jsonval[0].capital+"<p>";
      document.getElementById("flag").innerHTML="<img  src='"+jsonval[0].flag+ "' width='500px' height='500px'>";
    }
    else
    {
      document.getElementById("country").innerHTML="<p> Country Not exists</p>";
      document.getElementById("captial").innerHTML=null;
      document.getElementById("flag").innerHTML=null;
    }
};
  return false;
}

