import react from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import data from "../src/data.json";

class CardDetails extends react.Component {
    constructor(props){
        super(props);
        this.state={
            cardId:""
        }
    }
    componentDidMount(){
        const {
            match: { params }
        } = this.props;
        this.setState({
            cardId:parseInt(params.id)
        });
    }

    confirm=(data) =>{
        console.log(data)
    }

    render() {
        console.log(data)
        let details = data.list && data.list.length !== 0 ? data.list.filter(item => item.id === this.state.cardId):"";
        console.log(details)
        return (
            <div className="card-parent ">
             {details ? details.map((data,i)=>(
                <div className="card" key={i}>
                    <div className="card-image">
                      <img className="img-size" src={data.image} alt={"*"}/>
                    </div>
                    <p className="name">{data.name}</p>
                    <p className="bio">{data.bio}</p>
                </div>
            )):[]}
            </div>
        );
    }
}
export default CardDetails;