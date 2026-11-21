import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/layout/SiteLayout'
import { Home } from './pages/Home'

const Work = lazy(() =>
  import('./pages/Work').then((module) => ({ default: module.Work })),
)

const ContactPage = lazy(() =>
  import('./pages/ContactPage').then((module) => ({ default: module.ContactPage })),
)

const SoftwarePolicies = lazy(() =>
  import('./pages/SoftwarePolicies').then((module) => ({ default: module.SoftwarePolicies })),
)

const AppPolicy = lazy(() =>
  import('./pages/AppPolicy').then((module) => ({ default: module.AppPolicy })),
)

const PolicyDocument = lazy(() =>
  import('./pages/PolicyDocument').then((module) => ({ default: module.PolicyDocument })),
)

function RouteFallback() {
  return <div className="min-h-svh bg-paper" aria-busy="true" />
}

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route
          path="work"
          element={
            <Suspense fallback={<RouteFallback />}>
              <Work />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<RouteFallback />}>
              <ContactPage />
            </Suspense>
          }
        />
        <Route
          path="software-policies"
          element={
            <Suspense fallback={<RouteFallback />}>
              <SoftwarePolicies />
            </Suspense>
          }
        />
        <Route
          path="software-policies/:appSlug"
          element={
            <Suspense fallback={<RouteFallback />}>
              <AppPolicy />
            </Suspense>
          }
        />
        <Route
          path="software-policies/:appSlug/:docSlug"
          element={
            <Suspense fallback={<RouteFallback />}>
              <PolicyDocument />
            </Suspense>
          }
        />
        <Route path="*"element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
