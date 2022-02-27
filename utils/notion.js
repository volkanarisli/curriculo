import { Client } from "@notionhq/client"

export const notion = new Client({ auth: process.env.NOTION_KEY })

const databaseId = process.env.NOTION_DATABASE_ID

export const getDatabase = async () => {
    const response = await notion.databases.retrieve({
        database_id: databaseId
    })
    console.log(response)
}

export const addEmailToTheList = async (email) => {
    const data = await notion.pages.create({
        parent: {
            database_id: databaseId
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
        database_id: databaseId,
        sorts: [
            {
                property: 'title',
                direction: 'descending'
            }
        ]
    })
    const pureEmails = rawEmails.results.map(e => e.properties.Email.title[0]?.plain_text)

    return pureEmails
}

