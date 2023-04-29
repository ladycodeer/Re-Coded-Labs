import react, {useState,useEffect} from "react";

function App (){
    const [image,setImage]=useState("")
    const [isLoading,setLoading]=useState(false)

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
          setImage(data["message"]);
          setLoading(true);
        });
    },[])

    return (
        <div>
            {(!isLoading) ? <p>Loading...</p>: null }
            {isLoading? <img src={image} alt="A Random Dog" />: null}
        </div>
    )
}

export default App