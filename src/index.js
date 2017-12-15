import React from 'react'
import ReactDom,{render} from 'react-dom'
import App from './components/app.js'

const rootElement = document.getElementById('container')
ReactDOM.render(
	<App/>,
	rootElement	
)