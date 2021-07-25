import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

import Header from 'components/Header';
import Register from 'components/Register';
import Footer from 'components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Register />
      <Footer />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
