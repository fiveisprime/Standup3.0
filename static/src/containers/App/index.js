import React from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/* application components */
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

/* global styles for app */
import './styles/app.scss';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
    static propTypes = {
        children: React.PropTypes.node,
    };

    render() {
        darkBaseTheme.palette.primary1Color = "#2196f3";
        
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <section>
                    <Header />
                    <div
                      className="container"
                      style={{ marginTop: 10, paddingBottom: 250 }}
                    >
                        {this.props.children}
                    </div>
                    <div>
                        <Footer />
                    </div>
                </section>
            </MuiThemeProvider>
        );
    }
}

export { App };