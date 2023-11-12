const DeleteCurriculumData = async (id: string) => {
    console.log("deleting... id=", id)
    try {
        await fetch(
            "https://hackathon-backend-main-mxtuefqkua-uc.a.run.app/curriculum",
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: id
                })
            }
        )
    } catch (err) {
        console.log(err)
    }
}


export default DeleteCurriculumData