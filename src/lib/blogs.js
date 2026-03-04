class Blog {
    name;
    description;
    createdAt;
    editedAt;
    url;
    constructor(name, description, createdAt, editedAt, url) {
        this.name = name;
        this.description =description;
        this.createdAt = createdAt;
        this.editedAt = editedAt;
        this.url = url
    }
}

export const BlogList = [
    new Blog(
        "Testing...",
        "For testing only! ,",
        new Date(),
        new Date(),
        "/blog/wawa"
    ),
]