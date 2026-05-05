class LanguageOrToolkitOrUtility {
    name;
    type;
    url;
    icon;
    skillLevel;
    constructor(name, type, url, icon, skillLevel) {
        this.name = name;
        this.type =type;
        this.url = url;
        this.icon = icon;
        this.skillLevel = skillLevel;
    }
}

export const languagesToolkitsAndUtilities = [
    new LanguageOrToolkitOrUtility(
        "HTML",
        "Programming Language (debatable)",
        "https://html.spec.whatwg.org/",
        "html.svg",
        "8/10"
    ),
    new LanguageOrToolkitOrUtility(
        "CSS",
        "Programming Language (debatable)",
        "https://w3.org/TR/CSS/#css",
        "css.svg",
        "7  /10"
    ),
    new LanguageOrToolkitOrUtility(
        "JavaScript",
        "Programming Language",
        "https://ecma-international.org/publications-and-standards/standards/ecma-262/",
        "js.svg",
        "8/10"
    ),
    new LanguageOrToolkitOrUtility(
        "React",
        "Toolkit",
        "https://react.dev  ",
        "react.svg",
        "7/10"
    ),
    new LanguageOrToolkitOrUtility(
        "Svelte",
        "Toolkit",
        "https://svelte.dev  ",
        "svelte.svg",
        "6/10"
    ),
    new LanguageOrToolkitOrUtility(
        "ElectronJS",
        "Toolkit",
        "https://www.electronjs.org/",
        "electron.svg",
        "5/10"
    ),
    new LanguageOrToolkitOrUtility(
        "CapacitorJS",
        "Toolkit",
        "https://capacitorjs.com/",
        "capacitor.svg",
        "5/10"
    ),
    new LanguageOrToolkitOrUtility(
        "nodeJS",
        "Toolkit",
        "https://nodejs.org",
        "node.svg",
        "5/10"
    ),
    new LanguageOrToolkitOrUtility(
        "Vite",
        "Utility",
        "https://vite.dev  ",
        "vite.svg",
        "7/10"
    ),
    new LanguageOrToolkitOrUtility(
        "Tauri",
        "Utility",
        "https://tauri.app/",
        "tauri.svg",
        "4/10"
    ),
    new LanguageOrToolkitOrUtility(
        "C",
        "Programming Language",
        "https://www.iso.org/standard/82075.html",
        "c.svg",
        "3/10"
    ),
    new LanguageOrToolkitOrUtility(
        "C++",
        "Programming Language",
        "https://www.isocpp.org/",
        "cpp.svg",
        "3/10"
    ),
    new LanguageOrToolkitOrUtility(
        "Java",
        "Programming Language",
        "https://java.com",
        "java.svg",
        "6/10"
    ),
    new LanguageOrToolkitOrUtility(
        "Spring Boot",
        "Toolkit",
        "https://spring.io/",
        "spring.svg",
        "5/10"
    ),
    new LanguageOrToolkitOrUtility(
        "C#",
        "Programming Language",
        "https://learn.microsoft.com/en-us/dotnet/csharp/",
        "csharp.svg",
        "3/10"
    ),
    new LanguageOrToolkitOrUtility(
        "Rust",
        "Programming Language",
        "https://rust-lang.org",
        "rust.svg",
        "5/10"
    ),
    new LanguageOrToolkitOrUtility(
        "Python",
        "Programming Language",
        "https://python.org",
        "python.svg",
        "5/10"
    ),
    new LanguageOrToolkitOrUtility(
        "GNU BASH",
        "Programming Language",
        "https://www.gnu.org/software/bash/",
        "bash.svg",
        "8/10"
    ),
    new LanguageOrToolkitOrUtility(
        "Git",
        "Utility",
        "https://git-scm.org",
        "git.svg",
        "7/10"
    ),
    new LanguageOrToolkitOrUtility(
        "Linux",
        "Utility",
        "https://kernel.org",
        "linux.svg",
        "7/10"
    ),
    new LanguageOrToolkitOrUtility(
        "Raspberry Pi",
        "Utility",
        "https://raspberrypi.com/",
        "raspberry-pi.svg",
        "3/10"
    ),
    new LanguageOrToolkitOrUtility(
        "Android",
        "Utility",
        "https://source.android.com/",
        "android.svg",
        "4/10"
    ),
    new LanguageOrToolkitOrUtility(
        "AWS",
        "Utility",
        "https://aws.amazon.com/",
        "aws.svg",
        "5/10"
    ),
    new LanguageOrToolkitOrUtility(
        "MariaDB",
        "Utility",
        "https://mariadb.org/",
        "mariadb.svg",
        "7/10"
    ),
    new LanguageOrToolkitOrUtility(
        "PostgreSQL",
        "Utility",
        "https://postgresql.org/",
        "postgres.svg",
        "6/10"
    ),
    new LanguageOrToolkitOrUtility(
        "Docker",
        "Utility",
        "https://docker.com/",
        "docker.svg",
        "5/10"
    ),
]