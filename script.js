if (!localStorage.getItem('data')) {
    const data = [
        {
            text: 'test',
            author: 'test',
            id: ''
        },
        {
            text: 'test',
            author: 'test',
            id: ''
        },
        {
            text: 'test',
            author: 'test',
            id: ''
        },
        {
            text: 'test',
            author: 'test',
            id: ''
        },
        {
            text: 'test',
            author: 'test',
            id: ''
        },
        {
            text: 'test',
            author: 'test',
            id: ''
        },
        {
            text: 'test',
            author: 'test',
            id: ''
        }, {
            text: 'test',
            author: 'test',
            id: ''
        }, {
            text: 'test',
            author: 'test',
            id: ''
        },
        {
            text: 'test',
            author: 'test',
            id: ''
        },


    ]
    localStorage.setItem('data', JSON.stringify(data))
}
const data = eval(localStorage.getItem('data'))
const root = () => {
    const posts = document.querySelector('.posts')
    posts.innerHTML = ''
    document.querySelector('.preloader').style.display = 'flex'
    setTimeout(()=>{
        document.querySelector('.preloader').style.display = 'none'
    }, 500)

    for (let i = 0; i < data.length; i++) {
        const post = document.createElement('div')
        const author = document.createElement('h3')
        const text = document.createElement('p')
        const remove = document.createElement('div')
        const span = document.createElement('span')
        author.innerText = data[i].author
        text.innerText = data[i].text
        span.innerText = 'delete'
        author.className = 'author'
        text.className = 'text'
        span.className = 'material-symbols-outlined'
        remove.className = 'delete'
        post.className = 'post'
        remove.addEventListener('click', (e) => {
            data.shift(i)
            e.stopPropagation()
            localStorage.setItem('data', JSON.stringify(data))
            root()
        })
        remove.appendChild(span)
        post.appendChild(author)
        post.appendChild(text)
        post.appendChild(remove)
        post.addEventListener('click', ()=>{
            const letter_back = document.querySelector('.letter_back')
            letter_back.style.display = 'flex'
            letter_back.addEventListener('click', ()=>{
                letter_back.style.display = 'none'
            })
            document.querySelector('.letter').addEventListener('click', (e)=>{
                e.stopPropagation()
            })
            document.querySelector('.closed').addEventListener('click', ()=>{
                letter_back.style.display = 'none'
            })
            const letter = document.querySelector('.letter_content')
            letter.innerHTML = ''
            const author = document.createElement('h2')
            author.innerText = 'Автор: ' +data[i].author
            const text = document.createElement('p')
            const h3 = document.createElement('h3')
            h3.innerText = 'Текст литса: '
            text.innerText =  data[i].text
            letter.appendChild(author)
            letter.appendChild(h3)
            letter.appendChild(text)
        })
        posts.appendChild(post)

    }

    document.querySelector('.add').addEventListener('click', () => {
        document.querySelector('.modal').style.display = 'flex'
        document.querySelector('.modal_author').value = ''
        document.querySelector('.modal_text').value = ''
    })

    document.querySelector('.modal').addEventListener('click', () => {
        document.querySelector('.modal').style.display = 'none'
    })
    document.querySelector('.modal_block').addEventListener('click', (e) => {
        e.stopPropagation()
    })
    document.querySelector('.modal_closed').addEventListener('click', () => {
        document.querySelector('.modal').style.display = 'none'
    })

}
document.querySelector('.modal_block button').addEventListener('click', () => {
    document.querySelector('.modal').style.display = 'none'
    const author = document.querySelector('.modal_author').value
    const text = document.querySelector('.modal_text').value
    data.push({
        text: text,
        author: author,
        id: Date.now()
    })
    localStorage.setItem('data', JSON.stringify(data))
    root()
})
root()
