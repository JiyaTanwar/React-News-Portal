import React, { Component } from 'react';


// It is the code for card made using bootstrap
export class NewsUpdate extends Component {
  render() {
    let{title,description, imgUrl,newsUrl}=this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src={imgUrl} className="cardImgTop" alt="..." height="200px"></img>
            <div className="cardBody">
              <h5 className="cardTitle">{title}</h5>
              <p className="cardTxt">{description}...</p>
              <a rel="noreferral" href={newsUrl} className="btn btn-primary">Read</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsUpdate
