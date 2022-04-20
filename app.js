class RandomUser{
    constructor(){}

    static fetchFromAPI(){
        let URL = 'https://randomuser.me/api/';
        fetch(URL)
        .then(response => response.json())
        .then(data => RandomUser.renderUserData(data))
        .catch(error => alert(error));
    }

    static renderUserData(data){
        console.log(data);
        let user = data.results[0];
        let cardElem = document.querySelector('.card');
        cardElem.innerHTML = `
        <div class = "card-head">
            <div class = "user-image">
                <img src = "${user.picture.large}" alt = "">
            </div>
        </div>

        <div class = "card-body">
            <div class = "user-post-address">
                <div>
                    <span>${user.location.street.number}</span>
                </div>
                <div>
                    <span>${user.location.street.name}</span>
                </div>
            </div>

            <div class = "user-name">
                <span class = "user-name-title">${user.name.title}.</span>
                <span class = "user-name-full">${user.name.first} ${user.name.last},</span>
                <span class = "user-age">${user.dob.age}</span>
            </div>

            <div class = "user-location-address">
                <span>${user.location.city}, ${user.location.state}, ${user.location.country}</span>
            </div>
        </div>

        <div class = "card-foot">
            <div class = "user-contact-info">
                <span>
                   ${user.phone}
                </span>
            </div>
        </div>
        `;
    }
}


document.getElementById('generate-btn').addEventListener('click', () => {
    RandomUser.fetchFromAPI();
});

RandomUser.fetchFromAPI();
C:\Users\Will\Desktop\New folder\random-user-generator-project-using-vanilla-js-master\app.js