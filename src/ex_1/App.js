import { Route, Switch, Redirect } from 'react-router-dom'

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
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          {/* 위 라우터를 이용하면 공백이나 시작페이지할경우 정상적으로 웰컴이 나옴// Redirect 리랜더링해서 페이지 확인 */}
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
