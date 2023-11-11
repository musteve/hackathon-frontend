const DeleteVedeoData = async (id: string) => {
    console.log("deleting... id=", id)
    try {
        await fetch(
            "https://hackathon-backend-main-mxtuefqkua-uc.a.run.app/vedeo",
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


export default DeleteVedeoData