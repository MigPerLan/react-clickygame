import React from "react";


class Imgs extends React.Component {

    state = {
        score: 0,
        imgArray: [
            "https://i.imgur.com/b22hoNL.jpg",
            "https://i.imgur.com/BOdRCxI.jpg",
            "https://i.imgur.com/yRPMOqQ.jpg",
            "https://i.imgur.com/XQbWfGj.jpg",
            "https://i.imgur.com/oNKkES9.jpg",
            "https://i.imgur.com/U2rzVdl.jpg",
            "https://i.imgur.com/qKYMzKW.jpg",
            "https://i.imgur.com/Y9abwVx.jpg",
            "https://i.imgur.com/umNNCxM.jpg",
            "https://i.imgur.com/uImwRjW.jpg",
            "https://i.imgur.com/Zeju7er.jpg",
            "https://i.imgur.com/WakL92w.jpg"
        ],
        idArray: []
    };  

    lose = ()=>{
        this.setState({
            score: 0,
            idArray: []
        })
    }

    handleIncrement = (id, idArray, event) => {
        if (idArray) {
            console.log('clicked twice')
            this.lose();
            this.setState(this.props.shuffle(this.state.imgArray));
        }
        else {
            this.state.idArray.push(id)
            this.setState({score: this.state.score + 1})
            this.setState(this.props.shuffle(this.state.imgArray))
            console.log(this.state.idArray);
        }

    }

    check = e =>{
        const id = e.target.id;
        const idArray = this.state.idArray.includes(id);
        this.handleIncrement(id, idArray)
        console.log("its checking")
    };


    render() {


        return (

            <div className="bg-light">
                <div className="text-center">
                    <p>Score: {this.state.score}/12</p>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <img className="img-thumbnail mx-auto" id={this.state.imgArray[0]} src={this.state.imgArray[0]} onClick={this.check} alt="shaq soda" type="button" height="150" width="150"></img>
                    </div>
                    <div className="col-sm-3">
                        <img className="img-thumbnail mx-auto" id={this.state.imgArray[1]} src={this.state.imgArray[1]} onClick={this.check} alt="shaq soda" type="button" height="150" width="150"></img>
                    </div>
                    <div className="col-sm-3">
                        <img className="img-thumbnail mx-auto" id={this.state.imgArray[2]} src={this.state.imgArray[2]} onClick={this.check} alt="shaq soda" type="button" height="150" width="150"></img>
                    </div>
                    <div className="col-sm-3">
                        <img className="img-thumbnail mx-auto" id={this.state.imgArray[3]} src={this.state.imgArray[3]} onClick={this.check} alt="shaq soda" type="button" height="150" width="150"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <img className="img-thumbnail mx-auto" id={this.state.imgArray[4]} src={this.state.imgArray[4]} onClick={this.check} alt="shaq soda" type="button" height="150" width="150"></img>
                    </div>
                    <div className="col-sm-3">
                        <img className="img-thumbnail mx-auto" id={this.state.imgArray[5]} src={this.state.imgArray[5]} onClick={this.check} alt="shaq soda" type="button" height="150" width="150"></img>
                    </div>
                    <div className="col-sm-3">
                        <img className="img-thumbnail mx-auto" id={this.state.imgArray[6]} src={this.state.imgArray[6]} onClick={this.check} alt="shaq soda" type="button" height="150" width="150"></img>
                    </div>
                    <div className="col-sm-3">
                        <img className="img-thumbnail mx-auto" id={this.state.imgArray[7]} src={this.state.imgArray[7]} onClick={this.check} alt="shaq soda" type="button" height="150" width="150"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <img className="img-thumbnail mx-auto" id={this.state.imgArray[8]} src={this.state.imgArray[8]} onClick={this.check} alt="shaq soda" type="button" height="150" width="150"></img>
                    </div>
                    <div className="col-sm-3">
                        <img className="img-thumbnail mx-auto" id={this.state.imgArray[9]} src={this.state.imgArray[9]} onClick={this.check} alt="shaq soda" type="button" height="150" width="150"></img>
                    </div>
                    <div className="col-sm-3">
                        <img className="img-thumbnail mx-auto w-100" id={this.state.imgArray[10]} src={this.state.imgArray[10]} onClick={this.check} alt="shaq soda" type="button" height="150" width="100%"></img>
                    </div>
                    <div className="col-sm-3">
                        <img className="img-thumbnail mx-auto w-100" id={this.state.imgArray[11]} src={this.state.imgArray[11]} onClick={this.check} alt="shaq soda" type="button" height="150" width="100%"></img>
                    </div>
                </div>
            </div>
        );
    }


};


export default Imgs;