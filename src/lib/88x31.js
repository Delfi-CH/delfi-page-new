const eightyeightXthirtyones = [
    { filename: "/88x31/ddg.gif", url: "https://duckduckgo.com" },
    { filename: "/88x31/debian-powered.gif", url: "https://debian.org" },
    { filename: "/88x31/got_html.gif", url: "https://www.w3.org/standards/history/html52/" },
    { filename: "/88x31/java_green_button.gif", url: "https://java.com" },
    { filename: "/88x31/js-warning.gif", url: "https://en.wikipedia.org/wiki/JavaScript#Security" },
    { filename: "/88x31/linux-p.gif", url: "https://distrowatch.com" },
    { filename: "/88x31/notepadpp3.gif", url: "https://notepad-plus-plus.org/" },
    { filename: "/88x31/poweredbyfedora.gif", url: "https://fedoraproject.org" },
    { filename: "/88x31/powered-llvm.gif", url: "https://llvm.org  " },
    { filename: "/88x31/right2repair.gif", url: "https://en.wikipedia.org/wiki/Right_to_repair" },
    { filename: "/88x31/steam.gif", url: "https://store.steampowered.com/" },
    { filename: "/88x31/tfs.gif", url: "https://www.gnu.org/" },
    { filename: "/88x31/valid-html5.gif", url: "https://www.w3.org/standards/history/html52/" },
    { filename: "/88x31/visitmini.gif", url: "https://distrowatch.com" },
    { filename: "/88x31/wii.gif", url: "https://wii.hacks.guide" },
    { filename: "/88x31/debian.gif", url: "https://debian.org" },
    { filename: "/88x31/fftake.gif", url: "https://librewolf.net/" },
    { filename: "/88x31/half-life.gif", url: "steam://run/70" },
    { filename: "/88x31/javascript.gif", url: "https://en.wikipedia.org/wiki/JavaScript#Security" },
    { filename: "/88x31/latex.gif", url: "https://www.latex-project.org/" },
    { filename: "/88x31/linux_powered.gif", url: "https://distrowatch.com" },
    { filename: "/88x31/powered-by-debian.gif", url: "https://debian.org" },
    { filename: "/88x31/powered-cpp.gif", url: "https://www.gnu.org/software/gcc/projects/cxx-status.html" },
    { filename: "/88x31/redhat.gif", url: "https://redhat.com" },
    { filename: "/88x31/sendit.gif", url: "https://delfi.dev" },
    { filename: "/88x31/sun.gif", url: "https://en.wikipedia.org/wiki/Sun_Microsystems" },
    { filename: "/88x31/valid-css-blue.gif", url: "https://www.w3.org/TR/css/#css" },
    { filename: "/88x31/vim_a.gif", url: "https://neovim.io" },
    { filename: "/88x31/warpnow.gif", url: "https://en.wikipedia.org/wiki/OS/2" },
    { filename: "/88x31/wikipedia.gif", url: "https://en.wikipedia.org" },
    { filename: "/88x31/88x31.gif", url: "https://cyber.dabamos.de/88x31/"},
];

export function getRandom88x31() {
    const rand = Math.floor(Math.random()*eightyeightXthirtyones.length)
    console.log(rand)
    console.log(eightyeightXthirtyones[rand])
    return eightyeightXthirtyones[rand]
}