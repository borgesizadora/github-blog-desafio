import { Routes, Route } from 'react-router-dom'

import { Layout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Post } from './pages/Post'

export const Router = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/:id" element={<Post />} />
    </Route>
  </Routes>
)
