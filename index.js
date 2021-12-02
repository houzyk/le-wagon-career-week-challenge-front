const radioMiddle = document.querySelector('.radio-middle');
const url = "https://teclead.de/recruiting/radios";

fetch(url)
  .then(response => response.json())
    .then((data) => {
      const radios = data['radios'];
      radios.forEach((radio) => {
        const html = `<div class="radio">
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
});
