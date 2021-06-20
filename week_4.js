function billingFunction() {
    if (document.getElementById("same").checked) {
        let shippingNameValue = document.getElementById("shippingName").value;
        let billingName = document.getElementById("billingName");
        billingName.value = shippingNameValue;
        let shippingZipValue = document.getElementById("shippingZip").value;
        let billingZip= document.getElementById("billingZip");
        billingZip.value=shippingZipValue;
    }
    else {
      document.getElementById("billingName").value="";
    document.getElementById("billingZip").value="";
    }
}