import { useEffect } from "react";

const ZohoScripts = () => {
  useEffect(() => {
    // Validation Script
    const validationScript = document.createElement("script");
    validationScript.innerHTML = `
      function validateEmail6925095000000684092 () {
        var form = document.forms['WebToLeads6925095000000684092'];
        var emailFld = form.querySelectorAll('[ftype=email]');
        var i;
        for (i = 0; i < emailFld.length; i++) {
          var emailVal = emailFld[i].value;
          if ((emailVal.replace(/^\\s+|\\s+$/g,'' )).length != 0) {
            var atpos = emailVal.indexOf('@');
            var dotpos = emailVal.lastIndexOf('.');
            if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
              alert('Please enter a valid email address.');
              emailFld[i].focus();
              return false;
            }
          }
        }
        return true;
      }
      function checkMandatory6925095000000684092 () {
        var mndFileds = ['Company', 'Last Name', 'Email', 'Description', 'LEADCF3'];
        var fldLangVal = ['Company', 'Your Name', 'Email', 'Your Message', 'Service Required'];
        for (var i = 0; i < mndFileds.length; i++) {
          var fieldObj = document.forms['WebToLeads6925095000000684092'][mndFileds[i]];
          if (fieldObj) {
            if (((fieldObj.value).replace(/^\\s+|\\s+$/g,'' )).length == 0) {
              if (fieldObj.type == 'file') {
                alert('Please select a file to upload.');
                fieldObj.focus();
                return false;
              }
              alert(fldLangVal[i] + ' cannot be empty.');
              fieldObj.focus();
              return false;
            }
            if (fieldObj.nodeName == 'SELECT' && fieldObj.options[fieldObj.selectedIndex].value == '-None-') {
              alert(fldLangVal[i] + ' cannot be none.');
              fieldObj.focus();
              return false;
            }
            if (fieldObj.type == 'checkbox' && fieldObj.checked == false) {
              alert('Please accept ' + fldLangVal[i]);
              fieldObj.focus();
              return false;
            }
          }
        }
        return validateEmail6925095000000684092();
      }
    `;
    document.body.appendChild(validationScript);

    // Analytics Script
    const analyticsScript = document.createElement("script");
    analyticsScript.src =
      "https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=22c300072c308785edac1fb6440f4685ff25cc3032a947b488e8248767737e828a2a6fc08b61a10fbdc163a75a3f7ba6gid3e096d1e3826aec627497eaf4f8588e887abb384c20e655fb98210525e8e5f8egid04845a7b49b6da94e8cc3ba800838de9ae1041e16a4ba9f10338a7f610cf173cgid9aa33048b4c73d92b137adefcf8110cb313533376aa755f7aec926faa0a91a92&tw=78cfc503226719a89e2027fcc295ff057a370e48a7b55fbecc6cdb0817018cdf";
    analyticsScript.async = true;
    document.body.appendChild(analyticsScript);

    return () => {
      document.body.removeChild(validationScript);
      document.body.removeChild(analyticsScript);
    };
  }, []);

  return null;
};

export default ZohoScripts;
