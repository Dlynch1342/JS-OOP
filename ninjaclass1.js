<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script>
        function NotANinja(name){
            this.name = name;
        }
        function Ninja(name){
            this.name = name;
            this.health = 100;
            var speed = 3;
            var strength = 3;
            // this.sayName = function(){
            //     console.log("Hola my ninja name is "+this.name);
            // }
            this.showStats = function(){
                console.log("Health: "+this.health+", Speed: "+speed+", Strength: "+strength);
                return this;
            }
            this.drinkSake = function(){
                this.health += 10;
                return this;
            }
            this.kick = function(kicked){
                if(kicked instanceof Ninja){
                kicked.health = kicked.health - (strength * 15);
                console.log(kicked.name+" was kicked by "+ this.name + " and lost "+(strength * 15)+" Health!")
                return this;
                }
                else{console.log("Thanks not a kicking ninja!")}
            }
        }
        Ninja.prototype.sayName = function(){
            console.log("Yo I'm",this.name);
            return this;
        }
        Ninja.prototype.punch = function(punched){
            if(punched instanceof Ninja){
                punched.health -= 5;
                console.log(punched.name+" was punched by "+ this.name + " and lost 5 Health!")
                return this;
            }
            else{
                console.log("That's not a ninja!")
            }
        }
        // Ninja.prototype.kick = function(kicked){
        //     kicked.health = kicked.health - (this.strength * 15);
        //     return this;
        // }
        
        var ninja1 = new Ninja("Hyabusa");
        ninja1.sayName();
        // -> "My ninja name is Hyabusa!"
        ninja1.showStats();
        ninja1.health = 333;  //can't do it
        // -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
        ninja1.drinkSake().showStats().drinkSake().showStats();
        ninja1.name = "tom";
        ninja1.sayName();
        var blue_ninja = new Ninja("Goemon");
        var red_ninja = new Ninja("Bill Gates");
        red_ninja.punch(blue_ninja).showStats();
        blue_ninja.showStats();
        red_ninja.kick(blue_ninja).showStats();
        blue_ninja.showStats();
        var notNinja1 = new NotANinja("Frank");
        red_ninja.punch(notNinja1);
        red_ninja.kick(notNinja1);
    </script>
</head>
<body>
    
</body>
</html>
