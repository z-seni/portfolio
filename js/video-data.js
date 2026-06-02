// ─── EDIT VIDEOS HERE ────────────────────────────────────────────────────────
//
// Each category has a label and a list of videos.
// For YouTube videos, leave thumb empty — it's auto-generated from the URL.
// For Instagram reels, provide a thumb path and set small: true on the category.
//
// To add a video:  copy an existing entry and paste it inside the videos array.
// To remove:       delete the entry.
// To reorder cats: move the whole category block up or down.
//
// ─────────────────────────────────────────────────────────────────────────────

const VIDEO_CATEGORIES = [
  {
    label: "Majske igre",
    small: true,   // renders smaller cards (portrait reels)
    videos: [
      { title: "Reel 1 - Majske igre 2026", url: "https://www.instagram.com/majskeigre/reel/DYyzFr_oAKX/", thumb: "img/bg-img/video/majske/1.jpg" },
      { title: "Reel 2 - Majske igre 2026", url: "https://www.instagram.com/majskeigre/reel/DYoocUsofsC/", thumb: "img/bg-img/video/majske/2.jpg" },
      { title: "Reel 3 - Majske igre 2026", url: "https://www.instagram.com/majskeigre/reel/DYhVJckoqBM/", thumb: "img/bg-img/video/majske/3.jpg" },
      { title: "Reel 4 - Majske igre 2026", url: "https://www.instagram.com/majskeigre/reel/DYchrS_u2PY/", thumb: "img/bg-img/video/majske/4.jpg" },
      { title: "Reel 5 - Majske igre 2026", url: "https://www.instagram.com/majskeigre/reel/DYMRdpVOij4/", thumb: "img/bg-img/video/majske/5.jpg" },
      { title: "Reel 6 - Majske igre 2026", url: "https://www.instagram.com/majskeigre/reel/DYHSGYoOqjI/", thumb: "img/bg-img/video/majske/6.jpg" },
      { title: "Recap 1 - Majske igre 2025", url: "https://www.instagram.com/majskeigre/reel/DKxRnMtI2Ml/", thumb: "img/bg-img/video/majske/7.jpg" },
      { title: "Recap 2 - Majske igre 2025", url: "https://www.instagram.com/majskeigre/reel/DJzy7CtIXf6/", thumb: "img/bg-img/video/majske/8.jpg" },
    ]
  },
  {
    label: "Dostop",
    small: true,
    videos: [
      { title: "Dostop playlist", url: "https://www.youtube.com/playlist?list=PLVJLgYLiBUm6ihx7QbULnvudtrfCiI4qf", thumb: "img/bg-img/video/3.png" },
      { title: "Intervjujčki - Študentsko pustovanje 2024",  url: "https://www.instagram.com/dostop.si/reel/C3XQUWWo_Hp/",  thumb: "img/bg-img/video/dostop/1.jpg" },
      { title: "Intervjujčki - Bruci 2024",  url: "https://www.instagram.com/dostop.si/reel/C3cTMHrIaNZ/",  thumb: "img/bg-img/video/dostop/2.jpg" },
      { title: "Intervjujčki - Balkanday 2023",  url: "https://www.instagram.com/dostop.si/reel/C0RCRfVI7am/",  thumb: "img/bg-img/video/dostop/3.jpg" },
      { title: "Intervjujčki - Predpraznični 2023",  url: "https://www.instagram.com/dostop.si/reel/C0y2bz5oPRo/",  thumb: "img/bg-img/video/dostop/4.jpg" },
      { title: "Intervju - Tadej Golob 2024",  url: "https://www.instagram.com/dostop.si/reel/C4iKkEmIe6Y/",  thumb: "img/bg-img/video/dostop/5.jpg" },
      { title: "Intervjujčki - Kaj so Lampioncki 2024",  url: "https://www.instagram.com/dostop.si/reel/C7OWhZ6o5sf/",  thumb: "img/bg-img/video/dostop/6.jpg" },
      { title: "Intervjujčki - Lampioncki 2024",  url: "https://www.instagram.com/dostop.si/reel/C7rh2lTIcd0/",  thumb: "img/bg-img/video/dostop/7.jpg" },
      { title: "60. obletnica AFS Študent - 2024",  url: "https://www.instagram.com/dostop.si/reel/C7t8W6NorxI/",  thumb: "img/bg-img/video/dostop/8.jpg" },
      { title: "Intervjujčki z izvajalci 1 - Lampioncki 2024",  url: "https://www.instagram.com/dostop.si/reel/C7wpLxWoXEg/",  thumb: "img/bg-img/video/dostop/9.jpg" },
      { title: "Intervjujčki - Lampioncki 2026", url: "https://www.instagram.com/dostop.si/reel/DZFz_dks60K/",  thumb: "img/bg-img/video/dostop/10.jpg" },
      { title: "Intervjujčki z izvajalci 1 - Lampioncki 2025", url: "https://www.instagram.com/lampioncki/reel/DKH4MkNIUvx/", thumb: "img/bg-img/video/dostop/11.jpg" },
      { title: "Intervjujčki z izvajalci 2 - Lampioncki 2025", url: "https://www.instagram.com/lampioncki/reel/DKAlsfqIEON/", thumb: "img/bg-img/video/dostop/12.jpg" },
    ]
  },
  {
    label: "Firefighters",
    videos: [
      { title: "Dan z gasilci - PGD Sevnica", url: "https://www.youtube.com/watch?v=0yDbQjU3o_U" },
      { title: "HRS recap",     url: "https://www.youtube.com/watch?v=_vyMqVOyUBY", thumb: "img/bg-img/video/firefighters/hrs-recap.jpg" },
      { title: "HRS reel",      url: "https://www.instagram.com/jakopinblanka/reel/DAjYJU6oM6E/", thumb: "img/bg-img/video/hrs/1.jpg" },
    ]
  },
  {
    label: "India",
    videos: [
      { title: "Izjave o Pavlu Bernku in Jožetu Cukaletu", url: "https://www.youtube.com/watch?v=vYtGfqK9sFU" },
      { title: "Indija - short edit",                   url: "https://www.youtube.com/watch?v=yYtI9jYkjas" },
    ]
  },
  {
    label: "Events",
    videos: [
      { title: "Pustovanje 2024 - PGD Šentvid pri Grobelnem",              url: "https://www.youtube.com/watch?v=FhWaGGp0ptM" },
      { title: "Šentvidovo 2024 - PGD Šentvid pri Grobelnem",        url: "https://www.youtube.com/watch?v=jqxGn-bkK3k" },
      { title: "Koncert Big band Sevnica - 2024", url: "https://www.youtube.com/watch?v=z08OT9maUC0" },
    ]
  },
  {
    label: "Unizup",
    small: true,
    videos: [
      { title: "Taizejska molitev",  url: "https://www.instagram.com/reel/C01uclqIhXu/",              thumb: "img/bg-img/video/unizup/taize.jpg" },
      { title: "", url: "https://www.instagram.com/unizup/reel/C8XNCGFommx/",       thumb: "img/bg-img/video/unizup/1.jpg" },
      { title: "", url: "https://www.instagram.com/unizup/reel/C7ylQAKCOzy/",       thumb: "img/bg-img/video/unizup/2.jpg" },
      { title: "Koncert študentskega zbora Vdih", url: "https://www.instagram.com/unizup/reel/C7yfMAIisU2/",       thumb: "img/bg-img/video/unizup/3.jpg" },
      { title: "", url: "https://www.instagram.com/unizup/reel/C5IYLSgIPQT/",       thumb: "img/bg-img/video/unizup/4.jpg" },
      { title: "", url: "https://www.instagram.com/unizup/reel/C40BAwho5Ae/",       thumb: "img/bg-img/video/unizup/5.jpg" },
    ]
  },
];
