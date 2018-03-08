import { connect } from 'react-redux';
import MainComponent from './components/Main';

const MainWithRedux = connect(
  // `connect` recibe dos parámetros. El primero de ellos es
  // `mapStateToProps` que justamente lo que haces es mapear valores del state
  // a props que recibirá `MainComponent`
  function mapStateToProps(state) {
    // buscamos los 3 valores que nos interesan
    const products = state.AppReducer.products.filter(p => (
      // el checkbox esta prendido y `p.stocked === true`
      // si el checkbox esta apagado siempre true
      (state.inStockOnly ? p.stocked : true) &&
      // y el `p.name` matchea `filterText` case insensitive
      p.name.match(new RegExp(state.filterText, 'ig'))
    ))

    const {
      asideTitulo,
      asideLinks
    } = state.AppReducer;

    // y devolvemos las nuevas props
    return {
      products,
      asideTitulo,
      asideLinks
    };
  }
)(MainComponent);

export default MainWithRedux;
