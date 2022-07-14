import React from 'react'

export default function Newsitem (props){
   
        // let {title,description,imgurl,newsurl}= props; //i can use this idf i dont wanna use props.item everytime 
        return (
            <div>
                <div className="card " >
                    <img src={props.imgurl?props.imgurl:"https://www.vskills.in/certification/blog/wp-content/uploads/2015/01/structure-of-a-news-report.jpg"} className="card-img-top" alt="..."/>
                        <div className="card-body my-2">
                            <h5 className="card-title">{props.title} </h5>
                            <p className="card-text">{props.description}</p>
                            <a rel="noreferrer" href={props.newsurl} target="_blank" className="btn btn-dark">Red More</a>
                        </div>
                </div>
            </div> 
        )
    
}
