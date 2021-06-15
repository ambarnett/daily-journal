export const JournalForm = () => {
    return `
    <form class="entryForm">
        <fieldset>
            <label for="entryDate">Date of entry</label>
            <input type="date" name="entryDate" class="entryForm__date">
        </fieldset>
        <fieldset>
            <label for="concepts-covered">Concepts Covered</label>
            <input type="text" name="concepts-covered" class="entryForm__concept">
        </fieldset>
        <fieldset>
            <label for="journal-entry">Journal Entry</label>
            <input type="text" name="journal-entry" class="entryForm__journalEntry">
        </fieldset>
        <fieldset>
            <label for="mood">Mood for the day</label>
            <select id="moods" class="entryForm__mood">
                <option value="Happy">Happy</option>
                <option value="Sad">Sad</option>
                <option value="Tired">Tired</option>
                <option value="Angry">Angry</option>
                <option value="Hungry">Hungry</option>
            </select>
        </fieldset>
        <button>Record Journal Entry</button>
    </form>
    `
}