import React, {Component} from 'react'
import axios from 'axios'
import Spinner from 'reactjs-simple-spinner'

class MessageList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      messages: [
        {
          subject: '',
          read: false,
          starred: false,
          labels: [],
          body: ''
        }
      ],
      isLoading: true
    }
  }

  render() {

    return (
    <div>
      
    </div>
    )
  }
}

export default MessageList