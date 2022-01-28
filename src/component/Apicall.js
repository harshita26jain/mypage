// import React, { Component } from "react";
 
//class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state={
    //         items: [],
    //         isLoaded: false,
    //     }
    // }

    // componentDidMount() {
    //     fetch('https://gnews.io/api/v4/top-headlines?token=dbfdf1f82e13569655d05c666c1b0563')
    //         .then(res => res.json())
    //         .then(json => {
    //             this.setState({
    //                 isLoaded:true,
    //                 items:json,
    //             })

    //         });

    // }

    // render()
    
    // {
    //     var {isLoaded,items} = this.state;

    //     if(!isLoaded){
    //         return <div> loading...</div>
    //     }
    //     else{
    
    //     return(
    //         <div className="App">
    //            <ul>
    //                {items.map(item => [
    //                   <li key={item.id} > 
    //                   {item.title},{item.description}, {item.url},{item.image},{item.publishedAt},{item.source}
                      
//                       </li>
//                    ])};
//                </ul>
//             </div>
//         );
//         }
//     }

// }
//  export default App;