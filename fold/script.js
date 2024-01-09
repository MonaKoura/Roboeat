<script>
        $(document).ready(function(){
            $('.like-btn').click(function(e){
                e.preventDefault();
               
                if($(this).hasClass('like'))
                {
                    $(this).removeClass('like');
                    $(this).addClass('dislike');
                    $(this).html('Dislike');
                }
                else
                {
                    $(this).removeClass('dislike');
                    $(this).addClass('like');
                    $(this).html('Like');
                }
            });
        });
        
    </script>
var btn1 = document.querySelector('#green');
var btn2 = document.querySelector('#red');

btn1.addEventListener('click', function() {
  
    if (btn2.classList.contains('red')) {
      btn2.classList.remove('red');
    } 
  this.classList.toggle('green');
  
});

btn2.addEventListener('click', function() {
  
    if (btn1.classList.contains('green')) {
      btn1.classList.remove('green');
    } 
  this.classList.toggle('red');
  
});

