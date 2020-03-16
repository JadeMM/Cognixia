import React from 'react'
function sectionWrapper(WrappedComponent) {
  // ...and returns another component...
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props

      return <section>
                <WrappedComponent {...this.props} />
             </section>;
    }
  };
}

export default sectionWrapper;