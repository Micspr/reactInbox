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
      selectedMessages: new Set(),
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
  }

  handleStarred(id, bool) {
    axios.patch(`http://localhost:8082/api/messages/${id}`, {starred: bool})
    .then(this.updateMessages())
    .catch()
  }

  handleSelected(id) {
    let updatedSet
    if(this.state.selectedMessages.has(id)) {
      updatedSet = this.state.selectedMessages
      updatedSet.delete(id)
    } else {
      updatedSet = this.state.selectedMessages.add(id)
    }
    return this.setState({selectedMessages: updatedSet})
  }

  amountSelected() {
    return this.state.selectedMessages.size
  }

  selectAll() {
    if(this.state.selectedMessages.size === this.state.messages.length) {
      return this.setState({selectedMessages: new Set()})
    } else {
      const updatedSet = this.state.selectedMessages
      this.state.messages.map(message => updatedSet.add(message))
      return this.setState({selectedMessages: updatedSet})
    }
  }

  render() {
    if(this.isLoading) {
      return <Spinner/>
    }
    return (
      <div>
        {this.state.messages.map(message => <Message key={message.id} {...message} selected={this.state.selectedMessages}/>)}
      </div>
    )
  }
}

export default MessageList