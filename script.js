function addTrip() {
  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;

  if (title === "" || date === "") {
    alert("여행 제목과 날짜를 입력하세요.");
    return;
  }

  const list = document.getElementById("tripList");
  const item = document.createElement("li");
  item.textContent = `${title} (${date})`;

  list.appendChild(item);

  document.getElementById("title").value = "";
  document.getElementById("date").value = "";
}
