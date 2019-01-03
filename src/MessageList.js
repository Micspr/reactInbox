import React, {Component} from 'react'
import Message from './Message'
import axios from 'axios'
import Spinner from 'reactjs-simple-spinner'

class MessageList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      messages: [
        {
          id: 0,
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

  updateMessages() {
    axios.get('http://localhost:8082/api/messages')
      .then(response => this.setState({messages: response.data, isLoading: false}))
      .catch()
  }

  componentDidMount() {
    this.updateMessages()
    this.state.messages.map(message => message = {...message, selected: false, expanded: false})
  }

  wasStarred(id) {

  }

  wasSelected(id) {

  }

  render() {
    if(this.isLoading) {
      return <Spinner/>
    }
    return (
      <div>
        {this.state.messages.map(message => <Message key={message.id} {...message}/>)}
      </div>
    )
  }
}

export default MessageList