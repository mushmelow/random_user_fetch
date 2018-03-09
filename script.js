function myFunction(){
	var url = "https://randomuser.me/api"
	fetch(url)
	.then(function(data){
	  if(!data.ok){
	    throw Error("something went wrong");
	  }
	  return data;
	})
	.then(function(data){
		return data.json();
	})
	.then(function(data){
	    //console.log(data.results[0].login.username)
	    document.getElementById("fullname").innerHTML = data.results[0].name.first + " " + data.results[0].name.last
	    document.getElementById("avatar").src = data.results[0].picture.large
	    document.getElementById("username").innerHTML = data.results[0].login.username
	    document.getElementById("email").innerHTML = data.results[0].email
	    document.getElementById("city").innerHTML = data.results[0].location.city
	})
	.catch(function(error){
	   console.log(error)
	})
}