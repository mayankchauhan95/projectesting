$(function(){
    var $orders = $('#orders');
    var $name = $('#name');
    var $trailer= $('#trailer');
    $.ajax({
        type:'GET',
        url:'/api/orders',
        success:function(orders){
            $.each(orders, function(i, order){
                $orders.append('<li>name:'+ order.name+', trailer: ' + order.trailer+'</li>');
            });
        },
        error:function(){
            alert('error laoding trailers');
        }
    });
    $('#add-order').on('click', function(){
        var order={
            name=$name.val(),
            trailer:$trailer.val(),
            
        };
        
    $.ajax({
        type:'POST',
        url:'/api/orders',
        date:order,
        success:function(newOrder){
            $orders.append('<li>name:' + newOrer.name + ', trailer:' + newOrder.trailer+ '</li>');
            
        },
    error:function(){
        alert('error saving page');
    
    }
    });
        
        
        
        
        
        
        
        
        
        
        
    })
    });
});
    
    
    
    
});