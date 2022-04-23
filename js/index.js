const animation = anime.timeline({
    targets: '.span',   
    easing: 'easeOutExpo',
});
anime.
animation
.add({
    rotate: 0,
    opacity: 1,
    translateX: 0,
    translateY: 0,
    scale: 1,
    duration: 5000,
    delay: anime.stagger(15)
});

animation();
anime({
    targets: 'span',
    translateX: 250
  });
  console.log("tanmay")