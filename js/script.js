// the twentytwenty effect apply
$(document).ready(function() {
    $(".sliderImages").twentytwenty();
});

$("#companySelect").change(function(){
    var num = $(this).children("option:selected").val();
    if (num == 1) {
        $("#img1").attr("src", "images/apple/apple1.jpg");
        $("#img2").attr("src", "images/apple/apple2.jpg");
    } else if (num == 2) {
        $("#img1").attr("src", "images/samsung/samsung1.jpg");
        $("#img2").attr("src", "images/samsung/samsung2.jpg");
    } else if (num == 3) {
        $("#img1").attr("src", "images/google/google1.jpg");
        $("#img2").attr("src", "images/google/google2.png");
    } else if (num == 4) {
        $("#img1").attr("src", "images/microsoft/microsoft1.jpg");
        $("#img2").attr("src", "images/microsoft/microsoft2.jpg");
    } else if (num == 5) {
        $("#img1").attr("src", "images/intel/intel1.jpg");
        $("#img2").attr("src", "images/intel/intel2.jpg");
    } else if (num == 6) {
        $("#img1").attr("src", "images/ibm/ibm1.jpg");
        $("#img2").attr("src", "images/ibm/ibm2.jpg");
    } else if (num == 7) {
        $("#img1").attr("src", "images/dell/dell1.jpg");
        $("#img2").attr("src", "images/dell/dell2.jpg");
    } else if (num == 8) {
        $("#img1").attr("src", "images/hp/hp1.jpg");
        $("#img2").attr("src", "images/hp/hp2.jpg");
    } else if (num == 9) {
        $("#img1").attr("src", "images/sony/sony1.jpg");
        $("#img2").attr("src", "images/sony/sony2.jpg");
    } else if (num == 10) {
        $("#img1").attr("src", "images/lenovo/lenovo1.jpg");
        $("#img2").attr("src", "images/lenovo/lenovo2.jpg");
    } else if (num == 11) {
        $("#img1").attr("src", "images/amazon/amazon1.jpg");
        $("#img2").attr("src", "images/amazon/amazon2.jpg");
    } else if (num == 12) {
        $("#img1").attr("src", "images/flipkart/flipkart1.jpg");
        $("#img2").attr("src", "images/flipkart/flipkart2.jpg");
    } else if (num == 13) {
        $("#img1").attr("src", "images/facebook/facebook1.jpg");
        $("#img2").attr("src", "images/facebook/facebook2.jpg");
    } else if (num == 14) {
        $("#img1").attr("src", "images/instagram/instagram1.jpg");
        $("#img2").attr("src", "images/instagram/instagram2.jpg");
    } else if (num == 15) {
        $("#img1").attr("src", "images/twitter/twitter1.jpg");
        $("#img2").attr("src", "images/twitter/twitter2.jpg");
    } else {
        $("#img1").attr("src", "images/apple1.jpg");
        $("#img2").attr("src", "images/apple2.jpg");
    }

});