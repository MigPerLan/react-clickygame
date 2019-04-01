import React from 'react';

class Jumbotron extends React.Component {
    render() {
        return (


            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                       <h1 className="display-4">Shaq Soda Clicky Game</h1>
                       <p>Click on some refreshing Shaq Soda to start the game!</p>
                        <h2 className="display-4">{this.props.score()}</h2>
                        
                    </div>
                </div>
            </div>
        );
    }



};

export default Jumbotron;