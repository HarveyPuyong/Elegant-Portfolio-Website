function updateFooterHeight() {
  const screenHeight =  window.innerHeight;
  console.log(screenHeight);
  const footer = document.querySelector('footer').style.height = `${screenHeight}px`;  
}

updateFooterHeight();
window.addEventListener('resize', updateFooterHeight);