

const AddPersnalData = async (name: string, age: string) => {
    try {
        console.log("posting...")
        await fetch(
            "https://hackathon-backend-main-mxtuefqkua-uc.a.run.app/adduser",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            name: name,
                            age: age
                        })
                    }
        )
    } catch (err) {
        console.log(err)
    }
}

export default AddPersnalData