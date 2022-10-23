import { AddNote } from "../../components/AddNote"

function Home() {
    const handleAddNote = () => {

    }

    return (
        <div>
            <AddNote onAddNote={handleAddNote} />
        </div>
    )
}

export { Home }