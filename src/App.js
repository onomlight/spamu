import { Route, Switch } from 'react-router-dom'

import Welcome from './pages/Welcome'
import Products from './pages/Products'
import MainHeader from './components/MainHeader'
import ProductDetail from './pages/ProductsDetail'
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/product/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  )
}
export default App
//  our-domain.com/ => Component A
// our-domain.com/products => Component B
// our-domain.com/product-detail/<any value>

// 스위치는 라우트 컴포넌트 주위에 래핑됨
//exact 일치하는것을 일치하는지여부를 확인해줌 /
