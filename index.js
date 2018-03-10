$("button").click(function(){
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	var payload = {'firstname' : fname, 'lastname' : lname};
	console.log(payload);
    $.post("http://localhost:5000/submit-data",payload, function(data, status){
        console.log("Done : " + data);
    });
});
