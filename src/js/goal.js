export default () => {
  document
    .querySelector(".header__center-text")
    .addEventListener("click", () => {
      ym(61473721, "reachGoal", "ClickInstagram");
      gtag("event", "send", {
        event_category: "Btn",
        event_action: "Click",
        event_label: "ClickInstagram",
      });
    });

  document
    .querySelector(".contacts__instagram")
    .addEventListener("click", () => {
      ym(61473721, "reachGoal", "ClickInstagram");
      gtag("event", "send", {
        event_category: "Btn",
        event_action: "Click",
        event_label: "ClickInstagram",
      });
    });

  document.querySelectorAll(".header__phone").forEach((el) => {
    el.addEventListener("click", () => {
      ym(61473721, "reachGoal", "ClickTel");
      gtag("event", "send", {
        event_category: "Btn",
        event_action: "Click",
        event_label: "ClickTel",
      });
    });
  });

  document.querySelector(".header__btn").addEventListener("click", () => {
    ym(61473721, "reachGoal", "ClickCalculation");
    gtag("event", "send", {
      event_category: "Btn",
      event_action: "Click",
      event_label: "ClickCalculation",
    });
  });

  document.querySelector(".format__right-btn").addEventListener("click", () => {
    ym(61473721, "reachGoal", "ClickCalculation");
    gtag("event", "send", {
      event_category: "Btn",
      event_action: "Click",
      event_label: "ClickCalculation",
    });
  });

  document.querySelector(".btn-transparent").addEventListener("click", () => {
    ym(61473721, "reachGoal", "ClickPrice");
    gtag("event", "send", {
      event_category: "Btn",
      event_action: "Click",
      event_label: "ClickPrice",
    });
  });

  document.querySelector(".format__left-btn").addEventListener("click", () => {
    ym(61473721, "reachGoal", "ClickPrice");
    gtag("event", "send", {
      event_category: "Btn",
      event_action: "Click",
      event_label: "ClickPrice",
    });
  });

  document.querySelector(".contacts__mail").addEventListener("click", () => {
    ym(61473721, "reachGoal", "ClickEmail");
    gtag("event", "send", {
      event_category: "Btn",
      event_action: "Click",
      event_label: "ClickEmail",
    });
  });
};
