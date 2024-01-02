export function loadClarityTag() {
    (window.clarity = window.clarity || function () {
      (window.clarity.q = window.clarity.q || []).push(arguments);
    });
  
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.clarity.ms/tag/kfjp1s3qg3";
  
    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  }