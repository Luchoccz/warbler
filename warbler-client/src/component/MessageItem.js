import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import DefaultProfileImg from '../images/default-profile-image.jpg';

const MessageItem = ({ date, profileImgUrl, text, username, removeMessage, isCorrectUser }) => (
  <div>
      <li className="list-group-item">
      <img src={ profileImgUrl || DefaultProfileImg} alt={ username } height="100" width="100" className="timeline-image" />
        <div className="message-area">
            <Link to="/">@{ username } &nbsp;</Link>
            <span className="text-muted">
              <Moment className="text-muted" format="Escribir MMM YYY">
                { date }
              </Moment>
            </span>
          <p>{ text }</p>
          { isCorrectUser && (
            <button className="btn btn-danger" onClick={removeMessage}>
            Borrar
            </button>
          )
           }
        </div>
      </li>
  </div>
)

export default MessageItem;