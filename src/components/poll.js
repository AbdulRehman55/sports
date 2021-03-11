    import React,{Component} from 'react';
    const URL_HOME='http://localhost:3000/teams';

    class Poll extends Component{
        constructor(props){
        super(props)
        this.state={
            pollTeams:[]
        }

        }

        fetchpoll(){
            fetch(`${URL_HOME}?poll=true&_sort=count&_order=desc`,{method:'GET'})

            .then(response=>response.json())
            .then(json=>{
                this.setState({
                    pollTeams:json
                })
            })
        }

       componentDidMount(){
           this.fetchpoll()
       }
       addcount(count,id){
           fetch(`${URL_HOME}/${id}`,{
               method:"PATCH",
               headers:{
                   'Accept':'application/json',
                   'Content-type':'application/json'
               },
               body:JSON.stringify({count:count+1})
        }
           )
           .then(()=>{this.fetchpoll()}
           )
       }


        renderpoll(){
            const position=['1st','2nd','3rd']

            return this.state.pollTeams.map((item,index)=>{
                return(
                    <div key={item.id} className="poll_item" 
                    onClick={()=>this.addcount(item.count,item.id)}
                    
                    >
                        <h4>{position[index]}</h4>
                            <div>{item.count} votes</div>
                        <img alt={item.name} src={`/images/teams/${item.logo}`}
                        />
                            

                    </div>
                )

            }
            )

        }

        render(){
            return(
                <div className="home_poll">
                    <h3>Who will be the next champion ?</h3>
                    <div className="poll_container">
                        {this.renderpoll()}
                    </div>

                </div>
            )
        }












    }
    export default Poll;