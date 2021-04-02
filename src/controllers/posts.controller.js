import view from "../views/posts.html";


const getPosts=async()=>{
 
    const response =  await  fetch('https://jsonplaceholder.typicode.com/posts');

    return await response.json();


}

export default async()=>{


    const element = document.createElement('div');
    element.innerHTML= view;

    const postsElements= element.querySelector('#posts');
    let postsTotal= element.querySelector('#total');

    const posts = await getPosts();

    postsTotal.innerHTML = posts.length

    console.log(posts);

    posts.forEach(post => {

      postsElements.innerHTML+=`
      <li class="list-group-item border-primary bg-dark"> 
        <h5>${post.title} </h5>
        <p>${post.id}</p>
        <p>${post.body}</p>
      </li>`;


        
    });

   

    return element;

};