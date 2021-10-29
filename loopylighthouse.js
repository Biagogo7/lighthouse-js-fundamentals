for (var t = 100; t <= 200; t++) {
  if (t % 3 === 0 && t % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if (t % 3 === 0) {
    console.log("Loopy");
    } else if (t % 4 === 0) {
      console.log("Lighthouse");
    } else {
      console.log(t);
    }
}
//console.log(t);