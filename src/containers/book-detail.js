import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component {

    render() {
        if(this.props.book == null){
            return(
                <div>
                    Please select atleast one book..!
                </div>

            );
        }
        return(
            <div>
                <h2>Title</h2>
                {this.props.book.title}
                <h2>Total pages</h2>
                {this.props.book.pages}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book : state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);