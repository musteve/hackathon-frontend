const AddPersnalData = async (name: string, age: string) => {
    try {
        console.log("posting...")
        await fetch(
            "https://hackathon-backend-main-mxtuefqkua-uc.a.run.app/demo",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    age: Number(age) || 0
                })
            }
        )
    } catch (err) {
        console.log(err)
    }
}

export default AddPersnalData