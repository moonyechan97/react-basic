import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BtnEventComponent extends Component {
    constructor(props) {
        console.log('순서-constructor');
        super(props);
        this.state = { count: props.count }; //BtnEventComponent.jsx 파일에 코드 추가
        this.clickEvent = this.clickEvent.bind(this);//this를 바인딩하면, clickEvent함수에서 this를 사용할 수 있다

    }
    clickEvent() {
        //state 변경 let count = this.state.count + 1;
        //ADD(2,3); prevState => (); 람다형식의 함수=축약함수=화살표함수=Arrow함수
        // function(prevState) {}
        this.setState(prevState => ({
            count: prevState.count + 1,
        })
        );
    } //setState로 변경해야 화면에 렌더링 된다.

    componentWillMount() {
        console.log('순서- componentWillMount');
    }

    componentDidMount() {
        console.log('순서- componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('순서- componentWillReceiveProps');
        this.setState({ count: nextProps.count });//추가부분
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('순서- shouldComponentUpdate');
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('순서- componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('순서- componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('순서- componentWillUnmount');
    }

    render() {
        console.log('순서- render');
        const { nodeValue } = this.props;
        return (
            <div>
                <p>카운트: {this.state.count}</p>
                <button onClick={this.clickEvent}>카운트 증가</button>
                {nodeValue}
                {this.props.children}{/** 자식노드 출력 */}
            </div>
        );
    }
}

BtnEventComponent.propTypes = {

};

export default BtnEventComponent;