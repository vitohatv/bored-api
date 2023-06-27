const link = "https://www.boredapi.com/api/activity";

const active = document.querySelector("#new-activity");

active.addEventListener('click', () => {
    fetch(link)
        .then((response)  => {
            return response.json();
        })
        .then((data) => {
            const answer = document.querySelector("#answer");
            answer.innerText = `${data.activity}`;
            answer.style.display = 'block';
            console.log(data);
        });
});