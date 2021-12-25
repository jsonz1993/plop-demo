import { Suspense } from 'react';
import { Link, Outlet, useRoutes } from 'react-router-dom'
import ROUTERS_CONFIG from './router';
import './App.css'

function App() {
  const element = useRoutes(ROUTERS_CONFIG)
  return (
    <div className="App">
      <div className='nav'>
        {
          ROUTERS_CONFIG.map(route => {
            const { path, children } = route
            if (children?.length) {
              return children.map(child => (
                <Link to={child.path} key={child.path}>{child.path}</Link>
              ))
            }
            return (
              <Link to={path} key={path} >{path}</Link>
            )
          })
        }
      </div>
      <Suspense fallback="loading...">
        {element}
      </Suspense>
      <Outlet />
    </div>
  );
}

export default App;
