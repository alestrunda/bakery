import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

class Tabs extends React.Component {
    state = {
        selected: 0
    }

    constructor(props) {
        super(props)
        this.tabItems = []
    }

    componentDidMount() {
        this.setArrowPosition();
    }

    setArrowPosition() {
        const tabItemActive = this.tabItems[this.state.selected]
        const top = tabItemActive.getBoundingClientRect().top + tabItemActive.getBoundingClientRect().height / 2 - this.tabList.getBoundingClientRect().top
        this.tabsArrow.style.transform = `translateY(${top}px)`
    }

    handleItemClick = (index, e) => {
        e.preventDefault();
        this.setState({
            selected: index
        })
    }

    renderTabPanes = () => {
        this.tabItems[this.state.selected] !== undefined && this.setArrowPosition();
        return (
            <div className="tabs-left__content tabs-component__tabs">
                <div className="tabs-component__tab-arrow tabs-left__arrow" ref={(element) => {this.tabsArrow = element}}></div>
                <div className="tabs-component__tab">
                    {this.props.children[this.state.selected]}
                </div>
            </div>            
        )
    }

    renderTabList = () => {
        return (
            <ul ref={(element) => {this.tabList = element}} className="tabs-left__list list-tabs tabs-component__links">
                {this.props.children.map((element, index) => {
                    const active = index === this.state.selected
                    return (
                        <li key={index}
                            className={classNames("list-tabs__item", {"active" : active})}
                            ref={(element) => {this.tabItems[index] = element}}
                        >
                            <button onClick={this.handleItemClick.bind(this, index)} className="list-tabs__link">{this.props.children[index].props.title}</button>
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
    children: PropTypes.array.isRequired,
}

export default Tabs;