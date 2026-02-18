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
    ExpressJS: "ExpressJS",
    Svelte: "Svelte",
    Python: "Python",
    Bash: "Bash Script",
    MariaDB: "MariaDB",
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
        "https://github.com/Delfi-CH/belaberung-docker",
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
        Status.WIP,
        "0"
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
]