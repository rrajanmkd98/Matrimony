import react from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
class Cards extends react.Component {

    confirm=(id) =>{
        this.props.history.push("/details/"+id)
    }

    render() {
        return (
            <div className="card-parent">
            {this.props.details ? this.props.details.map((data,i)=>(
                <div className="card" key={i}>
                    <div className="card-image">
                    <img className="img-size" src={data.image} alt={"**"}/>
                    </div>
                    <p className="name">{data.name}</p>
                    <p className="bio">{data.bio}</p>
                    <div className="buttonParent">
                        <Button onClick={()=>{this.confirm(data.id)}} className="btn btn-warning">Yes</Button>
                        <Button color="warning">No</Button>
                    </div>
                </div>
            )):[]}
            </div>
        );
    }
}
export default Cards;