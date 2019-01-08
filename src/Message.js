import React, {Component} from 'react'

class Message extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: false
    }
  }

  messageIsSelected() {
    return this.props.selected.has(this.props.id)
  }

  messageClassList() {
    return (
      `row message ${(this.props.read) ? 'read' : 'unread'} 
      ${(this.messageIsSelected()) ? 'selected' : null}`
    )
  }

  messageIsStarred() {
    return `star fa ${(this.props.starred) ? 'fa-star' : 'fa-star-o'}`
  }

  expandMessage() {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  messageIsExpanded() {
    return (
      <div class="row message-body">
        <div class="col-xs-11 col-xs-offset-1">
          {this.props.body}
        </div>
      </div>
    )
  }

  render() {
    return(
      <div>
      <div className={this.messageClassList()} onClick={() => this.expandMessage()}>
        <div className="col-xs-1">
          <div className= "row">
            <div className= "col-xs-2">
              {(this.props.selected.has(this.props.id)) ?
                <input type="checkbox" checked="checked"/> :
                <input type="checkbox"/>
              }
            </div>
            <div className="col-xs-2">
              <i className={this.messageIsStarred()}></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          {(this.props.labels.includes('dev')) ?
            <span className="label label-warning">dev</span> :
            null
          }
          {(this.props.labels.includes('gschool')) ?
            <span className="label label-warning">gschool</span> :
            null
          }
          {(this.props.labels.includes('personal')) ?
            <span className="label label-warning">personal</span> :
            null
          }
          <a href="#">
            {this.props.subject}
          </a>
        </div>
      </div>
      {(this.state.expanded) ?
        this.messageIsExpanded() :
        null
      }
      </div>
    )
  }
}

export default Message