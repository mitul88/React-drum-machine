import React from "react";

class DrumPad extends React.Component {
    constructor(props) {
        super(props);

        this.audio = React.createRef();
    }

    componentDidMount() {
        this.audio.current.addEventListener('ended', () => {
            const parent = this.audio.current.parentNode;
            parent.classList.remove('active');
          })
    }
    playSound =()=> {
        this.audio.current.play();

        const id = this.audio.current.id;

        const parent = this.audio.current.parentNode;
        parent.classList.add('active');

        const display = parent.parentNode;
        display.querySelector('h1').innerText = `${id} is pressed`;
    }


    render() {
        const { text, audio } = this.props;
    return (
        <div id={`drum-{text}`} className="drum-pad" onClick={this.playSound}>
            {text}
            <audio ref={this.audio} src={audio} className="clip" id={text} />
        </div>
        )
    }    
}

export default DrumPad;