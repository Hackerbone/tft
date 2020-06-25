//main-file js code
$(document).ready(function () {
    $("#a-open").click(function () {
        $("#removeclass").removeClass("open");
        $("#navbar").removeClass("not-clicked");
        $("#navbar").addClass("clicked");
        $("#addclass").addClass("close");
        $("#dropdown").removeClass("dropdown");
    });

    $("#a-close").click(function () {
        $("#dropdown").addClass("dropdown");
        $("#removeclass").addClass("open");
        $("#addclass").removeClass("close");
        $("#navbar").addClass("not-clicked");
        $("#navbar").removeClass("clicked");
    });
    
});


