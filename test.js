const bar = document.querySelectorAll(".bar");
const hover = document.querySelectorAll(".spent");
const expense = document.querySelectorAll(".spent > p");

async function fetchData() {
    let newData = await fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        return data
    })
    .catch(error => {
        console.error(error)
    })

    expense.forEach((element, index) => {
        element.innerText = newData[index].amount.toString();
    })
}

fetchData();

function singleBar(element, index) {
    element.addEventListener("click", e=> {
        element.classList.toggle("active");
        if (element.classList.contains("active")) {
                hover[index].style.display = "block";
        } else {
            hover[index].style.display = "none";
        }
    })

    element.addEventListener("mouseover", e=> {
        hover[index].style.display = "block";
    })

    element.addEventListener("mouseout", e=> {
        if(!element.classList.contains("active")) {
            hover[index].style.display = "none";
        }
    })
}

bar.forEach(singleBar);



    