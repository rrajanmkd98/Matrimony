import react from "react";
import data from "../data.json";
import { Alert, Button } from 'react-bootstrap';

class CardGroup extends react.Component {
    constructor(props){
        super(props);
        this.state={
            list:"",
            status: false,
            message: ""
        }
    }
    componentDidMount(){
        this.setState({
            list: data.list
        })
    }
    tabClick = (id, value) =>{
         this.setState({
            list: this.state.list.filter(item=> item.id !== id),
            status: true,
            message: value
        }, ()=>{
            console.log(this.state.list)
        }) 
        setTimeout(() => {
            this.setState({
                status: false
            });
          }, 1000);
        
    }
    render() {
        return (
            <div className="App container">
            <div className="card-parent justify-content-md-center container">
            {this.state.list ? this.state.list.map((data,i)=>(
                <div className="card card-group-data" key={i}>
                    <div className="card-image">
                    <img className="img-size" src={data.image} alt={"**"}/>
                    </div>
                    <p className="name">{data.name}</p>
                    <p className="bio">{data.bio}</p>
                    <div className="buttonParent">
                        <div>
                        {this.state.status ? 
                        <div  className= {this.state.message ==="intrest"? "alert alert-success" :this.state.message ==="not_intrest"?"alert alert-danger":"alert alert-success" } >
                            {this.state.message ==="intrest"? "Intrested" :this.state.message ==="not_intrest"?"Not Intrested":"Shortlisted" }
                        </div>:""}
                        <i onClick={()=>{this.tabClick(data.id, "shortlist")}} class="fa fa-star"></i>
                        <span className="btn-align">
                            <Button onClick={()=>{this.tabClick(data.id, "intrest")}} className="btn btn-warning"> <i class="fa fa-check"></i></Button>
                            <Button onClick={()=>{this.tabClick(data.id, "not_intrest")}} color="warning"><i class="fa fa-close"></i></Button>
                        </span>
                        </div>
                    </div>
                </div>
            )):[]}
            </div>
            </div>
        );
    }
}
export default CardGroup;