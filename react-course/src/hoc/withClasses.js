import React, { Component }from 'react'

const withClasses = (WrappedComponent, className) => {
    
    return class extends Component {
        render() {
            return(
                <div className={className}>
                    <WrappedComponent {...this.props} />
                </div>
            )
        }
    }
}

export default withClasses;