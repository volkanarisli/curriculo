import { Client } from "@notionhq/client"
import { pageToPostTransformer } from "./helpers"
import { NotionToMarkdown } from "notion-to-md";

export const notion = new Client({ auth: process.env.NOTION_KEY })
export const n2m = new NotionToMarkdown({
    notionClient: notion,
})

const emailDatabaseId = process.env.NOTION_EMAIL_DATABASE_ID;
const blogDatabaseId = process.env.NOTION_BLOG_DATABASE_ID;



export const getDatabase = async () => {
    const response = await notion.databases.retrieve({
        database_id: emailDatabaseId
    })
}

export const addEmailToTheList = async (email) => {
    const data = await notion.pages.create({
        parent: {
            database_id: emailDatabaseId
        },
        properties: {
            'title': {
                title: [
                    {
                        type: 'text',
                        text: {
                            content: email
                        }
                    }
                ]
            }
        }
    })
    return data
}

export const getEmails = async () => {
    const rawEmails = await notion.databases.query({
        database_id: emailDatabaseId,
        sorts: [
            {
                property: 'title',
                direction: 'descending',
            }
        ]
    })
    const pureEmails = rawEmails.results.map(e => e.properties.Email.title[0]?.plain_text)

    return pureEmails
}
export const getPublishedBlogPosts = async () => {
    const rawPosts = await notion.databases.query({
        database_id: blogDatabaseId,
        filter: {
            property: 'Published',
            checkbox: {
                equals: true
            }
        },
        sorts: [
            {
                property: 'Created',
                direction: 'descending',
            }
        ],
    })
    const purePosts = rawPosts.results.map(e => pageToPostTransformer(e))

    return purePosts
}

export const getSingleBlogPost = async (slug) => {
    let post, markdown;
    const response = await notion.databases.query({
        database_id: blogDatabaseId,
        filter: {
            property: 'Slug',
            formula: {
                text: {
                    equals: slug
                }
            }
        },
    })
    if (!response.results[0]) {
        return null
    }

    const page = response.results[0];
    const mdBlocks = await n2m.pageToMarkdown(page.id)
    markdown = n2m.toMarkdownString(mdBlocks);
    post = pageToPostTransformer(page);
    return {
        post,
        markdown
    }
}
