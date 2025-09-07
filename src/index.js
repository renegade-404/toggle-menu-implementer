import './styles.css';

function implementToggleMenu (button, menu) {
  const openOrClose = () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute('aria-expanded', String(!isExpanded));
    menu.hidden = isExpanded;
    menu.ariaHidden = isExpanded;
  }

  button.addEventListener("click", openOrClose);
}
const toggleButtons = document.querySelectorAll('[aria-haspopup]');

toggleButtons.forEach(button => {
  const menu = button.parentElement.lastElementChild;
  implementToggleMenu(button, menu);
})
