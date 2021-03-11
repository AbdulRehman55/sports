import React,{Component} from 'react';

class Subscriptions extends Component{
    constructor(props){
    super(props);
    this.state={
        email:'',
        error:false,
        success:false

    }

    }
    saveSubscription=(email)=>{
        const url_Email='http://localhost:3000/subcriptions'

        fetch(url_Email,{
            method:'post',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'

            },
            body:JSON.stringify({email})
        }).then(res=>res.json())
        .then(()=>{
            this.setState({
                email:'',
                success:true
        
            })




        })


    }
    clearMessages=()=>{
        setTimeout(function(){
            this.setState({
                error:false,
                success:false


            })
}.bind(this),3000)



    }



    handleSubmit=(event)=>{
        event.preventDefault();
        let email=this.state.email;
        let regex=/\S+@\S+\.\S+/;
        if(regex.test(email)){
            this.saveSubscription(email)

        }
        else{
            this.setState({error:true})
        }
        this.clearMessages()




    }
     onChangeInput=(event)=>{

        this.setState({
            email:event.target.value


        })
     }


    render(){
        return(
            
            <div className="subscribe_panel">
                <h3>Subscribe to us </h3>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type='text'
                        placeholder="youremail@gmail.com"
                        value={this.state.email}
                        onChange={this.onChangeInput}
                        
                        
                        />
                        <div className={this.state.error ? "error show":"error"}>Check your email</div>
                        <div className={this.state.success ? "success show":"success"}>Thank You!</div>
                    </form>


                </div>
                <small>
                Lorem Ipsum is simply dummy text of the printing and typesetting 
                 industry.<br/> Lorem Ipsum has been the industry's 
                 standard dummy text ever since the 1500s.

                </small>







            </div>










        )




    
    }
    








}
export default Subscriptions;