import { h, Component } from 'preact';

export default class ChatTitleMsg extends Component {

    render({isOpened, conf},{}) {
        return (
            <div style={{position: 'relative', cursor: 'pointer'}} onClick={this.props.onClick}>
                <div 
                    className="desktop-closed-message"
                    style={{
                        background: conf.mainColor,
                        letterSpacing: '1px',
                        color: '#fff',
                        display: 'block',
                        position: 'absolute',
                        fontSize: '14px',
                        top: 0,
                        right: '10px',
                        //marginTop: '23px',
                        borderRadius: '5px',
                        padding: '8px 10px',
                        boxShadow: '#8e8d8d -3px 2px 20px',
                    }}
                >
                    {conf.introMessage}
                </div>
            </div>
        );
    }
}
