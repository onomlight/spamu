import { Route } from 'react-router-dom'
const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Route path="/welcome/new-user">
        <p>뉴뉴저</p>
      </Route>
    </section>
  )
}

export default Welcome
// 어느곳이나 정의가 가능하고 react-router-dom에 의해 평가됨
