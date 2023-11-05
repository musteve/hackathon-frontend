const UpdatePersonalData = async (id: string, name: string, age: string) => {
    try {
        console.log("updateing...")
        await fetch(
            "https://hackathon-backend-main-mxtuefqkua-uc.a.run.app/demo",
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: id,
                    name: name,
                    age: Number(age),
                })
            }
        )
    } catch (err) {
        console.log(err)
    }
}

export default UpdatePersonalData