let index = 0;
const items = $('.work-item').length;

$(document).ready(function(){

    $('.work-item-inner').click(function(){
        index = $(this).parent(".work-item").index();
        $('.light-box').addClass('open');
        lightBoxSlideShow();
    });

    $('.light-box-control .prev').click(function(){
        if(index == 0){
            index = items-1;        }
            else{
                index--;
            }
            lightBoxSlideShow();
        
    })

    $('.light-box-control .next').click(function(){
        if(index==items-1){
            index = 0;
        }
        else{
            index++;
        }
        lightBoxSlideShow();

    })

    $('.close').click(function(){
        $('.light-box').removeClass('open');
    })

    $('.light-box').click(function(event){
        if($(event.target).hasClass('light-box')){
            $(this).removeClass('open')

        }
    })

    function lightBoxSlideShow(){
        const imgSrc = $('.work-item').eq(index).find('img').attr('data-target');
        const category = $('.work-item').eq(index).find('p').html();
        $('.light-box-img').attr('src', imgSrc);
        $('.light-box-category').html(category);
        $('.light-box-counter').html(items + "/" + (index+1));
    } 

    
})

$(document).ready(function(){
    $('.sidenav').sidenav({
        edge: 'right'
    });
  })

