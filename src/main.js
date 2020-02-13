const $btn = document.querySelector('#sendTxt');
const $inputValue = document.querySelector('#texto');
const userTitle = document.querySelector('#userTitle')

const userImg = document.querySelector('#userImg')
const userLocation = document.querySelector('#userLocation')
const userRep = document.querySelector('#userRep')
const userFollowers = document.querySelector('#userFollowers')
const userFollowing = document.querySelector('#userFollowing')

$btn.addEventListener('click',  (e) =>{
    e.preventDefault()
    document.querySelector('.card').style.display = "flex"
    document.querySelector('#userLink').style.display = 'inline-block'

    getUser()
})

$inputValue.addEventListener('keypress',  (e) => {
    if (e.key === "Enter") {
        document.querySelector('.card').style.display = "flex"
        document.querySelector('#userLink').style.display = 'inline-block'

        getUser()
    }
})

    const getUser = async () => {
        const userSearch = $inputValue.value
        const userResponse = await fetch(`https://api.github.com/users/${userSearch}`)
        const userJSON = await userResponse.json()
            userTitle.innerText = userJSON.name
            userImg.src = userJSON.avatar_url
            userLocation.innerText = userJSON.location
            userRep.innerText = userJSON.public_repos
            userFollowers.innerText = userJSON.followers
            userFollowing.innerText = userJSON.following
            document.querySelector('#userLink').href = userJSON.html_url
    }

const switchTheme = document.querySelector('#checkbox');

switchTheme.addEventListener( 'change', function() {
    if(this.checked) {
        document.querySelector('header').style.background = "#f4f4f4"
        document.querySelector('h1').style.color = "#000"
    } else {
        document.querySelector('header').style.background = "#282829"
        document.querySelector('h1').style.color= "#fff"
    }
});
