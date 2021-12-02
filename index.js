const radioMiddle = document.querySelector('.radio-middle');
const url = "https://teclead.de/recruiting/radios";

fetch(url)
  .then(response => response.json())
    .then((data) => {
      const radios = data['radios'];
      radios.forEach((radio) => {
        const html = `<div class="radio" data-name="${radio.name}">
                        <p>${radio.name}</p>
                        <p>${radio.frequency}</p>
                      </div>
                      <div class="radio-show">
                        <div>
                          <i class="fas fa-chevron-left"></i>
                        </div>
                        <img class="radio-image" src="${radio.image}">
                        </img>
                        <div>
                          <i class="fas fa-chevron-right"></i>
                        </div>
                      </div>`;
        radioMiddle.insertAdjacentHTML('beforeend', html);
      });
      const radiosAvailable = document.querySelectorAll('.radio');
      const radioBottom = document.querySelector('.radio-bottom');
      radiosAvailable.forEach((radio) => {
        radio.addEventListener('click', (event) => {
          event.currentTarget.nextElementSibling.classList.toggle('radio-show');
          event.currentTarget.nextElementSibling.classList.toggle('radio-show-open');
          if (radioBottom.querySelector('p').innerText !== "") {
            radioBottom.querySelector('p').innerText = "";
          } else {
            radioBottom.querySelector('p').innerText = `Currently Playing: ${event.currentTarget.dataset.name}`;
          }
        });
      });
});
