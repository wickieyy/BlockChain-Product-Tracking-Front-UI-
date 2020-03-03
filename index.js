function generateBarcode(){
    var count = document.getElementById("packageCount").value;
    var prefix = document.getElementById("barcodePrefix").value;
    var suffix = document.getElementById("barcodeSuffix").value;
    $("#addBarcodeForm").hide();
    $("#addPackageBarcodeList").css("display","block");
    var barcodeDiv = document.getElementById("addPackageBarcodeList");
    for(var i=1;i<=count;i++){
        barcodeDiv.innerHTML+="<svg id='barcode"+i+"'style='margin:10px'></svg>";
        JsBarcode("#barcode"+i, prefix+"000"+i+suffix);
    }
}
function openPackageForm(){
    $("#addBarcodeForm").slideUp();
    $("#addPackageForm").slideDown();
}
function print(){
    window.print();
}
function openGenerateBarcodeForm(){
    $("#addPackageForm").slideUp();
    $("#addBarcodeForm").slideDown();
}

/* Binding Events starts*/
jQuery(document).ready(function() { 
    jQuery('#productsList').click(function(){
        getProductsResponse();
    });
    jQuery('#participantsList').click(function(){
        getCustomerResponse();
    });
    jQuery('#moveProduct').click(function(){
        getMoveProductResponse();
    });
});
/* Binding Events ends */


function getProductsResponse(){
    $.get("http://arun-pt3004:3000/api/Product", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
        jQuery('tempResultJsonResponse').html(data);
      });
}
function getCustomerResponse(){
    $.get("http://arun-pt3004:3000/api/Customer", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
        jQuery('tempResultJsonResponse').html(data);
      });
}
function getMoveProductResponse(){
    $.get("http://arun-pt3004:3000/api/MoveProduct", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
        jQuery('tempResultJsonResponse').html(data);
      });
}