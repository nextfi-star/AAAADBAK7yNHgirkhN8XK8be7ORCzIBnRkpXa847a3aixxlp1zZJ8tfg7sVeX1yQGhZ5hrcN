export const scrollHeader = () => {
  const header = document.getElementById("header");
  const handleScroll = () => {
    const yPosition = window.scrollY;

    if (yPosition > 1) {
      header?.classList.add("box-shadow");
    } else {
      header?.classList.remove("box-shadow");
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
};
