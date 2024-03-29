const countRound = {
  countPCWin: 0,
  countUserWin: 0,
};

// Текст Игра началась
const container = (document.querySelector(".result").textContent = "Игра началась, игра идет до 3ёх побед");

// Функция случайного выбора значения
function computerPlay() {
  let random = Math.floor(Math.random() * 3);
  switch (random) {
    case 0:
      return "камень";
    case 1:
      return "ножницы";
    case 2:
      return "бумага";
  }
}

function disabledButtons() {
  document.querySelector("#stone").disabled = true;
  document.querySelector("#scissors").disabled = true;
  document.querySelector("#paper").disabled = true;
}

function pcWinRoundPlusOne(pc, result) {
  pc.innerHTML = `Компьютер победил в раунде + 1 очко`;
  result.appendChild(pc);
  countRound.countPCWin++;
}

function playerWindRoundPlusOne(user, result) {
  user.innerHTML = `Игрок победил в раунде + 1 очко`;
  result.appendChild(user);
  countRound.countUserWin++;
}

// Реализация работы кнопки камень + Вывод результата
document.querySelector("#stone").addEventListener("click", (e) => {
  e.preventDefault();
  let user = e.target.name;
  let pc = computerPlay();

  const result = document.querySelector(".result");
  const newP = document.createElement("p");

  if (user === pc) {
    newP.innerHTML = `Ничья`;
    result.appendChild(newP, result);
  } else if (user === "камень" && pc === "бумага") {
    pcWinRoundPlusOne(newP, result);
    if (countRound.countPCWin === 3) {
      newP.innerHTML = `+ 1 очко и компьютер побеждает в игре`;
      result.appendChild(newP);
      disabledButtons();
      return;
    }
  } else if (user === "камень" && pc === "ножницы") {
    playerWindRoundPlusOne(newP, result);
    if (countRound.countUserWin === 3) {
      newP.innerHTML = `+ 1 очко и игрок побеждает в игре`;
      result.appendChild(newP);
      disabledButtons();
      return;
    }
  }
  computerPlay();
});

// Реализация работы кнопки бумага + Вывод результата
document.querySelector("#paper").addEventListener("click", (e) => {
  e.preventDefault();
  let user = e.target.name;
  let pc = computerPlay();

  const result = document.querySelector(".result");
  const newP = document.createElement("p");

  if (user === pc) {
    newP.innerHTML = `Ничья`;
    result.appendChild();
  } else if (user === "бумага" && pc === "камень") {
    playerWindRoundPlusOne(newP, result);
    if (countRound.countUserWin === 3) {
      newP.innerHTML = `+ 1 очко и игрок побеждает в игре`;
      result.appendChild(newP);
      disabledButtons();
      return;
    }
  } else if (user === "бумага" && pc === "ножницы") {
    pcWinRoundPlusOne(newP, result);
    if (countRound.countPCWin === 3) {
      newP.innerHTML = `+ 1 очко и компьютер побеждает в игре`;
      result.appendChild(newP);
      disabledButtons();
      return;
    }
  }
  computerPlay();
});

// Реализация работы кнопки ножницы + Вывод результата
document.querySelector("#scissors").addEventListener("click", (e) => {
  e.preventDefault();
  let user = e.target.name;
  let pc = computerPlay();

  const result = document.querySelector(".result");
  const newP = document.createElement("p");

  if (user === pc) {
    newP.innerHTML = `Ничья`;
    result.appendChild(newP);
  } else if (user === "ножницы" && pc === "бумага") {
    playerWindRoundPlusOne(newP, result);
    if (countRound.countUserWin === 3) {
      newP.innerHTML = `+ 1 очко и игрок побеждает в игре`;
      result.appendChild(newP);
      disabledButtons();
      return;
    }
  } else if (user === "ножницы" && pc === "камень") {
    pcWinRoundPlusOne(newP, result);
    if (countRound.countPCWin === 3) {
      newP.innerHTML = `+ 1 очко и компьютер побеждает в игре`;
      result.appendChild(newP);
      disabledButtons();
      return;
    }
  }
  computerPlay();
});
