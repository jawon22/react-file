
const Jumbotron = (props)=>{
    return(
        <div className="p-4 text-light bg-dark rounded">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
};

export default Jumbotron;