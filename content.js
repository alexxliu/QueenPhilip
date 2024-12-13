const pilip = chrome.runtime.getURL("pilip.png");

function replaceQueenIcons() {

  const queenIcons = document.querySelectorAll("svg.queens-icon-svg");
  console.log(`Found ${queenIcons.length} queen icons to replace.`);
  
  queenIcons.forEach((svg) => {
    if (!svg.dataset.replaced) {
      const philipImg = document.createElement("img");
      philipImg.src = pilip;
      philipImg.alt = "Philip";
      philipImg.style.width = `${svg.getAttribute("width")}px`;
      philipImg.style.height = `${svg.getAttribute("height")}px`;

      if (!philipImg.src) {
        console.error("Failed to set image source for Philip.");
      } else {
        console.log(`Replacing queen icon with image: ${philipImg.src}`);
      }

      try {
        svg.replaceWith(philipImg);
        philipImg.dataset.replaced = "true";
      } catch (error) {
        console.error("Error replacing queen icon:", error);
      }
    }
  });
}

const observer = new MutationObserver(() => {
    replaceQueenIcons();
});

observer.observe(document.body, {
    childList: true,
    subtree: true,
});

replaceQueenIcons();