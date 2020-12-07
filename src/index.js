import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app/App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './app/store'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import blue from '@material-ui/core/colors/blue'
import pink from '@material-ui/core/colors/pink'

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
    type: 'dark',
  },
})

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
