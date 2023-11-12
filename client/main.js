const step = 100;
const counters = document.querySelectorAll(".counter");
async function getCount(name) {
  switch (name) {
    case "youtube":
      // make api call
      return 30000;
    case "twitter":
      return 12000;
    case "instagram":
      return 9000;
  }
}
function loadValue(element, value) {
  const increment = value / step;
  function updateCounter() {
    const c = +element.innerText;
    if (c < value) {
      element.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      element.innerText = value;
    }
  }
  updateCounter();
}
function loadCounter() {
  Array.from(counters || []).forEach(async (counter) => {
    const name = counter.getAttribute("name");
    counter.innerHTML = 0;
    const count = await getCount(name);
    loadValue(counter, count);
  });
}
loadCounter();
