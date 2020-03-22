import {CssBaseline} from "@material-ui/core";
import {makeStyles, Theme, ThemeProvider} from "@material-ui/core/styles";
import {default as React} from "react";
import Themes from "../../theme";
import Layout from "../Layout/Layout";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column"
    }
}));

const App: React.FC<{}> = () => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={Themes.light}>
            <div className={classes.root}>
                <CssBaseline/>
                <Layout/>
            </div>
        </ThemeProvider>
    );
};

export default App;
