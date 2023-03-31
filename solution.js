import React from 'react'
import logo from './logo.svg'
import './App.css'
import { useState, useEffect } from 'react'

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {

        const url = 'https://bfhldevapigw.healthrx.co.in/wp-cms/v1/posts/'

        fetch(url).then((resp) => {
            return resp.json()
        }).then((resp_data) => {
            setData(resp_data.results);
            
            console.log(resp_data.results);



        })
    }, [])


    return (
        <div>
        <h1> hello </h1>
        {
            data.map((ele)=>{
                return<List 
                key ={ele.id}
                  title={ele.title}
                    slug ={ele.slug}
                     url ={ele.image.url}
                author ={ ele.author.name}
    
    
                />
        })
    }



        </div>

    )
}

function List({ key ,title, slug , url, author}) {
    return (
        <div>
            <ul>
                <li>
                 title :<h2> {title}</h2>
                </li>
                
                <li>
                 slug: {slug}
                </li>
                <li>
                 <div>
                 <h4> image : </h4>
                 <img src={url} width="200px" />
                 </div>
                </li>
                <li>
                 author : { author}
                </li>

            </ul>
        </div>
    )
}
export default App
