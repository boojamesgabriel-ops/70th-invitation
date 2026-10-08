const envelopeScreen = document.querySelector(".envelope-screen");
const openButton = document.querySelector("#openEnvelope");
const invitationCard = document.querySelector("#invitationCard");

if (envelopeScreen && openButton && invitationCard) {
  openButton.addEventListener("click", () => {
    if (envelopeScreen.classList.contains("is-opening")) return;

    envelopeScreen.classList.add("is-opening");
    openButton.disabled = true;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.setTimeout(() => {
      invitationCard.classList.add("is-visible");
      invitationCard.setAttribute("aria-hidden", "false");
    }, reducedMotion ? 0 : 850);
  });
}
