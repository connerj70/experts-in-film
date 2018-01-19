var hamburgerButton = document.querySelector(".times-icon");
var openSB = document.querySelector(".bars");
var slider = document.querySelector(".mobile-nav-wrapper");
var main = document.querySelector("body");
var soundCloudString = 'http://api.soundcloud.com/tracks/380880809?client_id=';
var carversClientId = 'HnbhPkOkvV3iSex4B5fokd8AKygMMrUc';
var carversUserId = '260724315';

hamburgerButton.addEventListener('click', function() {
    slider.classList.remove('mobile-nav-wrapper-active');
    main.style.overflowY = "scroll";
    openSB.style.display = "block";
});

openSB.addEventListener('click', function() {
    slider.classList.add('mobile-nav-wrapper-active');
    main.style.overflowY = "hidden";
    openSB.style.display = "none";
});

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

window.onload = function() {
    fetch('http://api.soundcloud.com/users/' + carversUserId + '/tracks?client_id=' + carversClientId).then(resp => {
        resp.json().then((data) => {
           
            console.log(data);
            var root = document.getElementById('root');
            for(var i=0; i < data.length; i++) {
                var dateString = new Date(data[i].created_at.split(" ")[0]);
                var newDateString = monthNames[dateString.getMonth()] + " " + dateString.getDate() + ", " + dateString.getFullYear();
                
                let title = data[i].title;
                let description1 = data[i].description;
                let trackId = data[i].id;
                let idName = data[i].permalink;
                let containerDiv = document.createElement('div');
                containerDiv.classList.add('container', 'episode-wrapper');
                let span = document.createElement('span');
                span.setAttribute('id', idName);
                span.classList.add('anchor');
                containerDiv.appendChild(span);
                let dateDiv = document.createElement('div');
                dateDiv.classList.add('row', 'date');
                
                
                let dateDivParagraph = document.createElement('p');
                dateDivParagraph.insertAdjacentHTML('beforeend', newDateString);
                
                let episodeTitleDiv = document.createElement('div');
                episodeTitleDiv.classList.add('episode-title');

                let episodeTitleDivH2 = document.createElement('h2');

                let episodeDescription = document.createElement('div');
                episodeDescription.classList.add('episode-description');

                let episodeDescriptionRow = document.createElement('div');
                episodeDescriptionRow.classList.add('row');

                let episodeDescriptionContainer = document.createElement('div');
                episodeDescriptionContainer.classList.add('container-fluid');

                let episodeIframeDiv = document.createElement('div');
                episodeIframeDiv.classList.add('episode');

                let iframe1 = '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + trackId + '&amp;color=%23b84e4e&amp;auto_play=false&amp;hide_related=true&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"></iframe>'

                root.appendChild(containerDiv);

                containerDiv.appendChild(dateDiv);

                containerDiv.appendChild(episodeTitleDiv);

                containerDiv.appendChild(episodeDescription);

                containerDiv.appendChild(episodeIframeDiv);
                dateDiv.appendChild(dateDivParagraph);
                episodeTitleDiv.appendChild(episodeTitleDivH2);
                episodeTitleDivH2.insertAdjacentHTML( 'beforeend', title );
                episodeDescription.appendChild(episodeDescriptionRow);
                episodeDescriptionRow.appendChild(episodeDescriptionContainer);
                episodeDescriptionContainer.insertAdjacentHTML('beforeend', description1);
                episodeIframeDiv.insertAdjacentHTML('beforeend', iframe1);
            }

            for(let j=0; j < data.length; j++) {
                let idName = data[j].permalink;
                let title = data[j].title;
                var sidebar = document.querySelector('.quick-links');
                var link = document.createElement('a');
                var li =  document.createElement('li');
                sidebar.appendChild(link);
                link.appendChild(li);
                li.insertAdjacentHTML('beforeend',title);
                link.href="#" + idName;
            }

        });
    });
};


