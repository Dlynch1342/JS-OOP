$.get("https://api.github.com/users/(... user name)", displayName)
// Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)
function displayName(data) {
  console.log(data);
}



<html>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<style>
</style>
  <body>
    <button id="someButton" class=""><h1>Press it!</h1></button>
    <script>
      $(document).ready(function() {
        $(document).on('click', 'button', function() {
          $.get('https://api.github.com/users/Dlynch1342', function(res) {
            $('p').append(res.name);
          })
        })
      })
    </script>
    <p>

    </p>
    <!-- this is the code they were looking for -->
    <script>
      $(document).ready(
        function(){
          $('button').click(function(){
            $.get('https://api.github.com/users/Dlynch1342', displayName);
          });
        function displayName(data){
            if (data.name){
              $('body').append("<p>"+data.name+"</p>");
            }
          }
        }
      );
    </script>
  </body>
</html>