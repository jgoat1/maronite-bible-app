const verses = [
  { text: "The Lord is my shepherd; I shall not want.", ref: "Psalm 23:1" },
  { text: "Create in me a clean heart, O God.", ref: "Psalm 51:10" },
  { text: "I can do all things through Christ.", ref: "Philippians 4:13" }
];

function getRandomVerse() {
  const v = verses[Math.floor(Math.random() * verses.length)];
  document.getElementById("verseText").innerText = v.text;
  document.getElementById("verseRef").innerText = v.ref;
}

function getTopicVerse() {
  let topic = prompt("Enter topic (hope, strength, faith):");

  if (!topic) return;

  topic = topic.toLowerCase();

  if (topic.includes("hope")) {
    document.getElementById("verseText").innerText =
      "Be strong and take heart, all you who hope in the Lord.";
    document.getElementById("verseRef").innerText = "Psalm 31:24";
  } else if (topic.includes("strength")) {
    document.getElementById("verseText").innerText =
      "The Lord gives strength to his people.";
    document.getElementById("verseRef").innerText = "Psalm 29:11";
  } else {
    getRandomVerse();
  }
}

function addGoal() {
  const input = document.getElementById("goalInput");
  const list = document.getElementById("goalList");

  if (input.value === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;
  list.appendChild(li);

  input.value = "";
}
