const scrollSmoothTo = (elementId) => {
  var element = document.getElementById(elementId);
  setTimeout(
    element.scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    }),30000
  )
  ;
}

export default scrollSmoothTo