const menuIcon = document.getElementById("responsive-menu");
  const panel = document.getElementById("responsive-panel");
  const menuItems = document.querySelectorAll("#mobile-menu-items li");

  let menuOpen = false;

  menuIcon.addEventListener("click", () => {
    if(menuOpen){
      // Close menu
      gsap.to(panel, {maxHeight: 0, duration: 0.5, ease: "power2.inOut"});
      gsap.to(menuItems, {opacity: 0, y: 20, duration: 0.3, stagger: 0.05});
      menuOpen = false;
    } else {
      // Open menu
      gsap.set(panel, {maxHeight: panel.scrollHeight});
      gsap.fromTo(menuItems, 
        {opacity: 0, y: 20}, 
        {opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out"}
      );
      menuOpen = true;
    }
  });