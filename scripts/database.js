const database = {
    "entries": [
        {
            id: 1,
            date: "07/24/2025",
            concept: "HTML & CSS",
            entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
            mood: "Ok"
        },
        {
            id: 2,
            date: "07/25/2025",
            concept: "More flexbox",
            entry: "Went over more flexbox concepts and practiced using it",
            mood: "Good"
        },
        {
            id: 3,
            date: "07/26/2025",
            concept: "Extra practice with flexbox",
            entry: "Guess what?? More flexbox!",
            mood: "help" 
        }
    ]
}

export const getJournalEntries = () => {
    return database.entries.map(entry => ({...entry}))
}