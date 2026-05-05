class Project {
    name
    description
    website
    licenses
    repository
    toolkits
    status
    version
    constructor(name, description, website, repository, licenses, toolkits, status, version) {
        this.name = name;
        this.description = description;
        this.licenses = licenses;
        this.website = website;
        this.repository = repository;
        this.toolkits = toolkits;
        this.status = status;
        this.version = version
    }
}

const Toolkits = Object.freeze({
    C: "C",
    Cplusplus: "C++",
    Csharp: "C#",
    Java: "Java",
    Spring: "Spring Boot",
    Rust: "Rust",
    Tauri: "Tauri",
    HTML: "HTML",
    CSS: "CSS",
    JavaScript: "JavaScript",
    TypeScript: "TypeScript",
    Node: "NodeJS",
    ReactJS: "ReactJS",
    Svelte: "Svelte",
    ExpressJS: "ExpressJS",
    ElectronJS: "ElectronJS",
    CapacitorJS: "CapacitorJS",
    Python: "Python",
    Bash: "Bash Script",
    MariaDB: "MariaDB",
    PostgresSQL: "PostgreSQL",
    Docker: "Docker",
})

const Licenses = Object.freeze({
    MIT: "MIT",
    GPLv2: "GPL v2",
    GPLv3: "GPL v3",
    LGPLv2_1: "LGPL v2.1",
    AGPLv3: "AGPL v3",
    BSD_2_Clause: "BSD 2-Clause",
    BSD_3_Clause: "BSD 3-Clause",
    Apache_2: "Apache 2.0",
    MPL_2: "MPL 2.0",
    ARR: "All Rights Reserved",
});


const Status = Object.freeze({
    Paused: "Paused",
    WIP: "Work in progress",
    Finished: "Finished",
})

export const ProjectList = [
    new Project(
        "belaberung",
        "Simple chatting application.",
        "https://chat.delfi.dev",
        "https://github.com/Delfi-CH/belaberung-docker",
        [Licenses.BSD_2_Clause, Licenses.AGPLv3],
        [Toolkits.Java, Toolkits.Spring, Toolkits.JavaScript, Toolkits.ReactJS, Toolkits.MariaDB, Toolkits.Docker],
        Status.Finished,
        "1.1"
    ),
    new Project(
        "delfi.dev",
        "My Homepage",
        "https://delfi.dev",
        "https://github.com/Delfi-CH/delfi-page-new",
        [Licenses.MIT],
        [Toolkits.JavaScript, Toolkits.Svelte,],
        Status.Finished,
        "1"
    ),
    new Project(
        "ArchLinux Installation Support Software",
        "Terminal-based utility to aid in the Installation of the Arch Linux Linux Distribution",
        "https://github.com/Delfi-CH/custom-arch-installer?tab=readme-ov-file",
        "https://github.com/Delfi-CH/custom-arch-installer?tab=readme-ov-file",
        [Licenses.GPLv3],
        [Toolkits.Rust],
        Status.Finished,
        "1"
    ),
    new Project(
        "udownload Rust crate",
        "Rust library around the ureq crate to make downloading files easier.",
        "https://crates.io/crates/udownload",
        "https://github.com/Delfi-CH/udownload",
        [Licenses.MIT],
        [Toolkits.Rust],
        Status.Finished,
        "0.1.0"
    ),
    new Project(
        "sysfind.app",
        "An application for operating system installer management",
        "https://sysfind.app",
        "https://github.com/Delfi-CH/sysfind-application",
        [Licenses.GPLv3, Licenses.AGPLv3],
        [Toolkits.JavaScript, Toolkits.Node, Toolkits.ExpressJS, Toolkits.Svelte, Toolkits.Rust , Toolkits.Tauri, Toolkits.MariaDB],
        Status.WIP,
        "0.1.0"
    ),
    new Project(
        "ini.js",
        "Key-Value Parser for JavaScript",
        "https://www.npmjs.com/package/@delfi-ch/ini.js",
        "https://github.com/Delfi-CH/ini.js",
        [Licenses.BSD_2_Clause],
        [Toolkits.JavaScript, Toolkits.Node],
        Status.Finished,
        "0.1.0"
    ),
    new Project(
        "remind-me",
        "Desktop and Mobile App for scheduling reminders",
        "https://github.com/Delfi-CH/remind-me",
        "https://github.com/Delfi-CH/remind-me",
        [Licenses.GPLv3],
        [Toolkits.JavaScript, Toolkits.Node, Toolkits.ExpressJS, Toolkits.Svelte, Toolkits.CapacitorJS, Toolkits.ElectronJS, Toolkits.PostgresSQL],
        Status.WIP,
        "0.8.0-dev"
    )
]