import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    const singlePost = posts.map((post)=>{
        return <Article key={post.id} date={post.date} title={post.title} preview={post.preview}/>
    })
    return(
        <main>
            {singlePost}
        </main>
    )
}

export default ArticleList