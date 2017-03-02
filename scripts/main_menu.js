var main_menu = {}

main_menu.buttonData = {

  play: {

    //Location
    X: 340,
    Y: 423,

    //Text
    text: "Play",
    font: "35px Palatino",
    color: "#FFF",
    hoverColor: "#EBE1A0",

    //Background
    bgColor: "#696969",

    //Action
    action: function() { screenType = "CLASS_SELECTION"; },
  },
  instructions: {

    //Location
    X: 445,
    Y: 430,

    //Text
    text: "Instructions",
    font: "25px Palatino",
    color: "#FFF",
    hoverColor: "#EBE1A0",

    //Background
    bgColor: "#696969",

    //Action
    action: function() { screenType = "INSTRUCTIONS"; },
  },
  options: {

    //Location
    X: 220,
    Y: 430,

    //Text
    text: "Options",
    font: "25px Palatino",
    color: "#FFF",
    hoverColor: "#EBE1A0",

    //Background
    bgColor: "#696969",

    //Action
    action: function() { screenType = "OPTIONS"; },
  },
}

main_menu.buttons = {

  play: new button(main_menu.buttonData.play),
  instructions: new button(main_menu.buttonData.instructions),
  options: new button(main_menu.buttonData.options),
}

main_menu.draw = function () {

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(30, 30, 30, 0.7)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#696969";
  ctx.fillRect(0, 400, canvas.width, 90);

  //Main Menu Buttons
  main_menu.buttons.play.draw();
  main_menu.buttons.instructions.draw();
  main_menu.buttons.options.draw();

  ctx.font = "40px Palatino";
  ctx.fillStyle = "#CC0000";
  ctx.shadowBlur = 20;
  ctx.shadowColor = "#000";
  ctx.fillText("The Realm Project", canvas.width / 3.4, 200);
  ctx.shadowBlur = 0;

  ctx.font = "16px Palatino";
  ctx.fillStyle = "#008888";
  ctx.fillText(versionInfo + " - Game by ExplorersX", 15, 30);
}