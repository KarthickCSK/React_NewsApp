import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
import {Router, Route, hashHistory,browserHistory,IndexRoute} from 'react-router';
const style = {
	margin: 40,
	textAlign: 'center',
	display: 'inline-block',
	minWidth:500,
};

const styles = {
	button: {
		margin: 40,
	}
};

var key=[];var newsName=[];
export default class Login extends React.Component {

	constructor (props) 
	{
		super(props);
	}
	loginUser()
	{

		var obj={username:this.refs.username.getValue(),
			password:this.refs.password.getValue()
		}
		$.ajax({
			url:" http://localhost:8080/users/main",
			type: "POST",
			data: obj,
			success:function(data)
			{
				alert('successfully logged in');
				browserHistory.push('/index');
			}.bind(this),
			error: function(err){
				alert('check username and password');
			}
		});
	}
	render () 
	{
		return (
			<div>
			<h1>Login</h1>
			<Paper zDepth={5} style={style}>
			<TextField
			hintText="Username"
			floatingLabelText="Enter Username"
			ref="username"/>
			<Divider />
			<TextField
			hintText="Password"
			floatingLabelText="Enter Password"
			type="password"
			ref="password"/>
			<Divider />
			<RaisedButton label="LoginButton" primary={true} style={style} onTouchTap={this.loginUser.bind(this)}/>
			</Paper><br/>
			</div>

			);
	}
}//end of class

