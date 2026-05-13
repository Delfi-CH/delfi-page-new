#!/usr/bin/env node
import { languagesToolkitsAndUtilities } from "./langs.js";
import { ProjectList } from "./projects.js";
import { DeviceList, Acessories, OperatingSystems } from "./setup.js";
import fs from "node:fs"


const htmlUlStart = "<ul>"
const htmlUlEnd = "</ul>"


const htmlLiStart = "<li>"
const htmlLiEnd = "</li>"

const htmlAStart = (href) => `<a href="${href}" target="_blank">`
const htmlAEnd = "</a>"

const langHtml = languagesToolkitsAndUtilities.map((lang)=> {
    const string1 = htmlLiStart + lang.name + htmlLiEnd
    const string2 = htmlLiStart + lang.type + htmlLiEnd
    const string3 = htmlLiStart + "Experience: " + lang.skillLevel + htmlLiEnd

    return htmlUlStart + string1 + string2 + string3 + htmlUlEnd
})

fs.writeFileSync("./src/generated/langs.html", langHtml.join(""))

const projectHtml = ProjectList.map((project)=> {
    const string1 = htmlLiStart + project.name + " v" + project.version + " (" + project.status + ")" + htmlLiEnd
    const string2 = htmlLiStart + project.description + htmlLiEnd
    const string3 = htmlLiStart + htmlAStart(project.website) + "Website" + htmlAEnd + htmlLiEnd
    const string4 = htmlLiStart + htmlAStart(project.repository) + "Repository" + htmlAEnd + htmlLiEnd
    const string5 = htmlLiStart + "Licenses: " + project.licenses.join(", ") + htmlLiEnd
    const string6 = htmlLiStart + "Languages/Toolkits: " + project.toolkits.join(", ") + htmlLiEnd

    return htmlUlStart + string1 + string2 + string3 + string4 + string5 + string6 + htmlUlEnd
})

fs.writeFileSync("./src/generated/projects.html", projectHtml.join(""))

const deviceHtml = DeviceList.map((dev)=>{
    const string1 = htmlLiStart + dev.name + htmlLiEnd
    const string2 = htmlLiStart + "Manufacturer: "+dev.manufacturer + (dev.manufacturerUrl !== null ? (" "+ htmlAStart(dev.manufacturerUrl)+ "(Website)" + htmlAEnd) : "") + htmlLiEnd
    const string4 = htmlLiStart + "CPU: " + dev.processor + " | GPU: "+ dev.graphicsProcessor + " | Memory: "  + dev.memory + " | Storage: " +dev.storage + " | " +dev.other + htmlLiEnd
    const string3 = htmlLiStart + dev.type + ", used for/as: " + dev.usage.join(", ") + htmlLiEnd

    return htmlUlStart + string1 + string2 + string3 + string4 + htmlUlEnd
})

const acessoryHtml = Acessories.map((acc)=>{
    const string1 = htmlLiStart + acc.name + htmlLiEnd
    const string2 = htmlLiStart + acc.type + htmlLiEnd
    const string3 = htmlLiStart + htmlAStart(acc.url) + "(Website)" + htmlAEnd + htmlLiEnd
    return htmlUlStart + string1 + string2 + string3 + htmlUlEnd
}) 

const osHtml = "<p>" + OperatingSystems.join(", ")+"</p>"

fs.writeFileSync("./src/generated/devices.html", deviceHtml.join(""))
fs.writeFileSync("./src/generated/acessories.html", acessoryHtml.join(""))
fs.writeFileSync("./src/generated/os.html", osHtml)
