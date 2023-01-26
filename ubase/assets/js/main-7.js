var element = document.getElementById('js-phone-number'),
    phoneHideCall = document.getElementById('js-phone-number-hide-call'),
    phoneHideTest = document.getElementById('js-phone-number-hide-test'),
    inpMobileCall = document.getElementById('mobile-call')

var maskOptions = {
  mask: '+ {000} (00) 000-00-00',
  lazy: false
};

var mask = IMask(element, maskOptions)
var maskPhoneHideCall = IMask(phoneHideCall, maskOptions)
var maskPhoneHideTest = IMask(phoneHideTest, maskOptions)
var maskMobileCall = IMask(inpMobileCall, maskOptions)