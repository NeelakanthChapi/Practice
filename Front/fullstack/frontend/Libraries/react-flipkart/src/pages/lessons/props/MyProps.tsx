export let MyProps:React.FC<{}>=()=>{
    return <div>
        <h1>Prop</h1>
        <p>Props stand for "Properties." They are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It gives a way to pass data from one component to other components. It is similar to function arguments.</p>
       {Check({a:"watch"})} 
       <Check a={"car"}/>
        </div> 
}

let Check:React.FC<{a:any}>=(props)=>{
    return <h2>{props.a}</h2>
}