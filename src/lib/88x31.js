const eightyeightXthirtyones = [
    { filename: "ddg.gif", url: "https://duckduckgo.com" },
    { filename: "debian-powered.gif", url: "https://debian.org" },
    { filename: "got_html.gif", url: "https://www.w3.org/standards/history/html52/" },
    { filename: "java_green_button.gif", url: "https://java.com" },
    { filename: "js-warning.gif", url: "https://en.wikipedia.org/wiki/JavaScript#Security" },
    { filename: "linux-p.gif", url: "https://distrowatch.com" },
    { filename: "notepadpp3.gif", url: "https://notepad-plus-plus.org/" },
    { filename: "poweredbyfedora.gif", url: "https://fedoraproject.org" },
    { filename: "powered-llvm.gif", url: "https://llvm.org  " },
    { filename: "right2repair.gif", url: "https://en.wikipedia.org/wiki/Right_to_repair" },
    { filename: "steam.gif", url: "https://store.steampowered.com/" },
    { filename: "tfs.gif", url: "https://www.gnu.org/" },
    { filename: "valid-html5.gif", url: "https://www.w3.org/standards/history/html52/" },
    { filename: "visitmini.gif", url: "https://distrowatch.com" },
    { filename: "wii.gif", url: "https://wii.hacks.guide" },
    { filename: "debian.gif", url: "https://debian.org" },
    { filename: "fftake.gif", url: "https://librewolf.net/" },
    { filename: "half-life.gif", url: "steam://run/70" },
    { filename: "javascript.gif", url: "https://en.wikipedia.org/wiki/JavaScript#Security" },
    { filename: "latex.gif", url: "https://www.latex-project.org/" },
    { filename: "linux_powered.gif", url: "https://distrowatch.com" },
    { filename: "powered-by-debian.gif", url: "https://debian.org" },
    { filename: "powered-cpp.gif", url: "https://www.gnu.org/software/gcc/projects/cxx-status.html" },
    { filename: "redhat.gif", url: "https://redhat.com" },
    { filename: "sendit.gif", url: "https://delfi.dev" },
    { filename: "sun.gif", url: "https://en.wikipedia.org/wiki/Sun_Microsystems" },
    { filename: "valid-css-blue.gif", url: "https://www.w3.org/TR/css/#css" },
    { filename: "vim_a.gif", url: "https://neovim.io" },
    { filename: "warpnow.gif", url: "https://en.wikipedia.org/wiki/OS/2" },
    { filename: "wikipedia.gif", url: "https://en.wikipedia.org" },
    { filename: "88x31.gif", url: "https://cyber.dabamos.de/88x31/"},
];

export function getRandom88x31() {
    const rand = Math.floor(Math.random()*eightyeightXthirtyones.length)
    console.log(rand)
    console.log(eightyeightXthirtyones[rand])
    return eightyeightXthirtyones[rand]
}