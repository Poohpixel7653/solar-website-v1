const scrollToComponent = (id) => {
    const node = document.getElementById(id);
  
    if (node) {
      node.scrollIntoView({ offset: { top: 150, left: 0 } })
    }
  };
  
  export default scrollToComponent;