const initializeDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
    // CAN'T TOUCH THIS - END


    // You will be writing code below this line
    document.querySelector("#button--betty").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--betty")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--nemo").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--nemo")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--dory").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--dory")
            theDialog.showModal()
        }
    )    
    document.querySelector("#button--larry").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--larry")
            theDialog.showModal()
        }
    )   
    document.querySelector("#button--bob").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--bob")
            theDialog.showModal()
        }
    )    
    document.querySelector("#button--karen").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--karen")
            theDialog.showModal()
        }
    )
}
export default initializeDetailButtonEvents