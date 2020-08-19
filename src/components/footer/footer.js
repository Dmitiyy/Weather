import React from 'react';
import './footer.css';
import './media.css';

class Footer extends React.Component {
    render(){
        const data = [
            {title: 'PARIS', func: this.props.getParis},
            {title: 'LONDON', func: this.props.getLondon},
            {title: 'KRYVYI RIH', func: this.props.getKr}
        ]
        return(
            <footer className="footer">
                {
                    data.map((item, i) => {
                        return (
                            <div onClick={item.func} key={i} className="block_foot">
                                {item.title}
                            </div>
                        )
                    })
                }
            </footer>
        )
    }
}
export default Footer;