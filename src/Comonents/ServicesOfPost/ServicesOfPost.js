export default class ServicesOfPost {
    url = 'https://jsonplaceholder.typicode.com/posts'
    async getAllPosts () {
         return await fetch(this.url).then(value => value.json()).then()
    }
    getPostId (id) {
        fetch(`${this.url}/${id}`).then(value => value.json())
    }

}