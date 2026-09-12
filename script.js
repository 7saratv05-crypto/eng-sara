
const languageBtn = document.getElementById("languageBtn");

let currentLanguage = "en";

languageBtn.addEventListener("click", function () {

  if (currentLanguage === "en") {

    currentLanguage = "ar";

    document.documentElement.lang = "ar";
    document.body.dir = "rtl";

    languageBtn.textContent = "English";

  } else {

    currentLanguage = "en";

    document.documentElement.lang = "en";
    document.body.dir = "ltr";

    languageBtn.textContent = "العربية";
  }

  const elements = document.querySelectorAll("[data-en]");

  elements.forEach(function (element) {

    if (currentLanguage === "ar") {

      element.textContent = element.getAttribute("data-ar");

    } else {

      element.textContent = element.getAttribute("data-en");

    }

  });

});