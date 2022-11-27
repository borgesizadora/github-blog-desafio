import { Routes, Route, Navigate } from 'react-router-dom'

import { Layout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Post } from './pages/Post'

export const Router = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/:id" element={<Post />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found" replace />} />
    </Route>
  </Routes>
)
