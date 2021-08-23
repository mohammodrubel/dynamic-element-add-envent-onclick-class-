document.getElementById('add-border').addEventListener('click',function(){
    const friendContainer = document.getElementById('friendContainer')
    friendContainer.style.border='3px solid red'
    friendContainer.style.padding='30px'
})
function addBackgroundColo(){
    const friends = document.getElementsByClassName('friend')
    for (const friend of friends){
    friend.style.backgroundColor='blue'
}
}
document.getElementById('add-friend').addEventListener('click',function(){
    const friendContainer = document.getElementById('friendContainer')
    const newFriend = document.createElement('div')
    newFriend.classList.add('friend')
    newFriend.innerHTML=`
    <h3>Friend - 1 </h3>
    <p>Lorem, ipsum dolor. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit veritatis nemo necessitatibus culpa voluptates. Nisi, ipsa a, perspiciatis similique sapiente consequatur dolorem molestiae voluptas obcaecati, dicta molestias mollitia aut animi? </p>
    `
    friendContainer.appendChild(newFriend)

})