const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const PostsContainerEl = document.getElementById("posts")
let postslist = ""
    
for (let i = 0; i < posts.length; i++) {
    postslist += createPost(i)
}

PostsContainerEl.innerHTML = postslist
    
function createPost (elnum) {
    let post = ""
    post = `
        <div class="post">
            <div class="post-header">
                <a href="#">
                    <span class="visually-hidden">Link to the user profile</span>
                    <img class="avatar" src=${posts[elnum].avatar} alt="Avatar of the user who published the post">
                </a>
                <div class="user-information">
                    <a href="#" class="name">${posts[elnum].name}</a>
                    <p class="location light-text">${posts[elnum].location}</p>
                </div>
            </div>
            <div class="post-img">
                <img class="main-img" src=${posts[elnum].post} alt="User selfie published by the author">
            </div>
            <div class="post-footer">
                <ul class="actions-list">
                    <li class="action-item">
                        <button class="btn btn-like" id="addlike">
                                <svg width="27" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m3.846 13.581 8.95 9.635c.461.496 1.246.496 1.707 0l8.95-9.635c2.462-2.65 2.462-6.945 0-9.594-2.46-2.65-6.45-2.65-8.912 0l-.038.04a1.165 1.165 0 0 1-1.707 0l-.037-.04c-2.462-2.65-6.452-2.65-8.913 0-2.461 2.65-2.461 6.945 0 9.594Z" stroke="currentColor" stroke-width="2.33"/>
                                </svg>
                        </button>
                    </li>
                    <li class="action-item">
                        <button class="btn btn-message">
                            <svg width="25" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="a" maskUnits="userSpaceOnUse" x=".3" y="-.319" width="24" height="24" fill="#000"><path fill="#fff" d="M.3-.319h24v24H.3z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M19.59 18.212a9.291 9.291 0 0 0 2.363-6.204 9.327 9.327 0 1 0-4.487 7.975l2.625.563-.5-2.334Z"/></mask><path d="m19.59 18.212-1.739-1.55-.787.883.248 1.156 2.278-.489Zm-2.124 1.77.488-2.277-.907-.195-.792.482 1.21 1.99Zm2.625.564-.489 2.278 3.523.756-.756-3.523-2.278.489Zm-.468-8.538a6.962 6.962 0 0 1-1.772 4.654l3.478 3.101a11.622 11.622 0 0 0 2.954-7.755h-4.66Zm-6.997-6.997a6.997 6.997 0 0 1 6.997 6.997h4.66C24.283 5.57 19.064.351 12.626.351v4.66ZM5.63 12.008a6.997 6.997 0 0 1 6.996-6.997V.351C6.19.351.97 5.571.97 12.008h4.66Zm6.996 6.997a6.997 6.997 0 0 1-6.996-6.997H.97c0 6.438 5.219 11.657 11.656 11.657v-4.66Zm3.629-1.013a6.954 6.954 0 0 1-3.629 1.013v4.66c2.211 0 4.285-.618 6.05-1.691l-2.421-3.982Zm.722 4.269 2.625.563.977-4.556-2.625-.563-.977 4.556Zm5.392-2.204-.5-2.333-4.557.977.5 2.334 4.557-.978Z" fill="currentColor" mask="url(#a)"/>
                            </svg>
                        </button>
                    </li>
                    <li class="action-item">
                        <button class="btn btn-comment">
                            <svg width="25" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m9.658 9.543 2.17 9.767a.582.582 0 0 0 1.068.173l9.912-16.519a.582.582 0 0 0-.5-.882H2.528c-.54 0-.79.673-.38 1.025l7.51 6.436Zm0 0 12.435-6.839" stroke="currentColor" stroke-width="2.33"/></svg>
                        </button>
                    </li>
                </ul>
                
                <div class="post-likes"><span class="likecount">${posts[elnum].likes}</span> likes</div>
                
                <div class="post-comments">
                    <a href="#" class="username">${posts[elnum].username}</a>
                    <span class="comment">${posts[elnum].comment}</span>
                </div>                
            </div>
        </div>
    `
    return post
}

const likeBtnArray = document.querySelectorAll(".btn-like")
const countLikeArray = document.querySelectorAll(".likecount")

for (let i = 0; i < likeBtnArray.length; i++) {
    likeBtnArray[i].addEventListener("dblclick", function() {
    posts[i].likes = posts[i].likes + 1
    countLikeArray[i].innerText = parseInt(countLikeArray[i].textContent) + 1  
    })
}
