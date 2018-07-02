<!DOCTYPE html>
<html>
	<head>
		<title></title>
	</head>
	<body>
		<h1>Students</h1>
		<ul id="main">
	    </ul>
		<script>
			function appendList(array, id){
				for(let i=0;i<array.length;i++){
					let student = document.createElement("li");					
					student.innerHTML=array[i];
					document.getElementById(id).appendChild(student);
				}
    		};
		    let students = ["Jeff", "Jenny", "Javier", "Joslyn", "Joe", "Jane", "Django"];
		    let target_id = "main";
		    appendList(students, target_id);
		</script>  
	</body>
</html>