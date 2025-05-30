
function setLanguage(lang) {
  document.querySelectorAll('[data-zh]').forEach(el => {
    el.innerText = el.getAttribute(`data-${lang}`);
  });
}
