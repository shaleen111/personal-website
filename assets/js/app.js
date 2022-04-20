// Respnsiveness
function showMenu()
{
    console.log("Event Triggered.")
    var menu = document.querySelector("nav ul");
    console.log(menu.style.display)
    if (menu.id === "")
    {
        menu.id = "responsive"
        console.log("Responsive")
    }
    else
    {
        menu.id = ""
        console.log("Nothing")
    }
}
