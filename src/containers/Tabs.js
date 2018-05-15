import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import Button from '../components/Button'

class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.tabItems = []
  }

  componentDidMount() {
    this.setArrowPosition()
  }

  state = {
    selected: 0,
  }

  setArrowPosition() {
    const activeTabItem = this.tabItems[this.state.selected]
    const top =
      activeTabItem.getBoundingClientRect().top +
      activeTabItem.getBoundingClientRect().height / 2 -
      this.tabList.getBoundingClientRect().top
    this.tabsArrow.style.transform = `translateY(${top}px)`
  }

  handleItemClick = (index, e) => {
    e.preventDefault()
    this.setState({
      selected: index,
    })
  }

  renderTabPanes = () => {
    this.tabItems[this.state.selected] !== undefined && this.setArrowPosition()
    return (
      <div className="tabs-left__content tabs-component__tabs">
        <div
          className="tabs-component__tab-arrow tabs-left__arrow"
          ref={element => {
            this.tabsArrow = element
          }}
        />
        <div className="tabs-component__tab">
          {this.props.children[this.state.selected]}
        </div>
      </div>
    )
  }

  renderTabList = () => {
    return (
      <ul
        ref={element => {
          this.tabList = element
        }}
        className="tabs-left__list list-tabs tabs-component__links"
      >
        {this.props.children.map((element, index) => {
          const active = index === this.state.selected
          return (
            <li
              key={index}
              className={classNames('list-tabs__item', { active: active })}
              ref={element => {
                this.tabItems[index] = element
              }}
            >
              <Button
                onClick={this.handleItemClick.bind(this, index)}
                className="list-tabs__link"
              >
                {this.props.children[index].props.title}
              </Button>
            </li>
          )
        })}
      </ul>
    )
  }

  render() {
    return (
      <div className="tabs-component tabs-left">
        {this.renderTabList()}
        {this.renderTabPanes()}
      </div>
    )
  }
}

Tabs.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
}

export default Tabs
