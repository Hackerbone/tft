//main-file js code
$(document).ready(function () {
    $("#a-open").click(function () {
        $("#removeclass").removeClass("open");
        $("#navbar").removeClass("not-clicked");
        $("#navbar").addClass("clicked");
        $("#addclass").addClass("close");
        $("#dropdown").removeClass("dropdown");
        for(var i=0;i<7;i++){
            var hrt = "#hr" + i;
            $(hrt).addClass("hr");
        }
    });

    $("#a-close").click(function () {
        $("#dropdown").addClass("dropdown");
        $("#removeclass").addClass("open");
        $("#addclass").removeClass("close");
        $("#navbar").addClass("not-clicked");
        $("#navbar").removeClass("clicked");
        for (var i = 0; i < 7; i++) {
            var hrt = "#hr" + i;
            $(hrt).removeClass("hr");
        }
    });
    
});


