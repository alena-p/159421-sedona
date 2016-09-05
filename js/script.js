var formOpenLink = document.querySelector(".search__form-open");
var form = document.querySelector(".search-form");
var formField = form.querySelectorAll(".search-form__input");
var formLabel = form.querySelectorAll(".search-form__label");
var adultField = form.querySelector("#adult-field");
var kidsField = form.querySelector("#kids-field");
var storageAdult = localStorage.getItem("adultCount");
var storageKids = localStorage.getItem("kidsCount");

formOpenLink.addEventListener("click", function(event) {
  event.preventDefault();
  if(form.classList.contains("search-form_show")) {
    form.classList.remove("search-form_show");
    form.classList.add("search-form_hide");
  } else {
    form.classList.add("search-form_show");
    form.classList.remove("search-form_hide");
  }
  if ( storageAdult ) {
    adultField.value = storageAdult;
  };
  if ( storageKids ) {
    kidsField.value = storageKids;
  };
});

window.addEventListener("keydown", function(event) {
  if(event.keyCode === 27) {
     if(form.classList.contains("search-form_show")) {
      form.classList.remove("search-form_show");
      form.classList.add("search-form_hide");
    }
  }
});

form.addEventListener("submit", function(event) {
  for (var i = 0 ; i < formField.length ; i++) {
    if (!formField[i].value) {
      event.preventDefault();
      formLabel[i].classList.add("search-form__label_error");
    } else {
      localStorage.setItem("adultCount", adultField.value);
      localStorage.setItem("kidsCount", kidsField.value);
    }
  }
});

formField[0].addEventListener("blur", function() {
  if( !this.value ) {
    formLabel[0].classList.add("search-form__label_error");
  } else {
    formLabel[0].classList.remove("search-form__label_error");
  }
});

formField[1].addEventListener("blur", function() {
  if( !this.value ) {
    formLabel[1].classList.add("search-form__label_error");
  } else {
    formLabel[1].classList.remove("search-form__label_error");
  }
});

formField[2].addEventListener("blur", function() {
  if( !this.value ) {
    formLabel[2].classList.add("search-form__label_error");
  } else {
    formLabel[2].classList.remove("search-form__label_error");
  }
});

formField[3].addEventListener("blur", function() {
  if( !this.value ) {
    formLabel[3].classList.add("search-form__label_error");
  } else {
    formLabel[3].classList.remove("search-form__label_error");
  }
});

