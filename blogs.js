window.blogs = [
  {
    "title": "devlog, first half of 2026",
    "date": "2026-06-22",
    "categories": [
      "github",
      "lnbits",
      "bitcoin",
      "work"
    ],
    "url": "blogs/2026-06-22-devlog.html"
  },
  {
    "title": "QubesOS, how to not get hacked when developing",
    "date": "2026-06-22",
    "categories": [
      "linux",
      "security",
      "development",
      "qubesos"
    ],
    "url": "blogs/2026-06-22-qubesos-how-to-not-get-hacked-when-developing.html"
  },
  {
    "title": "The joy of the Boltz web app",
    "date": "2023-02-19",
    "categories": [
      "bitcoin",
      "lightning",
      "boltz",
      "web"
    ],
    "url": "blogs/2023-02-19-boltz-web-app.html"
  },
  {
    "title": "lnurl and bolt11 libraries",
    "date": "2023-02-11",
    "categories": [
      "bitcoin",
      "lightning",
      "lnbits",
      "python"
    ],
    "url": "blogs/2023-02-11-lnurl-and-bolt11.html"
  },
  {
    "title": "building and setup of bitcoin core and lightning node on ubuntu server in aws ec2",
    "date": "2022-01-23",
    "categories": [],
    "url": "blogs/2022-01-23-manually-installing-bitcoin-core-on-ubuntu.html"
  },
  {
    "title": "setting up a mailserver on ubuntu server",
    "date": "2022-01-22",
    "categories": [],
    "url": "blogs/2022-01-22-setting-up-a-mailserver.html"
  },
  {
    "title": "creating a lnbits sendmail extension with python, bitcoin lightning",
    "date": "2022-01-21",
    "categories": [],
    "url": "blogs/2022-01-21-bitcoin-lightning-lnbits-sendmail-extension.html"
  },
  {
    "title": "vimspector to the rescue, i finally have a debugger!",
    "date": "2022-01-05",
    "categories": [],
    "url": "blogs/2022-01-05-vimspector-to-the-rescue.html"
  },
  {
    "title": "a sxmo inspired rethinking of my dotfiles and also a proof of concept for a new structuring of sxmo-utils",
    "date": "2021-06-27",
    "categories": [],
    "url": "blogs/2021-06-27-restructuring-dotfiles-rethinking-sxmo-structure.html"
  },
  {
    "title": "adventures with arch linux arm and sxmo on the pinephone",
    "date": "2021-06-21",
    "categories": [],
    "url": "blogs/2021-06-21-adventures-with-arch-arm-sxmo-pinephone.html"
  },
  {
    "title": "building the kernel for the pinephone",
    "date": "2021-05-22",
    "categories": [
      "linux",
      "pinephone",
      "kernel"
    ],
    "url": "blogs/2021-05-22-building-linux-kernel-on-pinephone.html"
  },
  {
    "title": "running android apps with anbox on linux and pinephone",
    "date": "2021-02-09",
    "categories": [
      "linux",
      "pinephone",
      "anbox",
      "android"
    ],
    "url": "blogs/2021-02-09-running-android-apps-with-anbox-on-arch-linux-or-pinephone.html"
  },
  {
    "title": "experimenting with the bitcoin lightning network, setting up local wallets and a btcpay server",
    "date": "2020-08-12",
    "categories": [
      "bitcoin",
      "lightningnetwork"
    ],
    "url": "blogs/2020-08-12-experimenting-with-bitcoin-lightning.html"
  },
  {
    "title": "creating qr codes and simple a website for an interactive art installation",
    "date": "2018-04-07",
    "categories": [
      "web",
      "html",
      "art"
    ],
    "url": "blogs/2018-04-07-simple-webapp-for-an-installation.html"
  },
  {
    "title": "using multiple password storages with the unix password manager",
    "date": "2018-04-07",
    "categories": [
      "unix",
      "security"
    ],
    "url": "blogs/2018-04-07-using-multiple-password-storages.html"
  }
];

function renderBlogList() {
  const list = document.getElementById("blog-list");
  if (!list) return;

  const prefix = window.location.pathname.includes("/blogs/") ? "../" : "";
  window.blogs.forEach((blog) => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = prefix + blog.url;
    link.textContent = blog.title;
    item.append(blog.date + " - ", link);
    list.append(item);
  });
}

renderBlogList();
