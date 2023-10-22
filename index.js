var v;
var t = -1;
var numberPattern = /^-?\d+\.?\d*$/;

$(document).keypress(function(event){
    console.log(event.key);
    if(event.key == "Enter"){
        $(".push").click();
    }
});

$(".push").click(function(){
    v = $("input").val();
    if(v != "" && numberPattern.test(v)){
        if(t <= 7){
            $("input").val("");
            var stack_value = $(".stack").html();
            $(".stack").html("<div class=\"elem\">"+v+"</div>"+stack_value);
            t++;
            $(".top").text("Top = "+t);
        }
        else{
            $("input").val("");
            alert("Stack Overflow");
        }
    }
    else{
        $("input").val("");
        alert("Enter valid input");
    }
});



$(".pop").click(function(){
    if(t >= 0){
        var originalString = $(".stack").html();
        var targetString = "</div>";

        var firstIndex = originalString.indexOf(targetString);
        console.log(firstIndex);
        var newString = originalString.substring(firstIndex+6);
        $(".stack").html(newString);
        t--;
        $(".top").text("Top = "+t);
    }
    else{
        alert("Stack Underflow");
    }
});

