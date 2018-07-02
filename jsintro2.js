<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<script>
	function magic_multiply(x, y){
		if(x>0&&y>0){
			x=x*y
		}else if(x==0&&y==0){
			x ='All Inputs 0'
		}else if(x.constructor === Array){
			for(let i=0; i<x.length;i++){
				x[i]=x[i]*y
			}
		}else if(y.constructor === String){
			x='Error: Can not multiply string'	
		}else if(x.constructor === String){
			z=x
			for(let i=1;i<y;i++){
				x=x+z
			}	
		}
		return x;
	}
	</script>
</body>
</html>